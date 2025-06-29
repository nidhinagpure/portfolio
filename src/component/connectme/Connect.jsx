import '../../component/connectme/Connect.css';

import Hoverline from '../../assets/under-line.svg';
import Email from '../../assets/email.png';
import Github from '../../assets/github.png';
import Linkdin from '../../assets/Linkdin.png';
import Vercel from '../../assets/Vercel.png';

const Connect = () => {
  return (
    <div>
      <div className='connect' id="contact">
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
          <form>
            <label htmlFor="name">You Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" />

            <label htmlFor="email">You E-mail:</label>
            <input type="email" id="email" placeholder="Enter Your E-mail" />

            <label htmlFor="message">Write Your message here:</label>
            <textarea id="message" placeholder="Enter Your Message" rows="8"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
