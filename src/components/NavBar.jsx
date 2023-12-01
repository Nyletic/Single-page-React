import React, {useState} from 'react'
import logo from "../images/logo.png"

const NavBar = () => {
    const[nav, setNav] = useState(false)

    function changeBackground(){
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false)
        }
    }

    window.addEventListener("scroll", changeBackground)
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
            <img src={logo} alt="logo"/>
        </a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">UI SS</a></li>
            <li><a href="#">Download</a></li>
        </ul>
    </nav>
  )
}

export default NavBar