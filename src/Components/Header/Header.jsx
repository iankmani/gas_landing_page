import React from 'react'
import gaslogo from '../../assets/gaslogo.jpeg'
import './Header.css'

const Header = () => {
  return (
    <section className="header">
        <div className="headerlogo">
            <img src={gaslogo} alt="logo of the gas company" className="logo-img" />
        </div>
        <div className="navbar">
            <ul className="nav-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">More</a></li>
            </ul>
        </div>
        <div className="signupbtn">
            <button>Sign up</button>
        </div>
    </section>
  )
}

export default Header