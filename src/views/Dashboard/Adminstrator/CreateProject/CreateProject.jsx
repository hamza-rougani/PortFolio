import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Overview from './Overview';
import Problem from './Problem';
import Solution from './Solution';
import Diagrams from './diagrams';
import Realization from './Realization';
import Introduct from './Introduct';
import Done from "./Done"
function Details() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const params = queryParams.get("St")
    const [section,setSection] = useState(params?params:"Introduct") 
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
           {section==="Introduct" ?<Introduct/> :""} 
           {section==="Overview" ?<Overview/> :""} 
           {section==="Problem" ?<Problem/> :""} 
           {section==="Solution" ?<Solution/> :""} 
           {section==="Diagrams" ?<Diagrams/> :""} 
           {section==="Realization" ?<Realization/> :""} 
           {section==="Done" ?<Done/> :""} 
        </div>
      </div>
    </div>
  )
}

export default Details
