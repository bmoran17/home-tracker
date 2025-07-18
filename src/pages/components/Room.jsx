import "./Room.css";

export default function Room(props) {
    const data = props.data;
    const room = props.room;
    
    function addItem() {
        const form = document.getElementById("addItemForm");
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    }
    
    return(
        <>
        <h2>{room} Items</h2>
        <table>
            <tr>
                <th>Photo</th>
                <th>Item</th>
                <th>Link</th>
                <th>Quantity</th>
                <th>Last Purchase</th>
                <th>Need</th>
            </tr>
            <tbody>
                {Object.entries(data).map(([key, item]) => (
                    <tr key={key}>
                        <td><img src={item.photo} alt={item.name} width={50} height={50} /></td>
                        <td>{item.name}</td>
                        <td><a href={item.link}>click</a></td>
                        <td>{item.quantity}</td>
                        <td>{item.lastPurchase}</td>
                        <td>{item.need ? "Yes" : "No"}</td>
                        <td><button className="editBtn">Edit</button></td>
                    </tr>
            ))}
                </tbody>
        </table>
        <form id="addItemForm" style={{display: "none"}}>
            <label>
                Item Name:
            <input type="text" name="itemName" required />
            </label>
            <label>
                Link:
                <input type="text" name="link" />
            </label>
            <label>
                Quantity:
                <input type="number" name="quantity" />
            </label>
            <label>
                Last Purchase:
                <input type="date" name="lastPurchase" />
            </label>
            <label>
                Need:
                <input type="checkbox" name="need" />
            </label>
        </form>
        <button onClick={addItem} type="submit">Add Item</button>
        </>  
    );
} 