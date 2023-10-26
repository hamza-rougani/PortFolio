import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Warning from '../../../warning/warning'
function ProjectsList() {
  const [project,setProject] = useState([])
  const [search,setSearch] = useState([])
  const [loading,setLoading] = useState(false)
  const [warning,setWarning] = useState(false)
  const [id,setId] = useState(null)
  const Navigate = useNavigate()
  useEffect(()=>{
    setLoading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/project`)
    .then(({data})=>{
      setProject(data.data)
      setSearch(data.data)
      console.log(data.data)
      setLoading(true)
    })
    .catch(err=>console.log(err))
  },[])
  const handelDelete = (e)=>{
    setWarning(true)
    setId(e)
  }
  const handelSearch = (e)=>{
    var item = e.target.value
    let prj = project.filter((p)=>p.Introduct.title.toLowerCase().includes(item.toLowerCase()))
    setSearch(prj)

  }

  return (
    <div className='PostsList gen'>
        <div className='introductPos'>
         <h2>Projects</h2>
         <Link id="linkB" to="/createproject"><button id='buttonGne'>Add New</button></Link>
        </div>
        <div className='info'>
         <ul>
            <li><b>All</b> ({project.length})</li>
         </ul>
        </div>
        <div className='search'>
            <input type="text" placeholder='search'  onChange={(e)=>handelSearch(e)}/>
            {/* <button id='buttonGne'>search</button> */}
        </div>
      <div className='table'>
        <table>
            <thead>
                <td><div id='Gicons'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/image.png`} alt="" /></div></td>
                <td>title</td>
                <td>description</td>
                <td>tools</td>
                <td>Action</td>
            </thead>
            <tbody>
              {loading ? 
              <>
              { 
              search.length>=1 ? 
              search.map((p,index)=>{
                return(
                <tr key={index}>
                <td><div id='imageG'><img src={`${import.meta.env.VITE_API_BASE_URL}/${p.Introduct.image}`} alt="" /></div></td>
                <td ><div id='postDes'>{p.Introduct.title}</div></td>
                <td>{p.Introduct.tools}</td>
                <td>
                <button onClick={()=>handelDelete(p._id)}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div></button>
                  <button onClick={()=>Navigate(`/updateproject/${p._id}`)}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/crayon.png`} alt="" /></div></button>
                </td>
                </tr>
                )
              })
              
              :<div className='noResult'>
              <span>There are no projects available</span>
              </div>}
              </>
              :<div className='noResult'>
              <span>Loading</span>
              </div>}
            </tbody>
        </table>
      </div>
      {warning ? <Warning data={{message:"Are you sure you want to delete project ?",setWarning:setWarning,type:"deleteProject",id:id}}/>: ""}

    </div>
  )
}

export default ProjectsList

