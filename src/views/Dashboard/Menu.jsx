import React, { useEffect, useState } from 'react'
import { Link, createSearchParams, useLocation, useParams } from 'react-router-dom'
import { useStateContext } from '../../Context/Provider';

function Menu() {
    const Location= useLocation()
    const url= Location.pathname;
    const {setToken,token} = useStateContext()
// const handleChange = (e)=>{
// localStorage.setItem('item',e)
// setItem(e)
// }
const Logout =()=>{
  setToken(null)
  localStorage.removeItem("isAdmin")
  localStorage.removeItem("Display")
  localStorage.removeItem("register")
}
  return (
    <div className='Menu'>
      <div className='presentation'>
      <div className='logo'>
        <img src={`${import.meta.env.VITE_API_BASE_URL}/images/profile.png`} alt="" />
      </div>
      <div className='status'><div className='color'><div className='n'>Focusing</div></div> </div>
      <div className='info'>
         <span id='name'>HAMZA ROUGANI</span>
        <span id='desc'>Developer Full Stack</span>
        </div>
      </div>
      <ul id='ul'>
        <Link id="linkB" to="/"><li id={url=="/"?"clicked":""}><i class='bx bx-user'></i>Profile</li></Link>
        <Link id="linkB" to="/projects"><li id={url=="/projects" || url.includes("/details")?"clicked":""}><i class='bx bx-objects-vertical-bottom'></i>Projects</li></Link>
        <Link id="linkB" to="/news"><li id={url=="/news"?"clicked":""}><i class='bx bx-news'></i>Posts</li></Link>
        <Link id="linkB" to="/skills"><li  id={url=="/skills"?"clicked":""}><i class='bx bx-pie-chart-alt-2'></i>Skills</li></Link>
        <Link id="linkB" to="/contact"><li  id={url=="/contact"?"clicked":""}><i class='bx bxs-contact'></i>Contact Me</li></Link>
        {!token || localStorage.getItem("isAdmin")=="false"?"":<Link id="linkB" to="/PostsList"><li id={url=="/PostsList"?"clicked":""}><i class='bx bxs-user-detail'></i>Manage Posts</li></Link>}
        {!token || localStorage.getItem("isAdmin")=="false"?"":<Link id="linkB" to="/projectsList"><li id={url=="/projectsList"?"clicked":""}><i class='bx bxs-user-detail'></i>Manage Projects</li></Link>}
        {!token || localStorage.getItem("isAdmin")=="false"?"":<Link id="linkB" to="/ListPostNews"><li id={url=="/NewsPost"?"clicked":""}><i class='bx bxs-user-detail'></i>Manage NewsPost</li></Link>}
        {!token || localStorage.getItem("isAdmin")=="false"?"":<Link id="linkB" to="/ListProjectNews"><li id={url=="/NewsProject"?"clicked":""}><i class='bx bxs-user-detail'></i>Manage NewsProject</li></Link>}
        {!token && localStorage.getItem("Display")=="@62784390@"? <Link id="linkB" to="/loginAdmin"><li id={url=="/loginAdmin"?"clicked":""}><i class='bx bx-log-in-circle' ></i>Login</li></Link>:""}
        {!token && localStorage.getItem("Display")=="@62784390@" && localStorage.getItem("register")=="true"? <Link id="linkB" to="/registerAdmin"><li id={url=="/registerAdmin"?"clicked":""}><i class='bx bx-user-plus'></i>Register</li></Link>:""}
        {!token || localStorage.getItem("isAdmin")=="false"?"":<li id='logout' onClick={Logout}><i class='bx bx-log-out-circle' ></i> Log out</li>}
        
      </ul>
    </div>
  )
}

export default Menu
