import { useEffect, useState } from "react"
import "./Home.css"

export const Home = () => {
  const categories = ["Kitchen", "Bedroom", "Skincare", "Cleaning", "Bathroom", "Cats"];
  const [data, setData] = useState(null);
  const [addCategory, setAddCategory] = useState();
  useEffect(() => {
    if (localStorage.getItem("myHome") === null) {
      // create local storage
      localStorage.setItem("myHome", 0);
    } else {
      const retrievedCategories = JSON.parse(localStorage.getItem('myHome'));
      setData(retrievedCategories);
    }
  }, []);
  
  useEffect(() => {
   
    if (data !== null) {
      console.log(typeof data);
      data.forEach(element => console.log("=> ", element));
      renderCategories(data);
    }
  }, [data]);
  
  function renderCategories(categories) {
    return (
      // 2 options => empty one or exisitng one
      <div id="categories-container">
          <>redner items</>
          {data.forEach(element => (
            <a id="category-link" href={`/${element}`}>
              <div id="ind-category">{element}</div> 
            </a>
          ))}
       </div>
    )
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