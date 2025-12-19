import { use, useEffect, useState } from 'react';
import { useParams, Link, useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const CategoryPage = ({setCategory, data, view, setView}) => {
  const categoriesLength = Object.keys(data).length || 0; 

  const handleCategoryClick = (category) => {
    setCategory(category)
    setView("subcategory");
  }


  function renderCategories(categories) {
    if (categoriesLength > 0 ) {
      const keysArray = Object.keys(categories);
      
      return (
        <div id="categories-container">
        {keysArray.map(category => {
          // console.log({ category, items: categories[category] })
          return (
            // <Link
            //   key={category}
            //   to={`${category}`}
            //   state={{ category, items: categories[category] }}
            //   className="category-link"
            // >
            //   <div className="ind-category">{category}</div>
            // </Link>
            // <a href={`/projects/home_tracker/${category}`}>{category}</a>
            <div onClick={() => handleCategoryClick(category)}>
              {category}
            </div>

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

  // if (!data) return null;

  return (
    <main>
      <div id='category-header'>
        {/* <button>Back to my Home</button> */}
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

      {renderCategories(data)}
    </main>
  )
};

export default CategoryPage;
