
import React  from "react";
import "./Contact.css";
const Contact = () => {
  

    const handleSubmit = (e) => {
      e.preventDefault()
    }
  
  return (
    <div className="Contact__Container" id="Contact">
      <div className="Contact__Portion">
        <div className="Contact__Data">
          <h1 className="Get"> Get in Touch</h1>
          <p>So you visit my Portfoilio I think you will like it </p>
          <p>If you Want My Service so contact me </p>
        </div>

        <div className="Icons">
          <div className="box">
            <div>
              {" "}
              <img src="Assets/Vector.png" alt="" />{" "}
            </div>
            <div className="call">
              {" "}
              <h1>Call me</h1>
            </div>
            <div className="number"> +92 3129700730</div>
          </div>

          <div className="box">
            <div>
              {" "}
              <img src="Assets/Vector1.png" alt="" />{" "}
            </div>
            <div className="call">
              {" "}
              <h1>Address</h1>
            </div>
            <div className="number">
              {" "}
              Pakistan <br />
              Gilgit, City
            </div>
          </div>
          <div className="box">
            <div>
              {" "}
              <img src="Assets/Vector2.png" alt="" />{" "}
            </div>
            <div className="call">
              {" "}
              <h1>Email </h1>
            </div>
            <div className="number"> sajdkhan556@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="Form__Container">
        <form  onSubmit={handleSubmit}
          className="Form__Portion" 
          action="
        "
        >
          <div className="Form__input">
            <input
              type="text"
              name=""
              id=""
              placeholder="  Full Name"
              className="Form__Name"
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="  Your Email"
              className="Form__Name"
              required

            />
          </div>
          <div className="Form__text">
            <textarea className="TextArea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=" your Message"
              required

            ></textarea>

          </div>
          <div className="For__btn">

             <button  type="submit" className="Send__Btn"> Send  Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
