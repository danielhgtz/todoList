import "./ItemList.css";

export const ItemList = ({ item, handleMarkAsCompleted, handleDeleteItem }) => {
  return (
    <div className="todo-list-div">
      <p
        className={
          item.completed
            ? "todo-list-item-completed"
            : "todo-list-item-incompleted"
        }
      >
        {item.name}
      </p>
      <div>
        <button
          className="todo-list-item-complete-btn"
          onClick={() => {
            handleMarkAsCompleted(item.id);
          }}
        >
          Complete
        </button>
        <button
          className="todo-list-item-erase-btn"
          onClick={() => {
            handleDeleteItem(item.id);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
};
