import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const serviceID = "service_st3woal";
  const templateID = "template_gu7zwso";
  const publicKey = "2bqmw7PRkCwpiJm-Z";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setDone(true);
        console.log('Form submitted successfully');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 646 644 5316
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              bridgescaila@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <p>Thank you!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
