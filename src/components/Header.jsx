import React from 'react'
import NavBar from "./NavBar"

const Header = () => {
  return (
    <div id="main">
        <NavBar/>
        <div className="name">
            <h1>
                <span>Lorem ipsum</span>para bonum
            </h1>
            <p className="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, placeat!
            </p>
            <a href="#" className="cv-btn">Download</a>
        </div>
    </div>
  )
}

export default Header