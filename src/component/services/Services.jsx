import '../services/Services.css';
import Hoverline from '../../assets/under-line.svg';
import Html from '../../assets/Html.png';
import Css from '../../assets/Css.png';
import Javascript from '../../assets/javascript.png';
import Reactjs from '../../assets/React.png';
import Tailwind from '../../assets/tailwind.png';
import Nodejs from '../../assets/Nodejs.png';
import Express from '../../assets/Expressjs.png';
import Mongodb from '../../assets/Mongodb.png'



const Services = () => {
    return (
        <div id="skill">
            <div className='service-div'>
                <p>Technical Skills </p>
                <img src={Hoverline} className='hover-line' alt="" />
            </div>

            <div className='section-skill'>
                <div className='lang-div'>
                    <div>
                       <img src={Html} className='lang-img' alt=''/>
                       <img src={Css} className='lang-img' alt=''/> 
                       <img src={Javascript} className='lang-img' alt=''/>
                      <img src={Reactjs}className='lang-img' alt='' />
                    </div>
                    <div>
                         <img src={Tailwind}className='lang-img' alt='' />
                         <img src={Nodejs} className='lang-img'alt='' />
                          <img src={Express}className='lang-img' alt='' />
                      <img src={Mongodb}className='lang-img' alt='' />
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Services
