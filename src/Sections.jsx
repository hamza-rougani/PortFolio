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
import News from './views/Dashboard/News/News'
import CreatePost from './views/Dashboard/Adminstrator/CreatePost/CreatePost'
import PostsList from './views/Dashboard/Adminstrator/PostsList/PostsList'
import ProjectsList from './views/Dashboard/Adminstrator/ProjectsList/ProjectsList'
import User from './Layouts/User'
import Register from './views/Dashboard/Adminstrator/Admin/Register'
import Login from './views/Dashboard/Adminstrator/Admin/Login'
import Test from './views/Test'
import NewsPost from './views/Dashboard/Adminstrator/NewsPost/NewsPost'
import ListNews from './views/Dashboard/Adminstrator/ListNews/ListNews'
export default function Sections() {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Dashboard/>}>
         <Route path="/" element={<Profile/>}/>
         <Route path="/skills" element={<Skills/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/news" element={<News/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/details/:id" element={<Details/>}/>
         <Route path="/test" element={<Test/>}/>
        </Route>
        {/* space of user admin  */}
        <Route path='/' element={<User/>}>
          <Route  path='loginAdmin' element={<Login/>}/>
          <Route  path='registerAdmin' element={<Register/>}/>
        </Route>
        {/* space of Adminstrator  */}
        <Route  path="/" element={<AdminDash/>}>
           <Route path="/createproject" element={<CreateProject/>}/>
           <Route path="/updateproject/:id" element={<CreateProject/>}/>
           <Route path="/createpost" element={<CreatePost/>}/>
           <Route path="/updatepost/:id" element={<CreatePost/>}/>
           <Route path="/postsList" element={<PostsList/>}/>
           <Route path="/projectsList" element={<ProjectsList/>}/>
           <Route path="/NewsPost" element={<NewsPost option="Post"/>}/>
           <Route path="/NewsPost/:id" element={<NewsPost option="Post"/>}/>
           <Route path="/NewsProject" element={<NewsPost option="Project"/>}/>
           <Route path="/NewsProject/:id" element={<NewsPost option="Project"/>}/>
           <Route path="/ListPostNews" element={<ListNews option="Post"/>}/>
           <Route path="/ListProjectNews" element={<ListNews option="Project"/>}/>
        </Route>
      </Routes>
    </div>
  )
}
