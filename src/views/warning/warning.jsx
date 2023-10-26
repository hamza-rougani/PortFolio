import axios from 'axios'
import React from 'react'
import {useStateContext} from "../../Context/Provider"
import { useNavigate } from 'react-router-dom'
function warning(e) {
  const {setnotification,token} = useStateContext()
  const Navigate = useNavigate()
  console.log(token)
    const handelAceept = ()=>{
        if(e.data.type=="deletePost"){
            axios.delete(`${import.meta.env.VITE_BACK_BASE_URL}/post/${e.data.id}`,{
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
              }
            })
            .then(({data})=>{
                e.data.setWarning(false)
                setnotification({message:"the post has been deleted",status:false})
                Navigate("/postsList")
            }).catch(err=>{
                console.log(err)
            })
        }
        if(e.data.type=="deleteProject"){
          axios.delete(`${import.meta.env.VITE_BACK_BASE_URL}/project/${e.data.id}`,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            }
          })
          .then(({data})=>{
              e.data.setWarning(false)
              setnotification({message:"the project has been deleted",status:false})
              Navigate("/projectsList")
          }).catch(err=>{
              console.log(err)
          })
      }
    
        if(e.data.type=="Project"){
          axios.delete(`${import.meta.env.VITE_BACK_BASE_URL}/NewsProject/${e.data.id}`,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            }
          })
          .then(({data})=>{
              e.data.setWarning(false)
              setnotification({message:"the NewsProject has been deleted",status:false})
              Navigate("/ListProjectNews")
          }).catch(err=>{
              console.log(err)
          })
      }
        if(e.data.type=="Post"){
          axios.delete(`${import.meta.env.VITE_BACK_BASE_URL}/NewsPost/${e.data.id}`,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            }
          })
          .then(({data})=>{
              e.data.setWarning(false)
              setnotification({message:"the NewsProject has been deleted",status:false})
              Navigate("/ListPostNews")
          }).catch(err=>{
              console.log(err)
          })
      }
    }
console.log(e.data.type)
    const handelCancel = ()=>{
        e.data.setWarning(false)
    }
  return (
    <div className='warning'>
    <div className='message'>
      <h3>{e.data.message}</h3>
      <div className='btns'>
        <button id='accept' onClick={handelAceept}>Yes</button>
        <button id='cancel' onClick={handelCancel}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

export default warning
