import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ allTodos,  getTodos }) => {
  const [todosToDisplay, setTodosToDisplay] = useState([]);

  useEffect(() => {
    setTodosToDisplay(allTodos);
  }, [allTodos]);

  const handleToDoList = (e) => {
    if (e.target.name === "all") {
      setTodosToDisplay(allTodos);
    } else if (e.target.name === "todo") {
      let todos = allTodos.filter((item) => item.isCompleted === false);
      setTodosToDisplay(todos);
    } else if (e.target.name === "done") {
      let dones = allTodos.filter((item) => item.isCompleted === true);
      setTodosToDisplay(dones);
    }
  };
  console.log(todosToDisplay);

  return (
    <div className="flex flex-col items-center my-5">
      <div>
        <button
          name="all"
          className="bg-blue-600 text-white text-lg font-semibold py-1.5 w-24 mr-1 rounded-l-lg hover:opacity-80"
          onClick={handleToDoList}
        >
          All
        </button>
        <button
          name="todo"
          className="bg-blue-600 text-white text-lg font-semibold py-1.5 w-24 mr-1 hover:opacity-80"
          onClick={handleToDoList}
        >
          Todo
        </button>
        <button
          name="done"
          className="bg-blue-600 text-white text-lg font-semibold py-1.5 w-24 rounded-r-lg hover:opacity-80"
          onClick={handleToDoList}
        >
          Done
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-7 my-5 px-5">
        {todosToDisplay?.map((item) => (
          <TodoCard key={item.id} item={ item } getTodos={getTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
