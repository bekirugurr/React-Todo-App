import './App.css';
import Header from './component/Header';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
    </div>
  );
}

export default App;
