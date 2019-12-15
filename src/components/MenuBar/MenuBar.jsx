import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuBar.scss';
import $ from 'jquery'
function MenuBar(props) {
  const [menu, setmenu] = useState(false)
  return (
    <div>
      <div onClick={() => { 
        menu?$('body').removeClass('mura'): $('body').addClass('mura')
        setmenu(!menu)  
        }} className={`icon-menu switchmenu ${menu ? "switchmenu-active" : ''}`}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <nav  className={`nav ${menu? "nav-active": ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about">
              Concat
            </Link>
          </li>
          <li className="nav-item">Links</li>
        </ul>
        <p>I guess it comes down to a simple choice : get busy living or get busy dying. </p>
      </nav>
    </div>
  )
}
export default MenuBar