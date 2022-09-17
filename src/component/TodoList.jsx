import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import antAndCicade from '../assets/antandcicade.jpg'

const TodoList = ({ allTodos,  getTodos, setInitialData }) => {
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
      {todosToDisplay.length !== 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7 my-5 px-2 ">
        {todosToDisplay?.map((item) => (
          <TodoCard key={item.id} item={ item } getTodos={getTodos} setInitialData={setInitialData} />
        ))}
      </div> 
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 mb-24">
        <p className="text-2xl font-semibold  mt-5 text-rose-600 ">You did not add a todo to this tab ...</p>
        <img src={antAndCicade} alt="ant_and_cicade" className='rounded-3xl w-48 outline outline-2  outline-green-700'/>
        </div>
      )}
    </div>
  );
};

export default TodoList;
