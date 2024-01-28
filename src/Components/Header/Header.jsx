import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


export default function Header() {
  const [login,setLogin] = useState("logout");
  const signIn = (sign) =>{
    setLogin(sign)
  }
  return (
   <div className='showcase-bg'>
     <header className='showcase'>
        <div className="showcase-top">
            <img src="http://i.ibb.co/r5krrdz/logo.png" alt="logo" />
            <Link to="/" className='btn btn-rounded' onClick={()=>{signIn("login")}}>Sign In</Link>
        </div>
        {login === "logout" && (
          <div className="showcase-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch Anywhere. Cancel Anywhere</p>
          <Link to="/netflix-show" className='btn-header btn-xl'>Watch Free for 30 Days <i className="fas fa-chevron-right btn-icon"></i></Link>
      </div>
        )}

        {login === "login" && (
          <div className="login-bg">
            <h1>Sign In</h1>
            <div>
              <input type="text" name="" id="" placeholder='Email or phone number' className='input' />
            </div>
            <div>
              <input type="password" name="" id="" placeholder='Password' className='input'/>
            </div>
            <button onClick={()=>{signIn("logout")}}>sign In</button>
            <p id='p'>Forget password?</p>

            <div>
              <input type="checkbox" name="" id="" className='checkbox' />
              <label htmlFor="">Remember me</label>
              <p>New to Netflix? <span>Sign up now.</span></p>
              <h5>Sign in is protected by google reCAPTCHA to ensure
                you're not a bot.
              </h5>
            </div>
          </div>
        )}

    </header>
   </div>
  )
}