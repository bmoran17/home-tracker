import "react-router-dom";
import "./Home.css"
import { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { use } from "react";
import { SubCategory } from "./SubCategory";
import { HomeTracker } from "./HomeTracker";

// const test = {
//   "name": "myHome",
//   "categories": {
//     "kitchen" : {
//         "spices": {
//           "salt": {
//             "Quantity": 3,
//             "LastPurchased": "11/19/1111"
//           },
//           "pepper": {
//             "Quantity": 3,
//             "LastPurchased": "11/19/1111"
//           }
//         },
//         "fridge": {
//           "milk": {
//             "Quantity": 1,
//             "LastPurchased": "11/19/1111"
//           },
//           "eggs": {
//             "Quantity": 12,
//             "LastPurchased": "11/19/1111"
//           }
//       }
//     },
//     "bathroom" : {
//         "toiletries": {
//           "toothpaste": {
//             "Quantity": 2,
//             "LastPurchased": "11/19/1111"
//           },
//           "shampoo": {
//             "Quantity": 1,
//             "LastPurchased": "11/19/1111"
//           }
//         },
//         "cleaning supplies": {
//           "bleach": {
//             "Quantity": 1,
//             "LastPurchased": "11/19/1111"
//           },
//           "scrub brush": {
//             "Quantity": 2,
//             "LastPurchased": "11/19/1111"
//           }
//         }
//     }
//   }
// }

export const Home = () => {
  const [data, setData] = useState(0);
  const [view, setView] = useState("home");
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);

  
  useEffect(() => {
    if(view === "home" ) {
      <CategoryPage data={data} />
    }
    if (data === 0) {
      // returns local storage object or retrieves existing one
      const retrievedData = retrieveLocalObject();
      setData(retrievedData.categories);
    } else {
      console.log("data exists", data)
    }
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
      console.log("retrievedDataObject", retrievedDataObject)
      return retrievedDataObject
    }
  }
  
  return (
    <div>
      {view === "home" && 
        <CategoryPage 
          setCategory={setCategory} 
          data={data} setView={setView}/>}

      {view === "subcategory" && 
        <SubCategory data={data} category={category} setSubcategory={setSubcategory} 
        setView={setView}/>}

      {view === "hometracker" && 
        <HomeTracker data={data} subcategory={subcategory} category={category} setView={setView} />}
    </div>
  );
}

