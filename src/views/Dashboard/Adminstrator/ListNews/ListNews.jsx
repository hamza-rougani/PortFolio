import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Warning from '../../../warning/warning'
function NewsProject(e) {
  const [loading,setLoading] = useState(false)
  const [warning,setWarning] = useState(false)
  const [search,setsearch] = useState(false)
  const [News,setNews] = useState([])
  const [id,setId] = useState(null)
  const Navigate = useNavigate()

  if(e.option=="Post"){
    useEffect(()=>{
      setLoading(false)
      axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsPost`)
      .then(({data})=>{
        setNews(data.data)
        setLoading(true)
      })
      .catch(err=>{
       console.log(err)
        
      })
    },[e.option])
  }
  if(e.option=="Project"){
    useEffect(()=>{
      setLoading(false)
      axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsProject`)
      .then(({data})=>{
        setNews(data.data)
        setLoading(true)
      })
      .catch(err=>{
       console.log(err)
        
      })
    },[e.option])
  }
  const handelDelete = (e)=>{
    setWarning(true)
    setId(e)
  }
  // const handelSearch = (ev)=>{
  //   setNews(News.filter((N)=>N.title==ev))
  // }
  return (
    <div className='PostsList gen'>
        <div className='introductPos'>
         <h2>News {e.option}s</h2>
         <Link id="linkB" to={e.option=="Post"?"/NewsPost":"/NewsProject"}><button id='buttonGne'>Add New</button></Link>
        </div>
        <div className='info'>
         <ul>
            <li><b>All</b> ({News.length})</li>
         </ul>
        </div>
        {/* <div className='search'>
            <input type="text" placeholder='search' onChange={(e)=>handelSearch(e.target.value)}/>
            <button id='buttonGne'>search</button>
        </div> */}
      <div className='table'>
        <table>
            <thead>
                <td><div id='Gicons'><img src="images/image.png" alt="" /></div></td>
                <td>create_at</td>
                <td>Action</td>
            </thead>
            <tbody>
              {loading ? 
              <>
              { 
              News.length>0 ? 
              News.map((p,index)=>{
                return(
                <tr key={index}>
                <td><div id='imageG'><img src={e.option=="Project"? `${import.meta.env.VITE_API_BASE_URL}/${p.NewsProjectImage}`:`${import.meta.env.VITE_API_BASE_URL}/${p.NewsPostImage}`} alt="" /></div></td>
                <td>{p.create_at}</td>
                <td>
                <button onClick={()=>handelDelete(p._id)}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div></button>
                  <button onClick={()=>{e.option=="Project"?Navigate(`/NewsProject/${p._id}`):Navigate(`/NewsPost/${p._id}`)}}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/crayon.png`} alt="" /></div></button>
                </td>
                </tr>
                )
              })
              
              :<div className='noResult'>
              <span>There are no news available</span>
              </div>}
              </>
              :<div className='noResult'>
              <span>Loading</span>
              </div>}
            </tbody>
        </table>
      </div>
      {warning ? <Warning data={{message:"Are you sure you want to delete News of Post ?",setWarning:setWarning,type:e.option,id:id}}/>: ""}

    </div>
  )
}

export default NewsProject
