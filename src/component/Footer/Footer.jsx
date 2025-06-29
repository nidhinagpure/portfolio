import './Footer.css';
import Person from '../../assets/person.png';
import Logo from '../../assets/nidhi-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left side */}
        <div className="footer-top-left">
          <img src={Logo} className="logo-img" alt="Logo" />
          <p>
            I am a frontend developer from USA with 10 years of experience in companies like Microsoft, Tesla and Apple.
          </p>
        </div>

        {/* Right side */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={Person} className="person" alt="Person Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-sub">Subscribe</div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <p>© 2023 Alex Bennett. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
