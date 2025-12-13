import "react-router-dom";
import "./Home.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryPage from "./CategoryPage";

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
  const [tracker, setTracker] = useState({});

  useEffect(() => {
    // returns local storage object or retrieves existing one
    // data = retrieveLocalObject();
    setTracker(test);
    // setCategories(tracker.categories)
    // setCategories(Object.keys(data.categories))
  }, []);
  

  function retrieveLocalObject() {
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
      return retrievedDataObject
    }
  }
  
  return (
    <CategoryPage data={tracker} />
  );
}

