import { useLocation } from "react-router-dom"

export const HomeTracker = () => {
    const location = useLocation();
    const { category, items } = location.state || {};
    console.log("HomeTracker", category, items);

    function renderItems() {
      // return(
        Object.entries(items).map(([key, item]) => {
          return (
          // {console.log("check",key)}
          <tbody>
          <tr>
            <td>{key}</td>
            <td>{item.quantity}</td>
            <td>{item.lastPurchased}</td>
          </tr>
          </tbody>
          )
        })
      // )
    }

    return (
      <main>
        <h2>{category} Items</h2>
        <table>
          <thead>
            <tr>
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
            // ref={nameRef} 
            />
          <input 
            name="itemQuantity" 
            placeholder="Quantity"
            type="text"
            // ref={quantityRef} 
            />
          <input 
            name="itemLastPurchased" 
            placeholder="Last Purchased"
            type="date"
            // ref={lastPurchaseRef} 
            />
          <input 
            name="itemNeeded" 
            type="checkbox" 
            // ref={needRef} 
            />
          <button>Save</button>
          <button>Clear</button>
        </div>
      </main>
    )
}