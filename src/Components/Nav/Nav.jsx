import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [show,setShow]=useState(false);

    const NavBarVisibility = ()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',NavBarVisibility);
    })
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <Link to="/"><img src="https://i0.wp.com/www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" className='nav-logo ' /></Link>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" className='nav-avatar' />
      
    </div>
  )
}
