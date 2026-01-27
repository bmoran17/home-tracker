import "react-router-dom";
import "./Home.css"
import { useEffect, useContext } from "react";
import CategoryPage from "./CategoryPage";
import { SubCategory } from "./SubCategory";
import { HomeTracker } from "./HomeTracker";
import { UserContext } from "./UserContext";
import updateState from "../../updateState";
import { type } from "@testing-library/user-event/dist/type";

const test = {
  "name": "myHome",
  "categories": {
    "kitchen" : {
        "spices": {
          "salt": {
            "Quantity": 3,
            "LastPurchased": "11/19/1111",
            "list": false
          },
          "pepper": {
            "Quantity": 3,
            "LastPurchased": "11/19/1111",
            "list": false
          }
        },
        "fridge": {
          "milk": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111",
            "list": false
          },
          "eggs": {
            "Quantity": 12,
            "LastPurchased": "11/19/1111",
            "list": false
          }
      }
    },
    "bathroom" : {
        "toiletries": {
          "toothpaste": {
            "Quantity": 2,
            "LastPurchased": "11/19/1111",
            "list": false
          },
          "shampoo": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111",
            "list": false
          }
        },
        "cleaning supplies": {
          "bleach": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111",
            "list": false
          },
          "scrub brush": {
            "Quantity": 2,
            "LastPurchased": "11/19/1111",
            "list": false
          }
        }
    }
  },
  "list": {
  }
}

export const Home = () => {
  const {state, dispatch} = useContext(UserContext)
  // console.log("here", state.data)

  useEffect(() => {
    if (state.data === 0) {
      // returns local storage object or retrieves existing one
      const retrievedData = retrieveLocalObject();
      updateState(dispatch, {type: 'data', value: retrievedData})
    }
  }, []);

  // useEffect(() => { console.log("changed", state.hometracker) }, [state.hometracker]);
   
  

  const retrieveLocalObject = () => {
    // create local storage object for the first time
    if (localStorage.getItem("hometracker") === null) {
      const localObject = {
        "name": "myHome",
        "categories": { },
        "list": {}
      }
      
      // updateState(dispatch, {type: 'hometracker', value: localObject});
      // convert object to a JSON string
      updateState(dispatch, {type:"list", value:localObject.list})
      const objectAsString = JSON.stringify(localObject)
      // store string in local storage
      localStorage.setItem("hometracker", objectAsString);
      return localObject;
    } else { 
      // retrieve existing local storage object
      const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
      updateState(dispatch, {type:"list", value:retrievedDataObject.list})
      // updateState(dispatch, {type: 'hometracker', value: retrievedDataObject});
      return retrievedDataObject
    }
  }
  
  return (
    <div>
      {state.view === "home" && <CategoryPage />}

      {state.view === "subcategory" && <SubCategory />}

      {state.view === "hometracker" && <HomeTracker />}
    </div>
  );
}

