import React from "react";
import "./service.css";
const Service = () => {
  return (
    <div className="Service" id="Service">
      <div className="ServiceContainer">
        <div className="servicePortion">
          <h4 className="serviceHeading"> Service</h4>
          <div className="serviceLorem">
          I Provide all the below labeled services with immense efficiency and quality.  {" "}
            <br />
            Always looking for oppertunities to grow and and enlarge my skillset.{" "}
            <br />
           
          </div>
          <div className="AllServices">
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/React.svg" alt="" />
                </div>
                <div className="ServiceNames">
                  React <br />
                  App
                </div>
              </div>
              <div className="ServiceParagraph">
                <p>
                  {" "}
                  We Design, Develop and Deploy Reliable, <br />  Efficient and Appealing Website, <br />
                   Web App and Mobile Application.
                </p>
                <p></p>
              </div>
            </div>
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/Landing.svg" alt="" />
                </div>
                <div className="ServiceNames">
                  Landing <br /> pages
                </div>
              </div>
              <div className="ServiceParagraph">
                {" "}
                <p>We create High Qualiy Landing Pages, <br /> Dashboards and Admin Panels </p>
              </div>
            </div>
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/PSD.svg" alt="" />
                </div>
                <div className="ServiceNames">
                  PSD To <br /> CODE{" "}
                </div>
              </div>
              <div className="ServiceParagraph">
                {" "}
                <p> we convert All type of</p>
                <p> PSD, Adobe XD ,   Figma , Adobe Illustrator </p>
                <p> To code </p>

              </div>
            </div>
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/BugFix.png" alt="" />
                </div>
                <div className="ServiceNames">
                  Bug <br /> Fixing
                </div>
              </div>
              <div className="ServiceParagraph"> We find and debug all sort of flaws,    bugs and errors <br /> in you code and fix them.  </div>
            </div>
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/WEBScraping.png" alt="" />
                </div>
                <div className="ServiceNames">
                  WEB <br /> Scraping
                </div>
              </div>
              <div className="ServiceParagraph">We write scripts to extract the require infortion or  <br /> data from any sort of website.</div>
            </div>
            <div className="item">
              <div className="ForIcon">
                <div>
                  <img src="Assets/Responsive.png" alt="" />
                </div>
                <div className="ServiceNames">
                  Responsive
                  <p>Design</p>
                </div>
              </div>
              <div className="ServiceParagraph">
                Responsive websites built for an optimal user experience <br />{" "}
                that achieves your business goals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
