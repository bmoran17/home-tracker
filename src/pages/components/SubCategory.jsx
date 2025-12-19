import CategoryPage from "./CategoryPage"
import { useLocation, Link, Navigate  } from 'react-router-dom';
// import {data} from './Home'

export const SubCategory = ({data, setSubcategory, category, setView}) => {
  const subcategories = data[category];
  const objectLength = Object.keys(subcategories).length;
  // console.log("check", objectLength);
    
  const handleSubcategoryClick = (subcategory) => {
    setSubcategory(subcategory);
    setView("hometracker");
  }

    function renderCategories(category) {
    if (objectLength > 0 ) {
      const keysArray = Object.keys(subcategories);
      console.log("test", keysArray)
      
      return (
        <div id="categories-container">
         {keysArray.map(category => {
    //       console.log("subcategory", subcategory)
    //       console.log("category: ", category)
    //       // console.log("subcategory: ", { category, items: items[subcategory] })
          
          return (
    //         // <Link
    //         //   key={subcategory}
    //         //   to={`${subcategory}`}
    //         //   state={{ category, subcategory, items: items[subcategory]}}
    //         //   className="category-link"
    //         // >
    //         //   <div className="ind-category">{subcategory}</div>
    //         // </Link>
            <div onClick={() => handleSubcategoryClick(category)}>
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
            <button onClick={() => {setView("home")}}>Back to Home</button>
            <h2 id='title'>{category}</h2>
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
