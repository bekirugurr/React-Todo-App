import { FaTags } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import tickIcon from "../assets/tick_icon.png";
import editIcon from "../assets/edit_icon.png";
import deleteIcon from "../assets/trash_icon.png";
import axios from "axios";

const TodoCard = ({ item, getTodos, setInitialData, allTodos, setAllTodos }) => {
  let priorityToDisplay;
  let priorityColor;

  //! Since mockapi does not a field for combo box, for priority select box number field and modulus operator were used in below
  if (item.priority % 3 === 0) {
    priorityToDisplay = "Critical";
    priorityColor = "#F43F5E";
  } else if (item.priority % 3 === 2) {
    priorityToDisplay = "Important";
    priorityColor = "#EAB308";
  } else {
    priorityToDisplay = "Normal";
    priorityColor = "#198754";
  }

  const handleTick = () => {
    let config = {
      method: "put",
      url: `https://631b6888fae3df4dcffe10be.mockapi.io/todos/${item.id}`,
      data: { ...item, isCompleted: !item.isCompleted },
    };
    axios(config)
      .then((result) => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://631b6888fae3df4dcffe10be.mockapi.io/todos/${item.id}`)
      .then((result) => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    setInitialData(item);
    let todos = allTodos.filter((todo) => todo.id !== item.id);
    setAllTodos(todos);
  };

  return (
    <div
      className={
        item.isCompleted
          ? "flex flex-col justify-between w-72 h-[13.5rem] rounded-xl relative p-1 bg-gradient-to-r from-[#69b2fa] to-[#b3d7f9]"
          : "flex flex-col justify-between w-72 h-[13.5rem] rounded-xl relative p-1 bg-gradient-to-r from-[#de6262] to-[#ad9af9]"
      }
    >
      <h5 className="rounded-t-xl text-white pl-5 py-2.5 text-xl font-semibold">
        {item.title}
      </h5>
      <p className="h-[7.8rem] w-full pr-12 pl-4 pt-2 bg-white">{item.content}</p>
      <div className="flex py-1.5 pl-3 gap-2 bg-white rounded-b-xl">
        <div
          className="flex items-center text-white text-sm font-semibold py-0.5 px-2 rounded"
          style={{ backgroundColor: "#0D6EFD" }}
        >
          <FaTags className="mr-1" /> {item.label}
        </div>
        <div
          className="flex items-center text-white text-sm font-semibold py-0.5 px-2 rounded"
          style={{ backgroundColor: priorityColor }}
        >
          <BsFillExclamationCircleFill className="mr-1" /> {priorityToDisplay}
        </div>
      </div>
      <div className="flex flex-col gap-2.5 absolute right-2 top-14 bg-white">
        <button
          className="w-8 bg-emerald-600 p-1.5 rounded-full hover:opacity-80"
          onClick={handleTick}
        >
          <img src={tickIcon} alt="tick_icon" />
        </button>
        <button
          className="w-8 bg-yellow-500 p-1 rounded-full hover:opacity-80"
          onClick={handleEdit}
        >
          <img src={editIcon} alt="edit_icon" />
        </button>
        <button
          className="w-8 bg-rose-500 p-1.5 rounded-full hover:opacity-80"
          onClick={handleDelete}
        >
          <img src={deleteIcon} alt="delete_icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
