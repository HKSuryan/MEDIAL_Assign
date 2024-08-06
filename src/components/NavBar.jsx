import React from 'react'
import "../css/NavBar.css";


export const NavBar = () => {
  return (
    <nav>
        <h1>OG Image Generator</h1>
        <div className='buttons'>
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </nav>
  )
}
