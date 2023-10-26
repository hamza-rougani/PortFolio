import React, { useEffect, useRef } from 'react'
import Menu from "../views/Dashboard/Menu"
import { Outlet } from 'react-router-dom'
function Dashboard() {
  useEffect(()=>{
    window.addEventListener("click",handelClicked)
  },[])
  const handelClicked = (e)=>{
    if(!document.querySelector(".menuBtn").contains(e.target)){
      document.body.classList.remove("menuAc")
    }
  }
  return (
    <div className='Dashboard'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <Menu/>
      <div className='fakemenu'></div>
      <button   className='menuBtn' onClick={()=>document.body.classList.toggle("menuAc")}><i class='bx bx-menu'></i><i class='bx bx-x' ></i></button>
      <div className='container'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard 
