import './App.css';
import Header from './component/Header';
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from 'react';
import TakeUserName from './component/TakeUserName';

function App() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    let currentUserName = localStorage.getItem("User Name For Todo App") ? JSON.parse(localStorage.getItem("User Name For Todo App")) : ''
    if(currentUserName)setUserName(currentUserName)
  })
  

  return (
    <div className="App">
      <ToastContainer />
      {!userName && <TakeUserName setUserName={setUserName} />}
      <Header userName={userName}/>
    </div>
  );
}

export default App;
