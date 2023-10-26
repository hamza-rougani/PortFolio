import React from 'react'

function diagrams(e) {
  return (
    <div className='diagrams'>
      {e.p.title.map((d,index)=>{
        return(
          <div className='diagramsc' key={index}>
            <h4 id='h4p'>{d}</h4>
            <div className='cont'>
            <div className='img'><img src={`${import.meta.env.VITE_API_BASE_URL}/${e.p.images[index]}`} alt=""/></div>
            </div>
            <p id='paragraph'>{e.p.desc[index]}</p>
          </div>
        )
      })}

    </div>
  )
}

export default diagrams
