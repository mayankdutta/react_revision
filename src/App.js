import Content from "./content";
import Header from "./Header"
import AddItem from "./AddItem";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([
        {index: 1, title: "a", checked: false},
        {index: 2, title: "b", checked: false},
        {index: 3, title: "c", checked: false},
    ]);

    const add = (index) => {

    }

    const del = (i) => {
        const updatedItem = items.filter(item => item.index !== i)
        setItems(
            updatedItem
        )
        localStorage.setItem("shoppingList", JSON.stringify(updatedItem));
    }

    const checked = (i) => {
        const updatedItems =
            items.map(item =>
                item.index === i ? {...item, checked: !item.checked} : item)
        setItems(
            updatedItems
        )
        localStorage.setItem("shoppingList", JSON.stringify(updatedItems));
    }
    return (
        <>
            <Header title="Grocery List"/>
            <AddItem />
            <Content items={items} checked={checked} del = {del}/>
        </>
    );
}

export default App;
