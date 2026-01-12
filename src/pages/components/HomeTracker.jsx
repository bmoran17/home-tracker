import { useLocation, Navigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { render } from "@testing-library/react";

export const HomeTracker = ({data, subcategory, category, setView}) => {

  // const [update, setUpdate] = useState(false);
  // const items = data[category][subcategory]
  const [items, setItems] = useState(data[category][subcategory]);
  // console.log(items)
  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const lastPurchaseRef = useRef(null);
  const needRef = useRef(null);

    const saveNewItem = (name,newItem, category) => {
      const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
      // add saved item
      retrievedDataObject.categories[category][subcategory][name]= newItem;
      const objectAsString = JSON.stringify(retrievedDataObject);
      localStorage.setItem("hometracker",objectAsString);
      // console.log("retrievedDataObject", retrievedDataObject);
      // setUpdate(!update);
      setItems(retrievedDataObject.categories[category][subcategory]);
    }
    const editItem = (name, item) => {
      console.log("Editing item...", name, item);
      // implement edit functionality here

    }

    useEffect(() => {
      // re-render component when new item is added

    }, [items]); 

    const renderItems = () => {
      console.log("rendering items...");
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
                <td><button 
                      onClick={() => {editItem(key, item)}}>Edit
                    </button></td>
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