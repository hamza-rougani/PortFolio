import React from 'react'
import Card from './Card'
var projects = [
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot_19.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/movie.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot_3.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot (67).png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot_19.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/movie.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot_3.png"},
    {id:1,title:"Estevanico",desc:"@e-commerce site web",tools:"react,laravel,mysql",image:"images/Screenshot (67).png"},
]
function Cards() {
  return (
    <div className='Cards'>
      {projects.map((project,index)=><Card p={project} index={index}/>)}
    </div>
  )
}

export default Cards
