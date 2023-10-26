import React, { useEffect, useState } from 'react'
import SwiperApp from "../../../Swiper/SwiperApp"
import { useStateContext } from '../../../../Context/Provider'
import SlideImage from '../../../Loading/SlideImage'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function NewsPost(e) {
  const {id} = useParams()
    const {setNewsPost,NewsPost,token,setnotification} = useStateContext()
    const [image,setImage] = useState(NewsPost ? NewsPost.length>0?NewsPost:"":"")
    const [loading,setLoading] = useState(false)
    
    const Navigate = useNavigate()

    if(id && e.option=="Post"){
    useEffect(()=>{
      setLoading(false)
      axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsPost/${id}`)
      .then(({data})=>{
        setNewsPost([data.data[0].NewsPostImage])
        setLoading(true)
      })
      .catch(err=>{
        if(err.response.statusText){
          setnotification({message:err.response.statusText,status:false})
        }
        
      })
    },[])
  }
    if(id && e.option=="Project"){
    useEffect(()=>{
      setLoading(false)
      axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsProject/${id}`)
      .then(({data})=>{
        setNewsPost([data.data[0].NewsProjectImage])
        setLoading(true)
      })
      .catch(err=>{
        if(err.response.statusText){
          setnotification({message:err.response.statusText,status:false})
        }
        
      })
    },[])
  }
    const handelCreate = (ev)=>{
      ev.preventDefault()
      if(e.option=="Post"){
        if(NewsPost.length>0){
        NewsPost.map((insert,index)=>{
          const formdata = new FormData()
          formdata.append("NewsPost",insert)
          axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/NewsPost`,formdata,{
            headers:{
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`,
            }
          }).then(({data})=>{
            setnotification({message:data.res,status:true})
            console.log(data.res)
            setNewsPost([])
            Navigate("/ListPostNews")
          })
          .catch(err=>console.log(err))
        })
      }else{
        setnotification({message:"select an image"})
      }
      }else if(e.option=="Project"){
        if(NewsPost.length>0){
        NewsPost.map((insert,index)=>{
          const formdata = new FormData()
          formdata.append("NewsProject",insert)
          axios.post(`${import.meta.env.VITE_BACK_BASE_URL}/NewsProject`,formdata,{
            headers:{
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`,
            }
          }).then(({data})=>{
            setnotification({message:data.res,status:true})
            console.log(data.res)
            setNewsPost([])
            Navigate("/ListProjectNews")
          })
          .catch(err=>console.log(err))
        })
      }else{
        setnotification({message:"select an image",status:false})
      }
      }
    }
    const handelUpdate = (ev)=>{
      ev.preventDefault()
      if(e.option=="Post" && id){
        if(NewsPost.length>0){
          const formdata = new FormData()
          formdata.append("NewsPost",NewsPost[0])
          axios.put(`${import.meta.env.VITE_BACK_BASE_URL}/${id}`,formdata,{
            headers:{
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`,
            }
          }).then(({data})=>{
            setnotification({message:data.res,status:true})
            console.log(data.res)
            setNewsPost([])
            Navigate("/ListPostNews")
          })
          .catch(err=>console.log(err))
        
      }else{
        setnotification({message:"select an image"})
      }
      }else if(e.option=="Project" && id){
        if(NewsPost.length>0){
          const formdata = new FormData()
          formdata.append("NewsProject",NewsPost[0])
          axios.put(`${import.meta.env.VITE_BACK_BASE_URL}/${id}`,formdata,{
            headers:{
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`,
            }
          }).then(({data})=>{
            setnotification({message:data.res,status:true})
            console.log(data.res)
            setNewsPost([])
            Navigate("/ListProjectNews")
          })
          .catch(err=>console.log(err))
      }else{
        setnotification({message:"select an image",status:false})
      }
      }
    }
    const handeladd = ()=>{
      if(image!=""){
      if(id){
        setNewsPost([image])
      }else{
        setNewsPost([...NewsPost,image])
      }
      
      setLoading(true)
    }else{
      setnotification({message:"select an image",status:false})
    }
    }
  return (
    <div className='NewsP gen'>
      <div className='containerPo'>
        <div className='swiperP'>
          {NewsPost.length>0 && loading?
            <SwiperApp images={NewsPost}/>
            :<SlideImage/>
          }
        </div>
        <form encType='multipart/form-data'>
            <input type="file" id="image" name='image' onChange={(e)=>setImage(e.target.files[0])} />
        </form>
        <label htmlFor="image"><div className='select'>Select Image</div></label>
        <div className='btns'>
        <button className='btnTE add' onClick={handeladd}>{id?"Apply":"Add"}</button>
        
        {id ? 
        <button className='btnTE blue' onClick={handelUpdate}>Update</button>
      :
      <button className='btnTE blue' onClick={handelCreate}>Create</button>
      }
      </div>
      </div>
    </div>
  )
}

export default NewsPost
