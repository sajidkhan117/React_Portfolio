import React from "react";
import Headers from "../Headers/Headers";
import About from "../About/About";
import Service from "../Services/Service";
import Tools from "../Tools/Tools";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Pages = () => {
  return (
    <div>
      <div style={{position : "fixed" , width : "100%" ,zIndex: "2"}}>
      
        <Headers />
      </div>

      <div style={{Zindex: "999"}}>
        <About />
        <Service />
        <Tools />
        <Project />
        <Contact />
        <Footer />
       
      </div>
    </div>
  );
};

export default Pages;
