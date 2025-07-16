export default function Room(props) {
    const data = props.data;
    const room = props.room;
    
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
                    <tr>
                        <td><img src={item.photo} alt={item.name} width={50} height={50} /></td>
                        <td>{item.name}</td>
                        <td><a href={item.link}>click</a></td>
                        <td>{item.quantity}</td>
                        <td>{item.lastPurchase}</td>
                        <td>{item.need ? "Yes" : "No"}</td>
                        <td><button>Edit</button></td>
                    </tr>
            ))}
                </tbody>
        </table>
        <button>Add Item</button>
        </>  
    );
} 