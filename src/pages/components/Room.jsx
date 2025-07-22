import "./Room.css";
import React, { useState, useEffect, useRef } from "react";

export default function Room(props) {
    const room = props.room;
    
    const [data, setData] = useState(props.data);
    
    const photoRef = useRef(null);
    const nameRef = useRef(null);
    const linkRef = useRef(null);
    const quantityRef = useRef(null);
    const lastPurchaseRef = useRef(null);
    const needRef = useRef(null);
    
    const [newPhoto, setNewPhoto] = useState("");
    const [newName, setNewName] = useState("");   
    const [newLink, setNewLink] = useState("");
    const [newQuantity, setNewQuantity] = useState("");
    const [newLastPurchase, setNewLastPurchase] = useState("");
    const [newNeed, setNeed] = useState(false);
    const [save, setSave] = useState(false);
        
    const [newItem, setNewItem] = useState({
        photo: "",
        name: "",
        link: "",
        quantity: "",
        lastPurchase: "",
        need: false,
    });
    
    useEffect(() => {
        console.log("begin => ", data);
        
        let key = `item${Object.keys(data).length + 1}`;
        console.log(key);
        // renderTable()
        
        // key doesnt exist & button clicked => add data
        if (!(key in data) && save === true) {
            setSave(false);
            setData({
            ...data,
            [key]: newItem
            }); 
        }
            
    }, [newItem, data]); 
    
    function handleSave() {
        const updatedPhoto = photoRef.current.value;
        const updatedName = nameRef.current.value;
        const updatedLink = linkRef.current.value;
        const updatedQuantity = quantityRef.current.value;
        const updatedLastPurchase = lastPurchaseRef.current.value;
        const updatedNeed = needRef.current.checked;
  
        setNewPhoto(updatedPhoto);
        setNewName(updatedName);
        setNewLink(updatedLink);
        setNewQuantity(updatedQuantity);
        setNewLastPurchase(updatedLastPurchase);
        setNeed(updatedNeed);
        
        setSave(true);
        
        setNewItem({
            ...newItem,
            photo: updatedPhoto,
            name: updatedName,
            link: updatedLink,
            quantity: updatedQuantity,
            lastPurchase: updatedLastPurchase,
            need: updatedNeed
        });
        
        photoRef.current.value = "";
        nameRef.current.value = "";
        linkRef.current.value = "";
        quantityRef.current.value = "";
        lastPurchaseRef.current.value = "";
        needRef.current.checked = false;
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
                    <td><button className="editBtn" >Edit</button></td>
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
                    <td><input 
                        //validate input with JS
                        name="pic" 
                        placeholder="pic" 
                        type="text"  
                        ref={photoRef} />
                    </td>   
                    <td><input 
                        name="itemName" 
                        placeholder="Tajin" 
                        type="text"
                        ref={nameRef} />
                    </td> 
                    <td><input 
                        name="itemLink" 
                        placeholder="www.tajin.com" 
                        type="url"
                        ref={linkRef} />
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