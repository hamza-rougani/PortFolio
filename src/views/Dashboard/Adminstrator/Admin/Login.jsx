import axios from 'axios'
import React, { useState } from 'react'
import {useStateContext} from "../../../../Context/Provider"
import { useNavigate } from 'react-router-dom'
function Register() {
    const [re,setR] = useState({name:"",password:""})
    const {setToken,setnotification} = useStateContext()
    const Navigate = useNavigate()
    var formdata = new FormData()
    const handleCreate = ()=>{
    formdata.append("username",re.name)
    formdata.append("password",re.password)
    axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/loginAdmin`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          })
        .then(({data})=>{
          setToken(data.token)
          localStorage.setItem("isAdmin",data.isAdmin)
          // localStorage.setItem("Display","@62784390@")
          Navigate("/")
        })
        .catch(err=>{
          if(err.response){
            setnotification({message:err.response.data.error,status:false})
          }
        })
    }
  return (
    <div className='Register'>
        <h2>Login</h2>
        <div className='form'>
            <input type="text" placeholder='name' name="username" onChange={(e)=>setR({...re,name:e.target.value})}/>
            <input type="password" placeholder='password' name='password'  onChange={(e)=>setR({...re,password:e.target.value})}/>
            <button onClick={handleCreate}>Create</button>
        </div>
    </div>
  )
}

export default Register
