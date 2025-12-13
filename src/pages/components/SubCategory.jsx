import CategoryPage from "./CategoryPage"
import { useLocation, Link } from 'react-router-dom';
// import {data} from './Home'

export const SubCategory = () => {
    const location = useLocation();
    const { category, items } = location.state || {};
    // console.log("items", items)
    const objectLength = Object.keys(items).length;
    // console.log("heree", objectLength)
    
    function renderCategories(categories) {
    if (objectLength > 0 ) {
      const keysArray = Object.keys(items);
      // console.log("test", keysArray)
      
      return (
        <div id="categories-container">
        {keysArray.map(subcategory => {
          // console.log("category: ", category)
          // console.log("subcategory: ", { category, items: items[subcategory] })
          
          return (
            <Link
              key={subcategory}
              to={`${subcategory}`}
              state={{ category, items: items[subcategory] }}
              className="category-link"
            >
              <div className="ind-category">{subcategory}</div>
            </Link>
          )
        })}
        </div>
      )
    } 
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

        {renderCategories(items)}
        </main>
    )
}
