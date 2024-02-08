import { useState } from "react";
import "./App.css";
import { InputForm } from "./Components/todoList/inputForm/InputForm";
import { ItemList } from "./Components/todoList/itemList/ItemList";

function App() {
  const [listOfItems, setListOfItems] = useState([]);
  document.title = "To Do List | Apex ";
  const handleAddItem = (value) => {
    if (!value) return;
    const obj = {
      name: value,
      id: Math.random(),
      completed: false,
    };
    setListOfItems([...listOfItems, obj]);
  };

  const handleMarkAsCompleted = (id) => {
    const newListOfItems = listOfItems.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });
    setListOfItems(newListOfItems);
  };

  const handleDeleteItem = (id) => {
    const newListOfItems = listOfItems.filter((item) => item.id !== id);
    setListOfItems(newListOfItems);
  };

  return (
    <div>
      <h1>To Do List | Apex Systems</h1>
      <InputForm handleAddItem={handleAddItem} />
      {listOfItems.map((item) => (
        <ItemList
          key={item.id}
          item={item}
          handleMarkAsCompleted={handleMarkAsCompleted}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default App;
