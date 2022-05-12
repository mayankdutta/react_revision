import { useState } from "react";
const Content = () => {
  const [items, setItems] = useState([
    { title: "a", checked: false },
    { title: "b", checked: false },
    { title: "c", checked: false },
  ]);

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>item.title</li>;
        })}
      </ul>
    </div>
  );
};

export default Content;
