import React from 'react';

import '../../component/connectme/Connect.css';

import Hoverline from '../../assets/under-line.svg';
import Email from '../../assets/email.png';
import Github from '../../assets/github.png';
import Linkdin from '../../assets/Linkdin.png';
import Vercel from '../../assets/Vercel.png';

const Connect = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
       event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="connects">
      <div className='connect'>
        <p>Get In Touch</p>
        <img src={Hoverline} alt="" />
      </div>

      <div className='connect-container'>
        <div className='talk-cotent'>
          <h2>Let's Talk</h2>
          <p>
            I'm looking for an opportunity to apply my knowledge,
            grow in a real work environment, and build smart,
            scalable web apps as part of a great team.
          </p>
          <h4>If you're hiring or know of any openings, I'd love to connect! ♥️</h4>

          <div className="social-media">
            {/* Email Section */}
            <div className="email-section">
              <img src={Email} alt="email" />
              <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                nidhinagpure21@gmail.com
              </span>
            </div>

            {/* Social Icons Section */}
            <div className="icon-section">
              <a href="#"><img src={Github} alt="github" /></a>
              <a href="#"><img src={Linkdin} alt="linkedin" /></a>
              <a href="#"><img src={Vercel} alt="vercel" /></a>
            </div>
          </div>
        </div>

        <div className='form-section'>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">You Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" />

            <label htmlFor="email">You E-mail:</label>
            <input type="email" name="email" id="email" placeholder="Enter Your E-mail" />

            <label htmlFor="message">Write Your message here:</label>
            <textarea id="message"name="message" placeholder="Enter Your Message" required rows="8"></textarea>
            <div>
               <button className='submit-btn' >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
  );
};

export default Connect;
