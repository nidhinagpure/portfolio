import './../Navbar/Navbar.css';

import Plogo from './../../assets/nidhi-logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ Plogo} atl="logo-portfolio" className='p-logo'/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Project</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>

      
    </div>
  )
}

export default Navbar;
