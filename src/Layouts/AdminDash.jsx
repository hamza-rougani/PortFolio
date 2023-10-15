import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../Context/Provider'
import Notification from '../views/notification/Notification'
import Menu from '../views/Dashboard/Menu'
function AdminDash() {
  const {notification} = useStateContext()
  return (
    <div className='Dashboard gen'>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <Menu/>
    <div className='fakemenu'></div>
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
