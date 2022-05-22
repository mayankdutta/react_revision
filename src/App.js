import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./content";
import {useEffect, useState} from "react";

function App() {
    const API_URL = "http://localhost:3500/itemss";
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("initial state");
    const [fetchError, setFetchError] = useState(null);

    /*
     * useEffect runs after every thing till below from above, rendered on the screen.
     * It is also async in nature.
     */

    /*
     *  commands for json server
     *  npx json-server -p 3500 data/db.json
     *  we wont do npm, because we dont' want json-server as our dependency.
     */
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok)
                    throw Error("data couldn't be fetched");

                const jsonResponse = await response.json();

                setItems(jsonResponse);
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message);
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
            {
                fetchError ?
                    <strong style={{color: "red"}}> Error: {fetchError} </strong>
                    :
                    <Content items={items} checked={checked} del={del}/>
            }
        </>
    );
}

export default App;
