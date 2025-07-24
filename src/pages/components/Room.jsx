import "./Room.css";
import React, { useState, useEffect, useRef } from "react";

export default function Room(props) {
    // data being pass
    const room = props.room;
    const [data, setData] = useState(props.data || null);
    const [save, setSave] = useState(false);
    
    // tracks which row is being edit
    const [editKey, setEditKey] = useState(null); 
    // tracks item being edited
    const [editItem, setEditItem] = useState({ 
        name: "", 
        quantity: "", 
        lastPurchase: "", 
        need: false 
    });
    // tracks new item being added 
    const [newItem, setNewItem] = useState({
        name: "",
        quantity: "",
        lastPurchase: "",
        need: false,
    });
    
    const nameRef = useRef(null);
    const quantityRef = useRef(null);
    const lastPurchaseRef = useRef(null);
    const needRef = useRef(null);
    
    useEffect(() => {
        const storedData = localStorage.getItem(room);
        if (storedData) {
            const test = JSON.parse(storedData);
            setData(test)
            console.log(test)
        }
        
    }, []);

    useEffect(() => {
        const key = `item${Object.keys(data).length + 1}`;
        // key does not exist & button clicked => add data
        if (!(key in data) && save === true) {
            setSave(false);
            setData({
            ...data,
            [key]: newItem
            });
        }
        // store data object in local storage
        localStorage.setItem(room, JSON.stringify(data))
    }, [newItem, data]); 
    
    function handleSave() {
        const updatedName = nameRef.current.value;
        const updatedQuantity = quantityRef.current.value;
        const updatedLastPurchase = lastPurchaseRef.current.value;
        const updatedNeed = needRef.current.checked;
        
        const cont = validateInputs(updatedName, updatedQuantity);
        if (!cont) return
        
        setSave(true);
        
        setNewItem({
            ...newItem,
            name: updatedName,
            quantity: updatedQuantity,
            lastPurchase: updatedLastPurchase,
            need: updatedNeed
        });
        
        nameRef.current.value = "";
        quantityRef.current.value = "";
        lastPurchaseRef.current.value = "";
        needRef.current.checked = false;
    }
    
    function validateInputs(name, quantity) {
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
    
    function handleEdit(key) {
        const item = data[key]
        setEditKey(key);
        setEditItem(item);
    }

    function handleEditChange(attribute, value) {
        setEditItem(prev => ({
            ...prev,
            [attribute]: value
        }));
    }
    
    function handleEditSave() {
        const cont = validateInputs(editItem.name, editItem.quantity)
        if (!cont) return;
        
        setData(prevData => ({
            ...prevData,
            [editKey]: editItem
        }));

        setEditKey(null);
    }

    function renderTable() {
        return ( 
            // only if data exists!!!
            Object.entries(data).map(([key, item]) => (
                <tr key={key}>
                    { editKey === key ? (
                        <>
                        <td>
                            <input
                                type="text"
                                value={editItem.name}
                                onChange={(e) => handleEditChange("name", e.target.value)}
                                ref={nameRef}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={editItem.quantity}
                                onChange={(e) => handleEditChange("quantity", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="date"
                                value={editItem.lastPurchase}
                                onChange={(e) => handleEditChange("lastPurchase", e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                checked={editItem.need}
                                onChange={(e) => handleEditChange("need", e.target.checked)}
                            />
                        </td>
                        <td>
                            <button onClick={handleEditSave}>Save</button>
                            <button onClick={() => setEditKey(null)}>Cancel</button>
                        </td>
                    </>
                    ) : (
                        <>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.lastPurchase}</td>
                            <td>{item.need ? "Yes" : "No"}</td>
                            <td><button onClick={() => handleEdit(key)}>Edit</button></td>
                        </>
                    )
                }
            </tr>
            ))
        )
    }
    
    return(
        <>
        <h2>{room} Items</h2>
        
        <table>
            <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Last Purchase</th>
                <th>Need</th>
            </tr>
            </thead>
            <tbody>
                {renderTable()}
                
                <tr>
                    <td><input 
                        name="itemName" 
                        placeholder="Tajin" 
                        type="text"
                        ref={nameRef} />
                    </td> 
                    <td><input 
                        name="itemQuantity" 
                        placeholder="3 small bottles"
                        type="text"
                        ref={quantityRef} />
                    </td>
                    <td><input 
                        name="itemLastPurchased" 
                        placeholder="12-25-2006"
                        type="date"
                        ref={lastPurchaseRef} />
                    </td>    
                    <td><input 
                        name="itemNeeded" 
                        type="checkbox" 
                        ref={needRef} />
                    </td> 
                    <td><button onClick={handleSave}>Save</button></td>
                </tr>
            </tbody>  
        </table>
        </>  
    );
} 