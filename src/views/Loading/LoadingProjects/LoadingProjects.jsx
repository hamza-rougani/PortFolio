import React from 'react'
import LoadingProject from './LoadingProject'
const project = [1,2,3,4,5,6,7,8]
function LoadingProjects() {
  return (
    <div className='Cards'>
    {project.map(()=><LoadingProject/>)}
  </div>
  )
}

export default LoadingProjects
