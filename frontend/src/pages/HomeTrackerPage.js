import Room from "./components/Room";

export const HomeTrackerPage = () => {
    const roomName = "Kitchen => Pantry";
    const pantryItems = {
        item1: {
            name: "Tajin",
            photo: "path/to/photo.jpg",
            link: "http://example.com",
            quantity: 2,
            lastPurchase: "2023-10-01",
            need: false
        },
        item2: {
            name: "Salt",
            photo: "path/to/photo2.jpg",
            link: "http://example.com",
            quantity: 5,
            lastPurchase: "2023-09-15",
            need: true
        },
        item3: {
            name: "Pepper",
            photo: "path/to/photo3.jpg",
            link: "http://example.com",
            quantity: 1,
            lastPurchase: "2023-10-05",
            need: false 
        }
    };
    
    return (
        <>
        <h1>Home Tracker Part</h1>

        <Room data={pantryItems} room={roomName}/>
        <Room data={pantryItems} room={roomName}/>
        
        </>
    );
}