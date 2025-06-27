import './../Navbar/Navbar.css';

import Plogo from './../../assets/nidhi-logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ Plogo} atl="logo-portfolio" className='p-logo'/>
        <ul className='nav-menu'>
            <li className='li'>Home</li>
            <li className='li'>About Me</li>
            <li className='li'>Services</li>
            <li className='li'>Skills</li>
            <li className='li'>Contact</li>
            <li className='li'>Project</li>
        </ul>
        <div className='nav-connect'>Connect Me</div>

      
    </div>
  )
}

export default Navbar;
