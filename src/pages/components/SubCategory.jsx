import { useContext } from "react";
import { UserContext } from "./UserContext";
import CategoryPage from "./CategoryPage"
import { useLocation, Link, Navigate  } from 'react-router-dom';
import updateState from "../../updateState";
import { type } from "@testing-library/user-event/dist/type";
// import {data} from './Home'

export const SubCategory = () => {
  const {state, dispatch} = useContext(UserContext)
  // console.log("test", state.data.categories[state.category] )
  const subcategories = state.data.categories[state.category];
  const objectLength = Object.keys(subcategories).length;
    
  const handleSubcategoryClick = (subcategory) => {
    updateState(dispatch, {type: 'subcategory', value: subcategory})
    updateState(dispatch, {type: 'view', value: "hometracker"})
  }

    function renderCategories(category) {
    if (objectLength > 0 ) {
      const keysArray = Object.keys(subcategories);
      // console.log("test", keysArray)
      
      return (
        <div id="categories-container">
         {keysArray.map(category => {
          return (
            <div key={category} onClick={() => handleSubcategoryClick(category)}>
              {category}
            </div>
          )
        })}
        </div>
      )
    } 
    }

    return (
      <main>
      <div id='category-header'>
        <button onClick={() => { updateState(dispatch, {type: 'view', value: "home"})}}>Back to Home</button>
        <h2 id='title'>{state.category}</h2>
      </div>

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

      {renderCategories(subcategories)}
      </main>
    )
}
