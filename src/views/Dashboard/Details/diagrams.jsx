import React from 'react'
const diagram= [
  {id:1,title:"Use case Diagram ",image:"https://www.researchgate.net/publication/221184817/figure/fig1/AS:669977711484959@1536746542825/Use-Case-diagram-of-the-proposed-agent-based-e-commerce-system.png"},
  {id:2,title:"Class Diagram ",image:"https://i.ytimg.com/vi/q8UbnNsbVYk/maxresdefault.jpg"},
  {id:3,title:"Sequence Diagram",image:"https://svg.template.creately.com/hbscitcx3"},
  {id:4,title:"Activity Diagram:",image:"https://www.researchgate.net/publication/323535611/figure/fig4/AS:600060924530689@1520077081190/Activity-Diagram-for-Buy-Item.png"},
]
function diagrams() {
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

export default diagrams
