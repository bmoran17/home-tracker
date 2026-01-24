import { useLocation, Navigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react";
import { render } from "@testing-library/react";
import { UserContext } from "./UserContext";
import updateState from "../../updateState";

export const HomeTracker = () => {
  const {state, dispatch} = useContext(UserContext)
  const [items, setItems] = useState(state.data[state.category][state.subcategory]);

  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const lastPurchaseRef = useRef(null);
  const needRef = useRef(null);

  const saveNewItem = (name,newItem, category) => {
    const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
    // add saved item to local storage
    retrievedDataObject.categories[state.category][state.subcategory][name]= newItem;
    // // update data to include new added item
    updateState(dispatch, {type: 'data', value: retrievedDataObject.categories})
    const objectAsString = JSON.stringify(retrievedDataObject);
    localStorage.setItem("hometracker",objectAsString);
    // update items showed
    setItems(retrievedDataObject.categories[state.category][state.subcategory]);
  }
  const editItem = (name, item) => {
    console.log("Editing item...", name, item);
    // implement edit functionality here
    const retrievedDataObject = JSON.parse(localStorage.getItem("hometracker"));
    delete retrievedDataObject.categories[state.category][state.subcategory][name]
    updateState(dispatch, {type: 'data', value: retrievedDataObject.categories})
    const objectAsString = JSON.stringify(retrievedDataObject);
    localStorage.setItem("hometracker",objectAsString);
    setItems(retrievedDataObject.categories[state.category][state.subcategory])
    
  }

    useEffect(() => {
      // re-render component when new item is added

    }, [items]); 

    const renderItems = () => {
      console.log("rendering items...");
      return (
        <tbody>
          {Object.entries(items).map(([key, item]) => {
            return (
              <tr key={key}>
                <td><button>Add</button></td>
                <td>{key}</td>
                <td>{item.Quantity}</td>
                {/* <td>{item.LastPurchased}</td> */}
                <td><button 
                      onClick={() => {editItem(key, item)}}>X
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
      saveNewItem(name, newItem, state.category, state.subcategory);
      handleClear();
    }

    const handleClear = () => {
      nameRef.current.value = "";
      quantityRef.current.value = "";
      lastPurchaseRef.current.value = "";
      needRef.current.checked = false;  
       
      
    }

    return (
      <main>
        <h2>{state.subcategory} Items</h2>
        <button onClick={() => {updateState(dispatch, {type: 'view', value: "subcategory"})}}>Back to {state.category}</button>
        <table>
          <thead>
            <tr>
              <th>Add to List</th>
              <th>Item</th>
              <th>Quantity</th>
              {/* <th>Last Purchase</th> */}
              {/* <th>Need</th> */}
            </tr>
          </thead>
          {/* <tbody> */}
            {renderItems()}
          {/* </tbody> */}
        </table>

        <p>Add new item to {state.category}</p>
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
          <button onClick={handleClear}>Clear</button>
        </div>
      </main>
    )
}