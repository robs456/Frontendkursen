import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="navbar">
        <h1 className="logo"><Link to="/">Roblogs 2</Link></h1>
        <ul className="navlist">
        <li className="listItem"><Link to="/">Home</Link></li>  
        <li className="listItem"><Link to="/create">Write</Link></li>  
        </ul>    
      </div>


    </div>
  )
}
