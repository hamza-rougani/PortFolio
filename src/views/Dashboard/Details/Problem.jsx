import React from 'react'

function Problem(e) {
  return (
    <div>
      {e.p.title?
      e.p.title.map((o,index)=>{
        return(
        <div className='Introduct block'><h4 id='h4p'>{o}</h4>
        <span id='paragraph'>{e.p.desc[index]}</span>
       
           </div>
           )
      })
      
      :""}
    </div>
  )
}

export default Problem
