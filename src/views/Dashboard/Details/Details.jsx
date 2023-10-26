import React,{useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Overview from './Overview';
import Problem from './Problem';
import Solution from './Solution';
import Diagrams from './Diagrams';
import Realization from './Realization';
import axios from 'axios';
function Details() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const params = queryParams.get("St")
    const [project,setProject] = useState()
    const [laoding,setloading] = useState(false)
    const [section,setSection] = useState(params?params:"Overview") 
    const {id} = useParams()
    useEffect(()=>{
      setloading(false)
     axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/show/${id}`)
     .then(({data})=>{
      setProject(data.data)
      console.log(data.data)
      
      setloading(true)
     })
     .catch(err=>console.log(err))
    },[])
  return (
    <div className='Details gen'>
      <div className='project_details'>
        <h2>Project details : <span>{section}</span> </h2> 
        <ul id='ul'>
            <Link id='linkB' to="?Se=Overview"><li id={section=="Overview" ? "o" :"" } onClick={()=>setSection("Overview")}>Overview</li></Link>
            <Link id='linkB' to="?Se=Problem"><li id={section=="Problem" ? "o" :"" } onClick={()=>setSection("Problem")}>Problem</li></Link>
            <Link id='linkB' to="?Se=Solution"><li id={section=="Solution" ? "o" :"" } onClick={()=>setSection("Solution")}>Solution</li></Link>
            <Link id='linkB' to="?Se=Diagrams"><li id={section=="Diagrams" ? "o" :"" } onClick={()=>setSection("Diagrams")}>Diagrams</li></Link>
            <Link id='linkB' to="?Se=Realizations"><li id={section=="Realizations" ? "o" :"" } onClick={()=>setSection("Realizations")}>Realizations</li></Link>
        </ul>
        
          {laoding ? 
          <div className='sec'>
           {section==="Overview" ?<Overview p={project.Overview}/> :""} 
           {section==="Problem" ?<Problem p={project.Problem}/> :""} 
           {section==="Solution" ?<Solution p={project.Solution}/> :""} 
           {section==="Diagrams" ?<Diagrams p={project.Diagrams}/> :""} 
           {section==="Realizations" ?<Realization p={project.Realization}/> :""} 
           </div>
           :""}
        
      </div>
    </div>
  )
}

export default Details
