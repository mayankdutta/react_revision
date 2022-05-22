const Content = ({items, checked, del}) => {
    return (
        <>
            {(!items) ? <h3> Empty</h3> :
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.index}>
                                <input type={"checkbox"} onClick={() => checked(item.index)}/>
                                <span
                                    style={item.checked ? {textDecoration: "line-through"} : null}>{item.title} </span>
                                <button onClick={() => del(item.index)}> X</button>
                            </li>
                        )
                    })}
                </ul>
            }
        </>
    );
};

export default Content;
