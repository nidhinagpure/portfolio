
import '../../component/about/About.css';

import Hoverimge from '../../assets/under-line.svg';
import Certificate from '../../assets/certificate.jpeg';


const About = () => {
    return (
        <div className='about' id="about">
            <div className='heading'>
                <p className="about-title">About Me</p>
                <img src={Hoverimge} className="hover-img" alt="hover-img" />
            </div>
            <div className="about-info">
                <p>I'm a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.
                    js, Express.js, ReactJS, and Figma. I’m passionate about using these skills to develop innovative web applications that are user-friendly.
                    I’m always eager to learn more about web development and marketing.</p><br />
                <p> I enjoy the challenge of coding and solving real-world problems. Currently,
                    I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.</p>
            </div>
            <p className='certificate'><span>Certificate : </span> FullStack  Developer</p>
            <div className='certificate-div'>
                <img src={Certificate} className='certificate-img' alt="certificate"/>
            </div>



        </div>
    )
}

export default About
