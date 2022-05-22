import Content from "./content";
import Header from "./Header";
import AddItem from "./AddItem";
import {useEffect, useState} from "react";

function App() {
    const API_URL = "http://localhost:3500/items";
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("initial state");

    /*
     * useEffect runs after every thing till below from above, rendered on the screen.
     * It is also async in nature.
     */

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                const json_reponse = await response.json();
                setItems(json_reponse);
                console.log(json_reponse);
            } catch (err) {
                console.log(err.stack());

            }
        }
        fetchItems();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // we are adding object in the array.
        // first spread the original array.
        // and then add object to it, the object that array currently supports.

        console.log(items);
        let updatedItems = [...items,
            {
                index: items.length + 1,
                title: newItem,
                checked: false,
            },
        ]
        setItems(updatedItems);
    };

    const del = (i) => {
        const updatedItem = items.filter((item) => item.index !== i);
        setItems(updatedItem);
    };

    const checked = (i) => {
        const updatedItems = items.map((item) =>
            item.index === i ? {...item, checked: !item.checked} : item
        );
        setItems(updatedItems);
    };
    return (
        <>
            <Header title="Grocery List"/>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Content items={items} checked={checked} del={del}/>
        </>
    );
}

export default App;
