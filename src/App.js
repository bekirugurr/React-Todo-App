import "./App.css";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import TakeUserName from "./component/TakeUserName";
import TodoList from "./component/TodoList";
import axios from "axios";
import Loading from "./component/Loading";

const URL = "https://631b6888fae3df4dcffe10be.mockapi.io/todos";

function App() {
  const [userName, setUserName] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [initialData, setInitialData] = useState({
    title: "",
    content: "",
    priority: 2,
    label: "",
    isCompleted: false
  });

  const getTodos = () => {
    axios.get(URL).then(({data}) => {
      setAllTodos(data)
    }).catch((err) => {
      console.log(err);
    })
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
      <Header
        userName={userName}
        getTodos={getTodos}
        initialData={initialData}
      />
      {allTodos.length == 0 ? (
      <Loading />
      ) : (
        <TodoList
        allTodos={allTodos}
        getTodos={getTodos}
        setInitialData={setInitialData}
      />
      )}
    </div>
  );
}

export default App;
