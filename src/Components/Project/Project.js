import React from "react";
import "./Project.css";
const Project = () => {
  let [hover, setHover] = React.useState(false);

  function handleHover(event) {
    event.preventDefault();
    setHover(true);
  }

  function handleMouseLeave(event) {
    event.preventDefault();
    setHover(false);
  }
  return (
    <div className="ProjectContianer" id="Project">
      <div className="ProjectDetails">
        <h1 className="ProjectHeading">Project</h1>
        <p>
          These are previous Project which I have done You can check it out Here
        </p>

        <div className="ProjectExample">
          <div className="Project__pic1">
          <a href="https://precious-quokka-1f552b.netlify.app/" target="_blank">

            <img src="Assets/Rectangle7.png" alt="" />
          </a>
          </div>
          <div className="Project__pic1">
          <a href="https://loquacious-empanada-44511a.netlify.app/" target="_blank">

            <img src="Assets/Rectangle8.png" alt="" />
          </a>
          </div>
          <div className="Project__pic1">
          <a href="https://gym11webiste.netlify.app/" target="_blank">

            <img
              src="Assets/Rectangle9.png"
              alt=""
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </a>
            {/* {hover && ( */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg> */}
            {/* )} */}
          </div>
        </div>

        {/* <div className="ProjectExample">
          <div className="Project__pic3"></div>
          <div className="Project__pic4">
            <img src="Assets/Rectangle10.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
