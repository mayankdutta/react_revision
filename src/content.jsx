import react, {useState} from "react";

const Content = ({items,checked, del}) => {

    return (
        <div>
            <ul>
                {items.map((item) => {
                    return (
                        <li key = {item.index}>
                            <input type={"checkbox"} onClick={() => checked(item.index)}/>
                            <span
                                style={item.checked ? {textDecoration: "line-through"} : null}>{item.title} </span>
                            <button onClick={() => del(item.index)}> X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Content;
