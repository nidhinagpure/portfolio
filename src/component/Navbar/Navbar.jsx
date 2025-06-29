import './../Navbar/Navbar.css';

import Plogo from './../../assets/nidhi-logo.png';
import Underline from '../../assets/under-line.svg';
import { useState } from 'react';


const Navbar = () => {
  const [menu,setmenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={ Plogo} atl="logo-portfolio" className='p-logo'/>
        <ul className='nav-menu'>
            <li><p onClick={()=>setmenu("home")}>Home</p>{menu==="home"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
            <li><p onClick={()=>setmenu("about")}>About Me</p>{menu==="about"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
            <li><p onClick={()=>setmenu("services")}>Services</p>{menu==="services"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
            <li><p onClick={()=>setmenu("skill")}>Skills</p>{menu==="skill"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
            <li><p onClick={()=>setmenu("contact")}>Contact</p>{menu==="contact"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
            <li><p onClick={()=>setmenu("project")}>Project</p>{menu==="project"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</li>
        </ul>
        <div className='nav-connect'>Connect Me</div>

      
    </div>
  )
}

export default Navbar;
