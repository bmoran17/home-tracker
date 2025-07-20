import "./Room.css";
import React, { useState, useEffect } from "react";

export default function Room(props) {
    const room = props.room;
    
    const [data, setData] = useState(props.data);
    const [newItem, setNewItem] = useState({
        photo: "",
        name: "",
        link: "",
        quantity: "",
        lastPurchase: "",
        need: false,
    });
    
    
    useEffect(() => {
        const newItemForm = document.getElementById("addItemForm");
        newItemForm.addEventListener("submit", handleSave);
        renderTable()
    }, [data]);
    
    
    function handleSave(event) {
        event.preventDefault();
        const newItemForm = document.getElementById("addItemForm");
        const inputs = document.querySelectorAll('input');
        
        setNewItem({
            ...newItem, 
            photo: inputs[0].value,
            name: inputs[1].value,
            link: inputs[2].value,
            quantity: inputs[3].value,
            lastPurchase: inputs[4].value,
            need: inputs[5].value
        })
        
        newItemForm.reset();
        
        setData({
            ...data,
            [`item${Object.keys(data).length + 1}`]: newItem
        });
        
        console.log("data ", data);
    }
    
    function renderTable() {
        return (
            Object.entries(data).map(([key, item]) => (
                    <tr key={key}>
                        <td><img src={item.photo} alt={item.name} width={50} height={50} /></td>
                        <td>{item.name}</td>
                        <td><a href={item.link}>click</a></td>
                        <td>{item.quantity}</td>
                        <td>{item.lastPurchase}</td>
                        <td>{item.need ? "Yes" : "No"}</td>
                        {/* <td><button className="editBtn" id={`${key}`}>Edit</button></td> */}
                    </tr>
                ))
        )
    }
    

    
    
    // const editBtns = document.querySelectorAll('.editBtn');
    // editBtns.forEach(btn => {
    //     btn.addEventListener('click',function(event) {
    //         console.log('Button Clicked:', btn.id);
    //     })
    // });
    
    // function addItem() {
    //     const form = document.getElementById("addItemForm");
    //     if (form.style.display === "none") {
    //         form.style.display = "block";
    //     } else {
    //         form.style.display = "none";
    //     }
    // }
    
    return(
        <>
        <h2>{room} Items</h2>
        
        <form id="addItemForm">
        <table>
            <thead>
            <tr>
                <th>Photo</th>
                <th>Item</th>
                <th>Link</th>
                <th>Quantity</th>
                <th>Last Purchase</th>
                <th>Need</th>
            </tr>
            </thead>
            <tbody>
                {renderTable()}
                
                <tr>
                    <td><input name="pic" placeholder="pic" /></td>   
                    <td><input name="itemName" placeholder="Tajin" /></td> 
                    <td><input name="itemLink" placeholder="www.tajin.com" /></td> 
                    <td><input name="itemQuantity" placeholder="3 small bottles" /></td>   
                    <td><input name="itemLastPurchased" placeholder="12-25-2006" /></td>    
                    <td><input name="itemNeeded" type="checkbox" /></td> 
                    <td><input type="submit" value="Save"></input></td>
                </tr>
            </tbody>  
        </table>
         </form>
        {/* <button onClick={addItem} type="submit">Add Item</button> */}
        </>  
    );
} 