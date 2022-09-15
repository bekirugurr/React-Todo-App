import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { toastWarnNotify } from "../helpers/ToastNotify";

const emptyData = {
  title: "",
  content: "",
  priority: 2,
  label: "",
  isCompleted: false
}

const Form = ({ getTodos, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const URL = "https://631b6888fae3df4dcffe10be.mockapi.io/todos";
  useEffect(() => {
  setFormData(initialData)
  }, [initialData])
  
  console.log("initialData", initialData);
  console.log("formData", formData);

  const isLabel = (e) => {
    if (e.target.name === "priority") {
      return Number(e.target.value);
    } else {
      return e.target.value;
    }
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: isLabel(e) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title.length >= 3 &&
      formData.content.length >= 3 &&
      formData.label
    ) {
      if (formData.id) {
        axios({ method: "put", url: URL + `/${formData.id}`, data: formData })
        .then((result) => {
          getTodos();
          setFormData(emptyData);
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        axios({ method: "post", url: URL, data: formData })
          .then((result) => {
            getTodos();
            setFormData(emptyData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (formData.title.length < 3) {
      toastWarnNotify("Title must be at least 3 characters!");
    } else if (formData.content.length < 3) {
      toastWarnNotify("Content must be at least 3 characters!");
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
          className="pl-4 pr-2 py-1.5 rounded border border-1 border-blue-500 w-[20rem]  outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.title}
          maxLength="25"
          required
        />
        <textarea
          name="content"
          id="content"
          rows="3"
          placeholder="💪 What are you going to do?"
          className="resize-none pl-4 pr-6 py-1.5 rounded border border-1 border-blue-500 w-[20rem]  outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.content}
          maxLength="90"
          required
        ></textarea>
        <select
          name="priority"
          id="priority"
          className="pl-4 py-1.5 rounded border border-1 border-blue-500 w-[14rem] outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.priority}
        >
          <option value="3">😱 Critical Priority</option>
          <option value="2">😨 Important Priority</option>
          <option value="1">😧 Normal Priority</option>
        </select>
        <input
          name="label"
          type="text"
          placeholder="🔖 Enter task tag"
          className="pl-4 py-1.5 rounded border border-1 border-blue-500 w-[14rem] outline-none focus:shadow-md focus:shadow-blue-500"
          onChange={handleFormData}
          value={formData.label}
          maxLength="10"
          required
        />
        <button type="submit" className="absolute right-5 bottom-6">
          <BsFillPlusCircleFill className=" w-[5rem]  h-[5rem]  text-blue-600 " />
        </button>
      </form>
    </div>
  );
};

export default Form;
