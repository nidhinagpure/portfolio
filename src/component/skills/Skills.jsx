import '../skills/Skills.css';

import Hoverline from '../../assets/under-line.svg';
import Code from '../../assets/code.png';
import Userinterface from '../../assets/userinter.png';

const Skills = () => {
    return (
        <div >
            <div id="services" className='skill-container'>
                <p>My Services</p>
                <img src={Hoverline} alt="underline" />
            </div>

            <div className='skills'>

                <div className='skill-section'>
                    <img src={Code} alt="Web Development Icon" />
                    <h2>Web Development</h2>
                    <p>
                        As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies. 
                        I specialize in building responsive, user-friendly interfaces that enhance the user experience. 
                        Whether it’s an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.
                    </p>
                </div>

                <div className='skill-section'>
                    <img src={Userinterface} alt="UI Design Icon" />
                    <h2>UI Designing</h2>
                    <p>
                        UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing layouts, 
                        choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, 
                        and consistency. My designs aim to enhance the overall look and feel of your digital product.
                    </p>
                </div>

                <div className='skill-section'>
                    <img src={Code} alt="UX Development Icon" />
                    <h2>UX Development</h2>
                    <p>
                        UI (User Interface) development focuses on creating the visual elements of a website or application. 
                        I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript. 
                        My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Skills;
