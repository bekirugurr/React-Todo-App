import React from "react";
import { FaTags } from 'react-icons/fa';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import tickIcon from '../assets/tick_icon.png'
import editIcon from '../assets/edit_icon.png'
import deleteIcon from '../assets/trash_icon.png'

const TodoCard = ({ id, title, content, priority, label, isCompleted }) => {
  let priorityToDisplay;
  let priorityColor;
  if (priority % 3 === 0) {
    priorityToDisplay = "Critical";
    priorityColor = "#F43F5E";
  } else if (priority % 3 === 2) {
    priorityToDisplay = "Important";
    priorityColor = "#EAB308";
  } else {
    priorityToDisplay = "Normal";
    priorityColor = "#198754";
  }

  return (
    <div className="flex flex-col justify-between w-72 h-[13.5rem] gap-3 border border-4 border-transparent rounded-xl relative" style={{background: isCompleted
      ? "linear-gradient(to right, white, white), linear-gradient(to right, #69b2fa, #b3d7f9)"
      : "linear-gradient(to right, white, white), linear-gradient(to right,  #de6262, #ad9af9 )", backgroundClip:'padding-box, border-box', backgroundOrigin:"padding-box, border-box"}}>
      <h5
        className="rounded-t-xl text-white pl-5 py-3 text-xl font-semibold"
        style={{
          background: isCompleted
            ? "linear-gradient(to right, #69b2fa, #b3d7f9),linear-gradient(to right, #69b2fa, #b3d7f9)"
            : "linear-gradient(to right, #de6262, #ad9af9 ), linear-gradient(to right,  #de6262, #ad9af9 )", margin:"-3px"
        }}
      >
        {title}
      </h5>
      <p className="h-full mr-12 pl-4 " >{content}</p>
      <div className="flex py-1.5 pl-3 gap-2">
        <div className="flex items-center text-white text-sm font-semibold py-0.5 px-2 rounded" style={{ backgroundColor: "#0D6EFD" }}>
          <FaTags className="mr-1"/> {label}
        </div>
        <div className="flex items-center text-white text-sm font-semibold py-0.5 px-2 rounded" style={{ backgroundColor: priorityColor }}>
        <BsFillExclamationCircleFill className="mr-1"/> {priorityToDisplay}
        </div>
      </div>
      <div className="flex flex-col gap-2.5 absolute right-1 top-14">
        <button className="w-8 bg-emerald-600 p-1.5 rounded-full hover:opacity-80">
          <img src={tickIcon} alt="tick_icon" />
        </button>
        <button className="w-8 bg-yellow-500 p-1 rounded-full hover:opacity-80">
          <img src={editIcon} alt="edit_icon" />
        </button>
        <button className="w-8 bg-rose-500 p-1.5 rounded-full hover:opacity-80">
          <img src={deleteIcon} alt="delete_icon" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
