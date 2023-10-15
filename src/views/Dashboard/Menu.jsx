import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='Menu'>
      <div className='presentation'>
      <div className='logo'>
        <img src="http://localhost:5173/images/profile.png" alt="" />
      </div>
      <div className='status'><div className='color'><div className='n'>Focusing</div></div> </div>
      <div className='info'>
         <span id='name'>HAMZA ROUGANI</span>
        <span id='desc'>Developer Full Stack</span>
        </div>
      </div>
      <ul id='ul'>
        <Link id="linkB" to="/"><li>Profile</li></Link>
        <Link id="linkB" to="/skills"><li>Skills</li></Link>
        <Link id="linkB" to="/projects"><li>Projects</li></Link>
        <Link id="linkB" to="/contact"><li>Contact Me</li></Link>
      </ul>
    </div>
  )
}

export default Menu
