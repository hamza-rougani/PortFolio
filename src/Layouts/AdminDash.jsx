import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useStateContext } from '../Context/Provider'
import Notification from '../views/notification/Notification'
import Menu from '../views/Dashboard/Menu'
function AdminDash() {
  const {notification,token} = useStateContext()
 
  if(!token || localStorage.getItem("isAdmin")=="false"){
   return  <Navigate to="/"/>
  }
  
  return (
    <div className='Dashboard gen'>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <Menu items = {{token:token,isAdmin:localStorage.getItem("isAdmin")}}/>
    <div className='fakemenu'></div>
    <button className='menuBtn' onClick={()=>document.body.classList.toggle("menuAc")}><i class='bx bx-menu'></i><i class='bx bx-x' ></i></button>
    <div className='container'>
    <Outlet/>
    {
        notification?<Notification field={notification}/>:""
      }
    </div>
   
  </div>
  )
}

export default AdminDash
