import React, { useEffect, useState } from 'react'
import SwiperApp from "../../Swiper/SwiperApp"
import Posts from "./Posts"
import SlideImage from '../../Loading/SlideImage'
import axios from 'axios'
function News() {
  const [NewsP,setNewsP] = useState([])
  const [loading,setloading] = useState(false)
  useEffect(()=>{
    setloading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsPost`)
    .then(({data})=>{
    setNewsP(data.data)
    setloading(true)
    })
    .catch(err=>console.log(err))
  },[])
  console.log(NewsP)
  return (
    <div className='News gen'>
       {loading?<SwiperApp images={NewsP}/>:<SlideImage/>}
      <div className='news'>
        <h3><center>My Posts</center></h3>
        <Posts/>
      </div>
    </div>
  )
}

export default News
