import React from "react";
import Form from "./Form";
import bunny from "../assets/bunny.png";
import turtle from "../assets/turtle.png";
import brushStroke from "../assets/brushStroke.png";

const Header = ({ userName, getTodos, initialData }) => {
  return (
    <div className="flex flex-col items-center py-4 form-wrapper">
      {userName && (
        <div className="flex flex-wrap justify-center text-white mb-2 text-lg">
            <div className="flex relative 1">
              <div className="z-10 pl-3 pr-6">{userName} </div>
              <img src={brushStroke}  alt="brush_stroke" className="absolute inset-0  w-full h-full"/>
            </div>
              <div > is about to achieve something significant 👏</div>
        </div>
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
