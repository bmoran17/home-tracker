import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

export const CategoryPage = ({data}) => {
  const categories = data.categories || {};
  const categoriesLength = Object.keys(categories).length || 0; 

  // const categoriesLength = 1;
  // console.log("test", categoriesLength)

  function renderCategories(categories) {
    if (categoriesLength > 0 ) {
      const keysArray = Object.keys(categories);
      
      return (
        <div id="categories-container">
        {keysArray.map(category => {
          // console.log({ category, items: categories[category] })
          return (
            <Link
              key={category}
              to={`${category}`}
              state={{ category, items: categories[category] }}
              className="category-link"
            >
              <div className="ind-category">{category}</div>
            </Link>
          )
        })}
        </div>
      )
    } 
    // else {
    //   return (
    //     <div id="categories-container"> 
    //     <div className="ind-category">
    //       <input 
    //       placeholder="Category"
    //       />
    //       <button>
    //         <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>
    //       </button>
    //     </div>
    //     </div>
    //   )
    // }
  }

  return (
    <main>
      <div id='category-header'>
        <button>Back to my Home</button>
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

      {renderCategories(categories)}
    </main>
  )
};

export default CategoryPage;
