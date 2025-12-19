import { useLocation, Navigate } from "react-router-dom"
import { useRef } from "react";

export const HomeTracker = ({data, subcategory, category, setView}) => {
  const items = data[category][subcategory]
  console.log(items)
  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const lastPurchaseRef = useRef(null);
  const needRef = useRef(null);

    const saveNewItem = (name,newItem, category) => {
      const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
      // const categories = retrievedDataObject.categories;
      retrievedDataObject.categories[category][subcategory][name] = newItem;
      localStorage.setItem("hometracker",retrievedDataObject)
      
      console.log("retrievedDataObject", retrievedDataObject);
      
    }

    // console.log("category", category);
    // console.log("subcategory", subcategory);
    // console.log("items", items);  
    
    const renderItems = () => {
      return (
        <tbody>
          {Object.entries(items).map(([key, item]) => {
            // console.log("item", key, item);
            return (
              <tr key={key}>
                <td><button>Add</button></td>
                <td>{key}</td>
                <td>{item.Quantity}</td>
                <td>{item.LastPurchased}</td>
                <td><button>Edit</button></td>
              </tr>
            )
          })}
        </tbody>
      )}

    const validateInputs = (name, quantity) => {
      if (name === "" && quantity === "") {
          alert("Please insert a name and quantity to track item!");
          return false;
      } else if (name === "") {
          alert("Please insert a name for item to track!");
          return false;
      } else if (quantity === "") {
          alert("Please insert a current quantity available for " + name + "!");
          return false;
      }
      return true;
    }

    const handleSave = () => {
      console.log("Saving new item...");
      const name = nameRef.current.value;
      const quantity = quantityRef.current.value;
      const lastPurchase = lastPurchaseRef.current.value;
      const need = needRef.current.checked;

      const cont = validateInputs(name, quantity);
        if (!cont) return

      const newItem = {
        "Quantity": quantity,
        "LastPurchased": lastPurchase,
        "Need": need
      }
      saveNewItem(name, newItem, category, subcategory);

      nameRef.current.value = "";
      quantityRef.current.value = "";
      lastPurchaseRef.current.value = "";
      needRef.current.checked = false;  
    }

    return (
      <main>
        <h2>{subcategory} Items</h2>
        <button onClick={() => {setView("subcategory")}}>Back to {category}</button>
        <table>
          <thead>
            <tr>
              <th>Add to List</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Last Purchase</th>
              {/* <th>Need</th> */}
            </tr>
          </thead>
          {/* <tbody> */}
            {renderItems()}
          {/* </tbody> */}
        </table>

        <p>Add new item to {category}</p>
        <div>
          <input 
            name="itemName" 
            placeholder="Item Name" 
            type="text"
            ref={nameRef} 
            />
          <input 
            name="itemQuantity" 
            placeholder="Quantity"
            type="text"
            ref={quantityRef} 
            />
          <input 
            name="itemLastPurchased" 
            placeholder="Last Purchased"
            type="date"
            ref={lastPurchaseRef} 
            />
          <input 
            name="itemNeeded" 
            type="checkbox" 
            ref={needRef} 
            />
          <button onClick={handleSave}>Save</button>
          <button>Clear</button>
        </div>
      </main>
    )
}