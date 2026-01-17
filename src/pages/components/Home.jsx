import "react-router-dom";
import "./Home.css"
import { useEffect, useContext } from "react";
import CategoryPage from "./CategoryPage";
import { SubCategory } from "./SubCategory";
import { HomeTracker } from "./HomeTracker";
import { UserContext } from "./UserContext";
import updateState from "../../updateState";

const test = {
  "name": "myHome",
  "categories": {
    "kitchen" : {
        "spices": {
          "salt": {
            "Quantity": 3,
            "LastPurchased": "11/19/1111"
          },
          "pepper": {
            "Quantity": 3,
            "LastPurchased": "11/19/1111"
          }
        },
        "fridge": {
          "milk": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111"
          },
          "eggs": {
            "Quantity": 12,
            "LastPurchased": "11/19/1111"
          }
      }
    },
    "bathroom" : {
        "toiletries": {
          "toothpaste": {
            "Quantity": 2,
            "LastPurchased": "11/19/1111"
          },
          "shampoo": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111"
          }
        },
        "cleaning supplies": {
          "bleach": {
            "Quantity": 1,
            "LastPurchased": "11/19/1111"
          },
          "scrub brush": {
            "Quantity": 2,
            "LastPurchased": "11/19/1111"
          }
        }
    }
  }
}

export const Home = () => {
  const {state, dispatch} = useContext(UserContext)

  useEffect(() => {
    if (state.data === 0) {
      // returns local storage object or retrieves existing one
      const retrievedData = retrieveLocalObject();
      updateState(dispatch, {type: 'data', value: retrievedData.categories})
    }
  }, []);

  // useEffect(() => { console.log("state.data changed", state.data) }, [state.data]);
  
  const retrieveLocalObject = () => {
    // create local storage object for the first time
    if (localStorage.getItem("hometracker") === null) {
      const localObject = {
        "name": "myHome",
        "categories": { }
      }
      
      // convert object to a JSON string
      const objectAsString = JSON.stringify(localObject)

      // store string in local storage
      localStorage.setItem("hometracker", objectAsString);
      return localObject;
    } else { 
      // retrieve existing local storage object
      const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
      // console.log("retrievedDataObject", retrievedDataObject)
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

