import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../../../Context/Provider'

function CreatePost() {
  const {id} = useParams()
  const {token} = useStateContext();
  // console.log(token)
const [post,setPost] = useState({post:"",image:""})
const Navigate = useNavigate()
var formdata = new FormData()

  useEffect(()=>
  {
    if(id){
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/post/${id}`)
    .then(({data})=>{
  setPost(data.data[0])
 
    }
    ).catch(err=>console.log(err))
  }
}
  ,[])
  // console.log(post)

const handleCreate = ()=>{
formdata.append("post",post.post)
formdata.append("image",post.image)
axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/createpost`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        }
      })
.then(({res})=>{
  Navigate("/postsList")
})
.catch((err)=>{console.log(err)})
}
const handleUpdate = ()=>{
formdata.append("post",post.post)
formdata.append("image",post.image)
axios.put(`${import.meta.env.VITE_BACK_BASE_URL}/updatepost/${id}`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        }
      })
.then(({res})=>{
  Navigate("/postsList")
})
.catch((err)=>{console.log(err)})
}

  return (
    <div className='CreatePost gen'>
        <div className='head'>
        <h2>Create Post</h2>
        {!id ? <button id='btn' onClick={handleCreate}>Create Post</button>: 
        <button id='btn' onClick={handleUpdate}>Update Post</button>}
        
        </div>
      
      <div className='cont'>
      <div className='introductP temp'>
       <div className='form'>
            <textarea name="post" value={post.post} id="" placeholder="What's on your mind" onChange={(e)=>setPost({...post,post:e.target.value})}></textarea>
            <input type="file" id='image' name='image' onChange={(e)=>setPost({...post,image:e.target.files[0]})}/>
            <label htmlFor="image">
                <div id='button'>Add photo</div>
            </label>
            </div>
            
      </div>
      {id ?
      <div className='imagePost'>
        <div className='img'>
          <img src={`${import.meta.env.VITE_API_BASE_URL}/${post.image}`} alt="" />
        </div>
      </div>
      :""}
      </div>
    </div>
  )
}

export default CreatePost
