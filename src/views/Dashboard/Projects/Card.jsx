import React from 'react'

function Card(e) {
  return (
    <div className='Card' key={e.index}>
      <div className='image'><img src={e.p.image} alt="" /></div>
      <div className='info'>
        <div className='title'>{e.p.title}</div>
        <div className='desc'>{e.p.desc}</div>
        <div className='tools'>{e.p.tools}</div>
        <button>show details</button>
      </div>
    </div>
  )
}

export default Card
