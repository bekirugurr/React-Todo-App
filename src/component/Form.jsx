import axios from "axios";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { toastWarnNotify } from "../helpers/ToastNotify";

const initilData = {
  title: "",
  content: "",
  priority: "2",
  label: "",
  isCompleted: false
};

const Form = () => {
  const [formData, setFormData] = useState(initilData);
  const URL = "https://631b6888fae3df4dcffe10be.mockapi.io/todos";

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.content.length >= 3 && formData.label) {
      axios({ method: "post", url: URL, data: formData });
      setFormData(initilData);
    } else if (formData.content.length < 3) {
      toastWarnNotify("Content must at least 3 characters!");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 m-2 p-5 bg-white rounded-xl relative"
        onSubmit={handleSubmit}
      >
        <input
          name="title"
          type="text"
          placeholder="⚡ Enter task title"
          className="pl-4 pr-2 py-2 rounded border border-1 border-blue-500 w-96  outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.title}
          required
        />
        <textarea
          name="content"
          id="content"
          rows="3"
          placeholder="💪 What are you going to do?"
          className="resize-none pl-4 pr-2 py-2 rounded border border-1 border-blue-500 w-96 outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.content}
          required
        ></textarea>
        <select
          name="priority"
          id="priority"
          className="pl-4 py-2 rounded border border-1 border-blue-500 w-72 outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.priority}
        >
          <option value="3">😱 High Priority</option>
          <option value="2">😨 Middle Priority</option>
          <option value="1">😧 Low Priority</option>
        </select>
        <input
          name="label"
          type="text"
          placeholder="🔖 Enter task tag"
          className="pl-4 py-2 rounded border border-1 border-blue-500 w-72 outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.label}
          required
        />
        <button type="submit" className="absolute right-5 bottom-6">
          <BsFillPlusCircleFill className=" w-20 h-20 text-blue-600 " />
        </button>
      </form>
    </div>
  );
};

export default Form;
