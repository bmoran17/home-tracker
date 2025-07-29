import "./Home.css"

export const Home = () => {
  const categories = ["Kitchen", "Bedroom", "Skincare", "Cleaning", "Bathroom", "Cats"];
  
  return (
    <>
    <h2 id="title">My Home</h2>
    <input 
      type="text" 
      id="category" 
      name="category" 
      placeholder="Search Home"
    />
    
    <button>  
      <img 
        width="24" 
        height="24" 
        src="https://img.icons8.com/material-outlined/24/add.png" 
        alt="add"
      />
    </button>
    <button>
      <img 
        width="24" 
        height="24" 
        src="https://img.icons8.com/material-outlined/24/minus-sign.png" 
        alt="minus-sign"
      />
    </button>
    
    {categories.map((category) => (
      <a href={`/${category}`}>
        <div id="ind-category">{category}</div> 
      </a>
    ))}
    </>
  )
}