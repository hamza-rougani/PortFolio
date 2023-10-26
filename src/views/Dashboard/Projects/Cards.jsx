import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import LoadingProjects from '../../Loading/LoadingProjects/LoadingProjects'
import Noresult from '../../noresult'
function Cards(e) {
  const [project,setProject] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/project`)
    .then(({data})=>{
      setProject(data.data)
      e.setSearch(data.data)
      // console.log(data.data[0]._id)
      setLoading(true)
    })
    .catch(err=>console.log(err))
  },[])
  useEffect(()=>{
    if(e.Params){
      let filter = e.search.filter((s,i)=>s.Introduct.title.toLowerCase().includes(e.Params.toLowerCase()) || s.Introduct.tools.toLowerCase().includes(e.Params.toLowerCase()))
      setProject(filter)
    }else{
      setProject(e.search)
    }
  },[e.Params])

  return (
    <div className='Cards'>
      {loading ? project.length>0 ? project.map((project,index)=><Card p={project} index={index}/>):<Noresult res={e.Params}/>:<LoadingProjects/>}
    </div>
  )
}

export default Cards
