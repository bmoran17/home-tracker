import { useEffect, useState } from "react"
import "./Home.css"

export const Home = () => {
  const categories = ["Kitchen", "Bedroom", "Skincare", "Cleaning", "Bathroom", "Cats"];
  const [data, setData] = useState(null);
  const [addCategory, setAddCategory] = useState();
  
  useEffect(() => {
    // create local storage object for the first time
    if (localStorage.getItem("hometracker") === null) {
      // create local storage
      const localObject = {
        "name": "myHome",
        "categories": { }
      }
      
      // convert object to a JSON string
      const objectAsString = JSON.stringify(localObject)
      // store string in local storage
      localStorage.setItem("hometracker", objectAsString);
      setData(localObject)
      // local storage object exists already
    } else {
      const retrievedData = JSON.parse(localStorage.getItem("hometracker"));
      setData(retrievedData);
    }
  }, []);
  
  useEffect(() => {
    if (data !== null) {
      renderCategories(data.categories);
      // data.forEach(element => console.log("=> ", element));
    }
  }, [data]);
  
  function renderCategories(categories) {
    categories = {
      // "kitchen" : ["pantry", "cabinet", "freezer", "fridge", "coffee"],
      // "other" : ["subcat", "subcat", "subcat"]
    }
    const allCategories = Object.keys(categories);
    if (allCategories.length > 1 ) {
      return (
        <div id="categories-container">
          {allCategories.map(category => {
            return (
              <a id="category-link" href={`/${category}`}>
                <div className="ind-category">{category}</div> 
              </a>
            )
          } )}
        </div>
      )
    } else {
      console.log("here")
      return (
        <div id="categories-container"> 
        <div className="ind-category">
          <input 
          placeholder="Category"
          />
          <button>
            <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>
          </button>
        </div>
        </div>
      )
    }
  }
  
  return (
    <main>
      <h2 id="title">My Home</h2>
      <div id="search-bar">
        <div id="input-container">  
          <input 
            type="text" id="category-input" name="category" placeholder="Search Home">
          </input>
        </div>
        <button> 
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/add.png" alt="add" />
        </button>

        <button>
          <img 
            width="24" 
            height="24" 
            src="https://img.icons8.com/material-outlined/24/minus-sign.png" 
            alt="minus-sign"
          />
        </button>
      </div>
      
      {renderCategories(data)}
       
    </main>
  )
}