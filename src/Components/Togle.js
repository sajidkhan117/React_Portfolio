import Hamburger from "hamburger-react";
import React from "react";
import { useState } from "react";
import Sidebar from "./SideBarNAv/Sidebar";

const Togle = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    return(
        setToggle(!toggle)
    )
  };
  return (
    <div>
{/* 
      {toggle ? <button onClick={handleToggle}>X</button> :
      <button onClick={handleToggle}><Sidebar/></button>} */}

      {/* {toggle ?  */}
      <button  onClick={handleToggle} > <Hamburger /> {Togle ? <Sidebar></Sidebar> : ""}  </button> 
      {/* : */}
      {/* <button onClick={handleToggle}><Sidebar/></button> */}
      {/* }  */}

    </div>
  );
};

export default Togle;
