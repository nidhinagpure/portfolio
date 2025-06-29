import './Navbar.css';

import Plogo from './../../assets/nidhi-logo.png';
import Underline from '../../assets/under-line.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [menu,setmenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={ Plogo} atl="logo-portfolio" className='p-logo'/>
        <ul className='nav-menu'>
            <li><AnchorLink className='a-link' offset={50} href='#home'><p onClick={()=>setmenu("home")}>Home</p>{menu==="home"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='a-link'  offset={50}  href='#about' ><p onClick={()=>setmenu("about")}>About Me</p>{menu==="about"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='a-link'  offset={50} href='#skill'><p onClick={()=>setmenu("skill")}>Skills</p>{menu==="services"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='a-link'  offset={50} href='#services'><p onClick={()=>setmenu("services")}>Services</p>{menu==="skill"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='a-link'  offset={50} href='#project'><p onClick={()=>setmenu("project")}>Project</p>{menu==="project"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='a-link'  offset={50} href='#connects'><p onClick={()=>setmenu("connects")}>Contact</p>{menu==="connects"?<img src={Underline} alt="" style={{height:"10px", paddingBottom:"2px"}}/>:<></>}</AnchorLink></li>

        </ul>
        <AnchorLink className='a-link'  offset={50} href='#connects'><div className='nav-connect'>Connect Me</div></AnchorLink> 

      
    </div>
  )
}

export default Navbar;
