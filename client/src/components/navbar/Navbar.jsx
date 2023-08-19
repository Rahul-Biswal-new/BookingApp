import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navcontainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">Eco Retreat</span>
          </Link>
            <div className="navitems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>

            </div>
        </div>
    </div>
  )
}
