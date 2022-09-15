import React from "react";
import Form from "./Form";
import bunny from "../assets/bunny.png";
import turtle from "../assets/turtle.png";

const Header = ({ userName, getTodos, initialData }) => {
  return (
    <div className="flex flex-col items-center py-4 form-wrapper">
      {userName && (
        <h1 className="text-white mb-1 text-lg">
          <span className="font-semibold text-xl" >{userName}</span> is about to
          achieve something significant 👏
        </h1>
      )}
      <div className="flex flex-rox gap-8 lg:gap-12 items-end">
        <img src={bunny} className="h-36 mb-6 hidden md:block" alt="buny" />
        <Form getTodos={getTodos} initialData={initialData}/>
        <img src={turtle} className="h-36 mb-8 hidden md:block" alt="turtle" />
      </div>
    </div>
  );
};

export default Header;
