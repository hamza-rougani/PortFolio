import React,{useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Overview from './Overview';
import Problem from './Problem';
import Solution from './Solution';
import Diagrams from './diagrams';
import Realization from './Realization';
import Introduct from './Introduct';
import Done from "./Done"
import axios from 'axios';
function Details() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const params = queryParams.get("St")
    const [section,setSection] = useState(params?params:"Introduct") 
    const {id} = useParams()
    const [project,setProject] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
      setLoading(false)
     if(id){
axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/show/${id}`)
.then(({data})=>{
  setProject(data.data)
  setLoading(true)
})
.catch(err=>console.log(err))
     }
    },[section])
   
  return (
    <div className='CreateProject gen'>
      <div className='project_details'>
        <h2>Create Project : <span>{section}</span> </h2> 
        <ul id='ul'>
            <Link id='linkB' to="?Se=Introduct"><li id={section=="Introduct" ? "o" :"" } onClick={()=>setSection("Introduct")}>Introduct</li></Link>
            <Link id='linkB' to="?Se=Overview"><li id={section=="Overview" ? "o" :"" } onClick={()=>setSection("Overview")}>Overview</li></Link>
            <Link id='linkB' to="?Se=Problem"><li id={section=="Problem" ? "o" :"" } onClick={()=>setSection("Problem")}>Problem Statement</li></Link>
            <Link id='linkB' to="?Se=Solution"><li id={section=="Solution" ? "o" :"" } onClick={()=>setSection("Solution")}>Problem Solution</li></Link>
            <Link id='linkB' to="?Se=Diagrams"><li id={section=="Diagrams" ? "o" :"" } onClick={()=>setSection("Diagrams")}>UML diagrams</li></Link>
            <Link id='linkB' to="?Se=Realization"><li id={section=="Realization" ? "o" :"" } onClick={()=>setSection("Realization")}>Realization</li></Link>
            <Link id='linkB' to="?Se=Done"><li id={section=="Done" ? "o" :"" } onClick={()=>setSection("Done")}>Done</li></Link>
        </ul>
        <div className='sec'>
           {/* {section==="Introduct" ?
           id ? 
           loading ??<Introduct p={id ? project.Introduct:{title:"",desc:"",tools:""}}/> 
           :<Introduct/>
           :""}  */}
           {section==="Introduct" ?
           id ?
            loading? <Introduct p={project.Introduct}/>:"loading"
           :
           <Introduct/>
           :""
           }
           {section==="Overview" ?
           id ?
            loading? <Overview p={project.Overview}/>:"loading"
           :
           <Overview/>
           :""
           }
           {section==="Problem" ?
           id ?
            loading? <Problem p={project.Problem}/>:"loading"
           :
           <Problem/>
           :""
           }
            {section==="Solution" ?
           id ?
            loading? <Solution p={project.Solution}/>:"loading"
           :
           <Solution/>
           :""
           }
           {section==="Diagrams" ?
           id ?
            loading? <Diagrams p={project.Diagrams}/>:"loading"
           :
           <Diagrams/>
           :""
           }
           
           {section==="Realization" ?
           id ?
            loading? <Realization p={project.Realization}/>:"loading"
           :
           <Realization/>
           :""
           }
           {section==="Done" ?<Done/> :""} 
        </div>
      </div>
    </div>
  )
}

export default Details
