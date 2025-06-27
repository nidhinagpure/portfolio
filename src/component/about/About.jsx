
import '../../component/about/About.css';

import Nidhi from '../../assets/nidhi.jpg';

const About = () => {
    return (
        <div className='about'>

            <p className="about-title">About Me</p>

            <div  className="about-section">
                
                <div className="about-right">
                    <div className="about-info">
                         <p>I'm a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.
                            js, Express.js, ReactJS, and Figma. I’m passionate about using these skills to develop innovative web applications that are user-friendly.
                             I’m always eager to learn more about web development and marketing.</p><br/>
                        <p> I enjoy the challenge of coding and solving real-world problems. Currently,
                             I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.</p>


                    </div > <br/>
                       
                        <div className='about-skill'><p>HTML&CSS</p><hr style={{ width: "50%", height: "3px", marginLeft: "22px" }} /></div>
                        <div className='about-skill'><p>JAVASCRIPT</p><hr style={{ width: "60%", height: "3px", marginLeft: "18px" }} /></div>
                        <div className='about-skill'><p>EXPRESS JS</p><hr style={{ width: "50%", height: "3px", marginLeft: "22px" }} /></div>
                        <div className='about-skill'><p>NODE JS </p> <hr style={{ width: "60%", height: "3px", marginLeft: "46px" }} /></div>
                        <div className='about-skill'><p>MONGO DB</p><hr style={{ width: "68%", height: "3px", marginLeft: "22px" }} /></div>

            </div>
            </div>
        </div>
    )
}

export default About
