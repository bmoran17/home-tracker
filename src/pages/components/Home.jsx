import { useEffect, useState } from "react"
import "./Home.css"

export const Home = () => {
  const categories = ["Kitchen", "Bedroom", "Skincare", "Cleaning", "Bathroom", "Cats"];
  const [data, setData] = useState();
  
  useEffect(() => {
    if (localStorage.getItem("myHome") === null) {
      console.log("DNE")
      localStorage.setItem("myHome", 0);
    } else {
      setData(localStorage.getItem("myHome"));
    }
  }, []);
  
  useEffect(() => {
    console.log(data);
  }, [data]);
  
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
      
      <div id="categories-container">
        {categories.map((category) => (
          <a id="category-link" href={`/${category}`}>
            <div id="ind-category">{category}</div> 
          </a>
        ))}
      </div>
    </main>
  )
}