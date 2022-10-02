import React, { useState , useEffect } from "react";
import "./Header.css";
import { Sling as Hamburger } from "hamburger-react";


const Headers = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [open, setOpen] = useState(false);

  function btnToggle(id) {
    setOpen(!open);
  }
 
  return (
    <div className={open ? "Header Header2" : "Header"}>
    

      <div className="Left">
        <div style={{cursor: "pointer"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }}>
        🆂🅰🅹🅸🅳🅺🅷🅰🅽🌎
        </div>
      </div>
      <div className={open ? "Right" : "Right Right2"}>
        <ul>
          <li   onClick={() => { document.getElementById("About").scrollIntoView() ; btnToggle() }}>About Me</li>
          <li
            onClick={() => { document.getElementById("Service").scrollIntoView() ;btnToggle()}}
          >
            {" "}
            Services
          </li>
          <li onClick={() => { document.getElementById("Tools").scrollIntoView() ;btnToggle() }}>
            Tools
          </li>
          <li
            onClick={() => {document.getElementById("Project").scrollIntoView() ;btnToggle() }}
          >
            {" "}
            Project{" "}
          </li>
          <li
            onClick={() => {document.getElementById("Contact").scrollIntoView() ; btnToggle() }}
          >
            {" "}
            Contact{" "}
          </li>
        </ul>
      </div>
      <span className="Togle" onClick={() => btnToggle()}>
        {" "}
        <Hamburger />{" "}
      </span>
    </div>
  );
};

export default Headers;
