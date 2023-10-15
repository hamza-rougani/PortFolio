import React from 'react'
import Menu from "../views/Dashboard/Menu"
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='Dashboard'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <Menu/>
      <div className='fakemenu'></div>
      <div className='container'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard 
