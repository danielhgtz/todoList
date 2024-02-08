import { useState } from "react";
import "./InputForm.css";

export const InputForm = ({ handleAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem(inputValue);
          setInputValue("");
        }}
      >
        <input
          className="todo-list-input"
          type="text"
          placeholder="ToDo Assignment"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="todo-list-add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
