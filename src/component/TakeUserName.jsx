import { useState } from "react";
import { toastSuccesNotify } from "../helpers/ToastNotify";


const TakeUserName = ({ setUserName }) => {
  const [formData, setFormData] = useState("");
  
  const handleSubmit = (e) => { 
    e.preventDefault()
    setUserName(formData);
    localStorage.setItem("User Name For Todo App", JSON.stringify(formData))
    toastSuccesNotify(`Welcome ${formData}`)
    setFormData("")
   }

  return (
    <div className="absolute  bg-slate-900/50 bg w-full h-full z-10">
      <form className=" py-12 mt-12 bg-blue-50 mx-auto w-[32rem] rounded-3xl flex flex-col gap-6 items-center border border-2 border-rose-400"
      onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-slate-700 font-semibold text-xl">
          Enter your user name please...
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="pl-4 pr-2 py-2 rounded-xl border border-2 border-rose-400 outline-none focus:shadow-md focus:shadow-rose-400 text-slate-600 font-medium w-64 bg-white"
          value={formData}
          onChange={(e)=>setFormData(e.target.value)}
          required
        />
        <input
          type="submit"
          value="Submit"
          className="py-2 px-6 text-white bg-rose-500 rounded-3xl "
        />
      </form>
    </div>
  );
};

export default TakeUserName;
