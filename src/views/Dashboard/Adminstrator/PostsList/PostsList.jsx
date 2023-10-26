import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Warning from '../../../warning/warning'
import { Link, useNavigate } from 'react-router-dom'
function PostsList() {
  const [posts,setPost] = useState([])
  const [search,setSearch] = useState([])
  const [loading,setLoading] = useState(false)
  const [warning,setWarning] = useState(false)
  const [id,setId] = useState(null)
  const Navigate = useNavigate()
  useEffect(()=>{
    setLoading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/posts`)
    .then(({data})=>{
      setPost(data.data)
      setSearch(data.data)
      console.log(data.data)
      setLoading(true)
    })
    .catch(err=>console.log(err))
  },[])
const handelDelete = (e)=>{
  setWarning(true)
  setId(e)
}
const handelSearch = (e)=>{
  var item = e.target.value
  let prj = posts.filter((p)=>p.post.toLowerCase().includes(item.toLowerCase()))
  setSearch(prj)

}
  return (
    <div className='PostsList gen'>
        <div className='introductPos'>
         <h2>Posts</h2>
         <Link id="linkB" to="/createpost"><button id='buttonGne'>Add New</button></Link>
        </div>
        <div className='info'>
         <ul>
            <li><b>All</b> ({posts.length})</li>
            {/* <li><b>Published</b> (14)</li> */}
         </ul>
        </div>
        <div className='search'>
            <input type="text" placeholder='search' onChange={(e)=>handelSearch(e)}/>
        </div>
      <div className='table'>
        <table>
            <thead>
                <td><div id='Gicons'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/image.png`} alt="" /></div></td>
                <td>Post</td>
                <td>Create_at</td>
                <td>Action</td>
            </thead>
            <tbody>
              {loading ? 
              <>
              { 
              search.length>=1 ? 
              search.map((p,index)=>{
                return(
                <tr key={index}>
                <td><div id='imageG'><img src={`${import.meta.env.VITE_API_BASE_URL}/${p.image}`} alt="" /></div></td>
                <td ><div id='postDes'>{p.post}</div></td>
                <td>{p.create_at}</td>
                <td>
                  <button onClick={()=>handelDelete(p._id)}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div></button>
                  <button onClick={()=>Navigate(`/updatepost/${p._id}`)}><div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/crayon.png`} alt="" /></div></button>
                </td>
                </tr>
                )
              })
              
              :
              <div className='noResult'>
                <span>There are no posts available</span>
                </div>
                }
              </>
              :<div className='noResult'>
              <span>Loading</span>
              </div>}
            </tbody>
        </table>
      </div>
      {warning ? <Warning data={{message:"Are you sure you want to delete post ?",setWarning:setWarning,type:"deletePost",id:id}}/>: ""}
    </div>
  )
}

export default PostsList
