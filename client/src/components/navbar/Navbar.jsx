import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {

  const {user}= useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="navcontainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">Eco Retreat</span>
          </Link>
          {user ? user.username : (<div className="navitems">
                <button className="navbutton">Register</button>
                <Link to="login">
                <button className="navbutton">Login</button>
                </Link>
            </div>)}
            
        </div>
    </div>
  )
}
