import './../Herosection/Herosection.css';

import Nidhi from '../../assets/nidhi.jpg';
import Linkdin from '../../assets/linkdin.png';
import Github from '../../assets/github.png';
import Email from '../../assets/email.png';

const Herosection = () => {
    return (
        <div className='hero-section'>
           
            <div className='heading-section'>
                 <img src={Nidhi} alt='Nidhi-img' className="nidhi-img" />
            
            <h1><span className='hello'>Hello, I'm</span> Nidhi Nagpure</h1>
            <h3 className='h3'>I'm a Full Stack Developer</h3>
            <h4> Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality.</h4>
             <div className='social-div'>

            
                <a href='https://github.com/nidhinagpure' target='_blank'>
                    <img src={Github} alt='Github' className='social-media'/>
                </a>
                <a href='https://www.linkedin.com/in/nidhi-nagpure-160110283/' target='_blank'>
                    <img src={Linkdin} alt='linkdin'  className='social-media'/>
                </a>
                <a href='#'target='_blank'>
                    <img src={Email} alt='e-mail'className='social-media'/>
                </a>
                 </div>
                <div className='resume-load'><a href="image.png" download="new-name.png" className='resume'>My Resume👍</a></div>
            </div>
            </div>
    )
}

export default Herosection;
