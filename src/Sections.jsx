import React from 'react'
import Dashboard from './Layouts/Dashboard'
import {Routes , Route} from "react-router-dom"
import Profile from './views/Dashboard/Profile/Profile'
import Skills from './views/Dashboard/Skills/Skills'
import Projects from './views/Dashboard/Projects/Projects'
import Contact from './views/Dashboard/Contact/Contact'
import Details from './views/Dashboard/Details/Details'
import CreateProject from './views/Dashboard/Adminstrator/CreateProject/CreateProject'
import AdminDash from './Layouts/AdminDash'
export default function Sections() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
         <Route path="/" element={<Profile/>}/>
         <Route path="/skills" element={<Skills/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/details/:id" element={<Details/>}/>
        </Route>
        {/* space of Adminstrator  */}
        <Route  path="/" element={<AdminDash/>}>
           <Route path="/administrator" element={<CreateProject/>}/>
        </Route>
      </Routes>
    </div>
  )
}
