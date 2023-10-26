import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../../../../Context/Provider'

function Register() {
  const {setnotification} = useStateContext()
  if(!localStorage.getItem("register")){
    return <Navigate to="/"/>
} else if(localStorage.getItem("register")!="true"){
    return <Navigate to="/"/>
  }
    const [re,setR] = useState({name:"",password:""})
    var formdata = new FormData()
    const handleCreate = ()=>{
    formdata.append("username",re.name)
    formdata.append("password",re.password)
    axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/register`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(({res})=>console.log(res))
        .catch(err=>{
          if(err.response){
            setnotification({message:err.response.data.error,status:false})
          }
        })
    }
  return (
    <div className='Register'>
        <h2>Register</h2>
        <div className='form'>
            <input type="text" placeholder='name' name="username" onChange={(e)=>setR({...re,name:e.target.value})}/>
            <input type="password" placeholder='password' name='password'  onChange={(e)=>setR({...re,password:e.target.value})}/>
            <input type="password" placeholder='key secret' name='password'/>
            <button onClick={handleCreate}>Create</button>
        </div>
    </div>
  )
}

export default Register
