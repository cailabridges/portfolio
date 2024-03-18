import "./contactpg.css";
import { Phone as PhoneIcon, Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@material-ui/icons'; // Import Material-UI icons
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

  const iconStyle = {
    color: darkMode ? "#fff" : "#000", // Set the color based on dark mode
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <PhoneIcon className="c-icon" style={iconStyle} />
              +1 646 644 5316
            </div>
            <div className="c-info-item">
              <EmailIcon className="c-icon" style={iconStyle} />
              bridgescaila@gmail.com
            </div>
            <div className="c-info-item social-icons">
              <a href="https://www.linkedin.com/in/caila-bridges-2557bb293/" target="_blank" rel="noreferrer">
                <LinkedInIcon className="c-icon" style={iconStyle} />
              </a>
              <a href="https://github.com/cailabridges" target="_blank" rel="noreferrer">
                <GitHubIcon className="c-icon" style={iconStyle} />
              </a>
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
            <div className="submit-msg">
              <button>Submit</button>
              {done && <p>Thank you!</p>}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
