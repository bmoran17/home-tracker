import Room from "./components/Room";

export const HomeTrackerPage = () => {
    const roomName1 = "Kitchen => Pantry";
    const pantryItems = {
        item1: {
            name: "Tajin",
            quantity: 2,
            lastPurchase: "2023-10-01",
            need: false
        },
        item2: {
            name: "Salt",
            quantity: 5,
            lastPurchase: "2023-09-15",
            need: true
        },
        item3: {
            name: "Pepper",
            quantity: 1,
            lastPurchase: "2023-10-05",
            need: false 
        }
    };
    
    const roomName2 = "Kitchen => Cabinet";
    const cabinetItems = {
        item1: {
            name: "rice",
            quantity: "3 bags",
            lastPurchase: "2025-12-25",
            need: false
        },
        item2: {
            name: "beans",
            quantity: "5 bags",
            lastPurchase: "2021-05-13",
            need: true
        }
    };
    
    return (
        <>
        <h1>Home Tracker Part</h1>
        <Room data={pantryItems} room={roomName1}/>
        <Room data={cabinetItems} room={roomName2}/>
        {/* data will be null => need to fix */}
        {/* <Room room="fridge"/>  */}
        </>
    );
}