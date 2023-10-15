import React from 'react'
import { useStateContext } from '../../../../Context/Provider'
import Notification from '../../../notification/Notification'
import axios from 'axios'
function Done() {
  const {introduct,overview,problem,solution,diagrams,realization,setnotification} = useStateContext()
  const handleCreate = async()=>{
    const formData = new FormData();
    // formData.append('title',"hhhhhhhAAAAA")
    // formData.append('desc',"anaHmazaxsd")

    formData.append("Introduct",introduct)
    formData.append("Overview",overview)
    formData.append("Problem",problem)
    formData.append("Solution",solution)
    formData.append("Diagrams",diagrams)
    formData.append("Realization",realization)

    if(introduct && overview && problem && solution && diagrams && realization){
      axios.post("http://localhost:3000/create", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
            .then(({data})=>{
              setnotification({message:"the project has been created successfully",status:true})
              console.log(data)
            })
            .catch(err=>console.log(err))
    }else{
      
      setnotification({message:"you have to complete all section",status:false})
    }
    
  }
  return (
    <div className='Done'>
      <ul>
        <li>Introduct {introduct?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <li>Overview {overview?overview.length:0} items {overview?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <li>Problem {problem?overview.length:0} items {problem?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <li>Solution {solution?overview.length:0} items {solution?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <li>Diagrams {diagrams?overview.length:0} items {diagrams?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <li>Realization {realization?overview.length:0} items {realization?<div id="icons"><img src="http://localhost:5173/images/v.png" alt="" /></div>:<div id="icons"><img src="http://localhost:5173/images/bouton-supprimer.png" alt="" /></div>}</li>
        <button onClick={handleCreate}>Create</button>
      </ul>
      
     
    </div>
  )
}

export default Done
