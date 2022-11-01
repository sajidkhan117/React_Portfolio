
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import "./Contact.css";
const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jcsw48w', 'template_psob3wl', form.current, 'mM01tMrJnSyHYnhlF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
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
        <form ref={form} onSubmit={handleSubmit}
          className="Form__Portion"
          action="
        "
        >
          <div className="Form__input">
            <input
              type="text"
              id=""
              name="name"
              placeholder="Full Name"
              className="Form__Name"

              required
            />
            <input
              type="text"
              name="email"
              id=""
              placeholder="Your Email"
              className="Form__Name"
              required

            />
          </div>
          <div className="Form__text">
            <textarea className="TextArea"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder=" your Message"
              required
              
           / >
           {/* <input type="submit" name="message" value="end" /> */}

          </div>

          <div className="For__btn">
            <button type="submit" value="Send" className="Send__Btn"> Send  Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
