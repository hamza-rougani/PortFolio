import React from 'react'
function Overview(e) {
  console.log(e)
  return (
    <div className='Overview'>
      {e.p.title?
      e.p.title.map((o,index)=>{
        return(
        <div className='Introduct block'><h4 id='h4p'>{o}</h4>
  {e.p.desc[index].split("//").length>=2? 
        <ul key={index} id='ulPost'>
        {
      e.p.desc[index].split("//").map((l,index)=>{
        return(
          <li>{l}</li>
        )
      })
    }
      </ul>
      :<p id="paragraph">{e.p.desc[index]}</p>
      }
        
           </div>
           )
      })
      
      :""}

    </div>
  )
}

export default Overview
