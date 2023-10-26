import React from 'react'
import { useStateContext } from '../../../../Context/Provider'
import Notification from '../../../notification/Notification'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function Done() {
  const {id} = useParams()
  const Navigate = useNavigate()
  const {token,introduct,overview,problem,solution,diagrams,realization,setnotification,ImagesD,ImagesR,Image} = useStateContext()
  const handleCreate = async(ev)=>{
    const formData = new FormData();
    formData.append("Introduct",JSON.stringify(introduct))
    formData.append("Overview",JSON.stringify(overview))
    formData.append("Problem",JSON.stringify(problem))
    formData.append("Solution",JSON.stringify(solution))
    formData.append("Diagrams",JSON.stringify(diagrams))
    formData.append("Realization",JSON.stringify(realization))
  
    console.log(ImagesD)
    
    formData.append("Image",Image)
var De = []
var Re = []

    if(introduct && overview && problem && solution && diagrams && realization){
      if(id && ev=="update"){
        for(var img of realization.images){
          formData.append("ImagesR",img)
          if(typeof(img)=="string"){
            Re.push(img)
          }else{
            Re.push(img.name)
          }
         
        }
        for(var img of diagrams.images){
          formData.append("ImagesD",img)
          if(typeof(img)=="string"){
            De.push(img)
          }else{
            De.push(img.name)
          }
        }
        formData.append("D",JSON.stringify(De))
        formData.append("R",JSON.stringify(Re))
        axios.put(`${import.meta.env.VITE_BACK_BASE_URL}/updateproject/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }
        })
              .then(({data})=>{
                setnotification({message:"the project has been updated successfully",status:true})
                Navigate("/projects")
              })
              .catch(err=>console.log(err))
      }else if(ev=="create"){
        for(var img of ImagesD){
          formData.append("ImagesD",img)
        }
        for(var img of ImagesR){
          formData.append("ImagesR",img)
        }
        axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }
        })
            .then(({data})=>{
              setnotification({message:"the project has been created successfully",status:true})
              Navigate("/projects")
            })
            .catch(err=>console.log(err))
      }
      
    }else{
      
      setnotification({message:"you have to complete all section",status:false})
    }
    
  }
  console.log(introduct)
  return (
    <div className='Done'>
      <ul>
        <li>Introduct {introduct?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        <li>Overview {overview?overview.length:0} items {overview?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        <li>Problem {problem?problem.length:0} items {problem?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        <li>Solution {solution?solution.length:0} items {solution?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        <li>Diagrams {diagrams?diagrams.length:0} items {diagrams?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        <li>Realization {realization?realization.length:0} items {realization?<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>:<div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}</li>
        {id?
         <button onClick={()=>handleCreate("update")}>Update</button>
        :
        <button onClick={()=>handleCreate("create")}>Create</button>
        }
       
       
      </ul>
      
     
    </div>
  )
}

export default Done
