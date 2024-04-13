import React from 'react'
import svg from '../../../config'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="Logo">
      THE <span>PRODUCT</span> PLATFORM
    </div>

    <ul>
      <li>
        <span>Learn</span>
        <img src={svg.arrow} alt="" />
      </li>
      <li>
        <span>Practice</span>
        <img src={svg.arrow} alt="" />
      </li>
      <li>
        <img src={svg.ellipse} className="profile-icon" alt="" />
      </li>
    </ul>
  </nav>
  )
}

export default Navbar