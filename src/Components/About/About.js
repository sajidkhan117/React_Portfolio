import React from "react";
import Typical from "react-typical";
import "./About.css";
const About = () => {
  return (
    <div className="AboutContainer" id="About">
      <div className="About__Portion">
        <div className="lettSide">
          <div className="Description">
            <div className="welcome"> welcome to my site </div>
            <div className="Sajid"> Hi! I'm Sajid Khan Front-end Web </div>
            <div className="developer">
              <Typical
                steps={["", 1000, "Developer ", 1500, "Designer", 1500]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
            <div className="description__lorem">
              <div className="LOrem">
                {" "}
                I design and code beautifully simple things, <br /> and I love
                what I do. .
              </div>
            </div>
          </div>{" "}
          <div className="buttons_area">
            <div className="buttons__portion">
              <button className="button1">Hire me!</button>
              <button
                className="button2 "
                id="See"
                onClick={() =>
                  document.getElementById("Project").scrollIntoView()
                }
                style={{ border: "2px solid #0038FF " }}
              >
                See My Project{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="RightSideContainer">
            <div className="picBackground">
              <div className="pictureDiv">
                <img className="pic" src="Assets/sajid1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
