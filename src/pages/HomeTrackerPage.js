import Room from "./components/Room";

export const HomeTrackerPage = () => {
    const roomName = "Kitchen => Pantry";
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
    
    return (
        <>
        <h1>Home Tracker Part</h1>
        <Room data={pantryItems} room={roomName}/>
        </>
    );
}