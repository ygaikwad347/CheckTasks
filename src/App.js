import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const handleClick = (el) => {
    setData([...data, (el.completed = !el.completed)]);
    console.log(el);
  };

  let completeTask = 0;
  let incompleteTask = 0;

  const renderedList = data.map((el) => {
    if (el.completed === true) {
      completeTask += true;
    }
    if (el.completed === false) {
      incompleteTask += !false;
    }
    return (
      <div key={el.id}>
        <div style={{ display: "flex", margin: "10px" }}>
          <input
            type="checkbox"
            checked={el.completed}
            onClick={() => handleClick(el)}
          />
          {el.title}
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <h2>Completed Tasks : {completeTask}</h2>
      <h2>incompleted Tasks : {incompleteTask}</h2>
      {renderedList}
    </div>
  );
}
