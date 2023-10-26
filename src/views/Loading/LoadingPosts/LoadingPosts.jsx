import React from 'react'
import LoadingPost from './LoadingPost'
const posts = [1,2]
function LoadingPosts() {
  return (
    <div className='posts LoadingPost'>
    {
            posts.map(()=>{
              return(
                   <LoadingPost/>
                   )
            })
        }
  </div>
  )
}

export default LoadingPosts
