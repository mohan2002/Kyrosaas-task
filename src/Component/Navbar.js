import React from 'react'
import "./Styles/Navbar.css"
import Logo from '../Assets/Logo.png';
import Menu from '../Assets/Menu.svg'
import { useState } from 'react';


function Navbar() {
  const[opencond,setOpencond] = useState(false);
  return (
    <div className='Navbar-container'>
        <div className='left-nav'>
          <img src={Logo} className="Logo"/>
        </div>
            

        <div className='right-nav'>
          <div className='profile'>
              <p>DH</p>
          </div>
          <img src={Menu} className="menu-icon" onClick={() => setOpencond(!opencond)}/>
        </div>


        {
          opencond && <div></div>
        }
    </div>
  )
}

export default Navbar