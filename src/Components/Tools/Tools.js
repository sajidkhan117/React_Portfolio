import React from "react";
import "./Tools.css";
const Tools = () => {
  return (
    <div className="ToolContianer " id="Tools">
      <div className="ToolContent">
        <div>
          <h1 className="Tool">Tools</h1>
          <p>As a Frontend Developer the Tools which I used is </p>
          <p>
            Visual Studio Code , Sublime Text , Node Package Manager (NPM) , Git
            , Github.
          </p>
        </div>
        <div className="ToolsImages"> 
          {" "}
          <img src="Assets/Frame10.png" alt="" />{" "}
          <img src="Assets/Frame11.png" alt="" />{" "}
          <img src="Assets/Frame12.png" alt="" />{" "}
          <img src="Assets/Frame13.png" alt="" />{" "}
          <img src="Assets/Frame14.png" alt="" />{" "}
          <img src="Assets/Frame15.png" alt="" />{" "}
          
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Tools;
