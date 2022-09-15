import "./App.css";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import TakeUserName from "./component/TakeUserName";
import TodoList from "./component/TodoList";
import axios from "axios";

const URL = "https://631b6888fae3df4dcffe10be.mockapi.io/todos";

function App() {
  const [userName, setUserName] = useState("");
  const [allTodos, setAllTodos] = useState([])

  const getTodos = async () => {
    const {data} = await axios.get(URL);
    setAllTodos(data);
  };

  useEffect(() => {
    let currentUserName = localStorage.getItem("User Name For Todo App")
      ? JSON.parse(localStorage.getItem("User Name For Todo App"))
      : "";
    if (currentUserName) setUserName(currentUserName);
    getTodos();
  }, [setUserName]);

  return (
    <div className="App">
      <ToastContainer />
      {!userName && <TakeUserName setUserName={setUserName} />}
      <Header userName={userName} getTodos={getTodos}/>
      <TodoList allTodos={allTodos}/>
    </div>
  );
}

export default App;
