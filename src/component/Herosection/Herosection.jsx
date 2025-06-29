import './Herosection.css';

import Nidhi from '../../assets/nidhi.jpg';


const Herosection = () => {
    return (
        <div className='hero-section' id="home">
                 <img src={Nidhi} alt='Nidhi-img' className="nidhi-img" />
            
            <h1><span>Hello, I'm</span> Nidhi Nagpure</h1>
            <h2>I'm a <span>Full Stack Developer</span></h2>
            <p>Bridging the gap between design and functionality, I specialize in creating smart, scalable,</p>
            <p> and user-friendly web applications from front to back .</p>
             <div className='hero-action'>
                <div className='action-btn'>Education</div>
                <div className='my-resume'><a href="image.png" download="new-name.png">My Resume</a></div>
            </div>
             
            </div>
    )
}

export default Herosection;
