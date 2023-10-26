import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import LoadingPosts from '../../Loading/LoadingPosts/LoadingPosts'
import Noresult from '../../noresult'
function Posts() {
  const [posts,setPost] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/posts`)
    .then(({data})=>{
      setPost(data.data)
      setLoading(true)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='posts'>
      {loading ? 
              <>
              { 
              posts.length>=1 ? 
              posts.map((p,index)=>{
                return(
                     <Post p={p} index={index}/>
                     )
              })
              
              :<Noresult/>}
              </>
              :<LoadingPosts/>}

    </div>

  )
}

export default Posts
