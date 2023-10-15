import React from 'react'
const diagram= [
  {id:1,title:"Home page:",image:"https://themewagon.com/wp-content/uploads/2021/12/famms-1.png"},
  {id:2,title:"login:",image:"https://img.freepik.com/vecteurs-libre/page-accueil-connexion-aux-vagues-abstraites_52683-23493.jpg"},
  {id:3,title:"Register:",image:"https://files.jotform.com/jotformapps/e-commerce-registration-form-5a3e2a77ec5e836cda204d1ab31b5c04-classic.png"},
  {id:4,title:"show:",image:"https://www.researchgate.net/publication/323535611/figure/fig4/AS:600060924530689@1520077081190/Activity-Diagram-for-Buy-Item.png"},
]
function Realization() {
  return (
    <div className='diagrams'>
      {diagram.map((d,index)=>{
        return(
          <div className='diagramsc' key={index}>
            <h4>{d.title}</h4>
            <div className='cont'>
            <div className='img'><img src={d.image} alt=""/></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est provident voluptatibus enim rem temporibus. Id earum dolor deleniti, aut repellat corporis omnis consequuntur quod reiciendis deserunt sunt tenetur labore!</p>
          </div>
        )
      })}
    </div>
  )
}

export default Realization