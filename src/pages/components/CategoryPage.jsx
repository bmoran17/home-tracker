import { useState } from 'react';
import { useContext, useReducer } from 'react';
import { UserContext, UserProvider } from './UserContext';
import updateState from '../../updateState';

export const CategoryPage = () => {
  const {state, dispatch} = useContext(UserContext)
  const categoriesLength = Object.keys(state.data).length || 0; 

  const handleCategoryClick = (category) => {
    updateState(dispatch, {type: 'category', value: category})
    updateState(dispatch, {type: 'view', value: "subcategory"})
  }

  // console.log("here", state.data)


  const renderCategories = (categories) => {
    if (categoriesLength > 0 ) {
      const keysArray = Object.keys(categories);
      
      return (
        <div id="categories-container">
        {keysArray.map(category => {
          // console.log({ category, items: categories[category] })
          return (
            <div key={category} onClick={() => handleCategoryClick(category)}>
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
        <h2 id='title'>My Home</h2>
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

      {renderCategories(state.data.categories)}
    </main>
  )
};

export default CategoryPage;
