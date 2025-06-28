
import '../../component/connectme/Connect.css';

import Hoverline from '../../assets/under-line.svg';
import Email from '../../assets/email.png';
import Github from '../../assets/github.png';
import Linkdin from '../../assets/Linkdin.png';
import Vercel from '../../assets/Vercel.png';

const Connect = () => {
    return (
        <div>
            <div className='connect'>
                <p>Get In Touch</p>
                <img src={Hoverline} alt="" />
            </div>
            <div className='connect-container'>
                <div className='talk-cotent'>
                    <h2>Let's Talk</h2>
                    <p>I'm looking for an opportunity to
                        apply my knowledge, grow in a real work environment,
                        and build smart, scalable web apps as part of a great team.</p>
                    <h4>If you’re hiring or know of any openings, I’d love to connect !♥️</h4>
                    <div className="social-media">
                        {/* Email Section */}
                        <div className="email-section">
                            <img src={Email} alt="email" />
                            <span style={{fontSize:"20px", marginLeft:"10px"}}>nidhinagpure21@gmail.com</span>
                        </div>

                        {/* Social Icons Section */}
                        <div className="icon-section">
                            <a href="#"><img src={Github} alt="github" /></a>
                            <a href="#"><img src={Linkdin} alt="linkedin" /></a>
                            <a href="#"><img src={Vercel} alt="linkedin" /></a>


                        </div>
                    </div>
                </div>

                <div className='input-container'>
                    <p style={{ marginLeft: "10px" }}> You Name:</p>
                    <input type="text" placeholder='Enter Your Name' required style={{ height: "10", width: "370px", fontSize: "14px", padding: "10px 20px", textAlign: "left", margin: "10px" }} />
                    <p style={{ marginLeft: "10px" }}> You E-mail:</p>
                    <input type="text" placeholder='Enter Your E-mail' required style={{ height: "10", width: "370px", fontSize: "14px", padding: "10px 20px", textAlign: "left", margin: "10px" }} />
                    <p style={{ marginLeft: "10px" }}> Write Your message here:</p>
                    <input type="text" className='message' placeholder='Enter Your Message' required />
                </div>
            </div>

        </div>
    )
}

export default Connect
