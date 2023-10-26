import React from 'react'
import { Link } from 'react-router-dom'
function Card(e) {
  return (
    <div className='Card' key={e.index}>
      <div className='image'><img src={`${import.meta.env.VITE_API_BASE_URL}/${e.p.Introduct.image}`} alt="" /></div>
      <div className='info'>
        <div className='title'>{e.p.Introduct.title}</div>
        <div className='desc'>{e.p.Introduct.desc}</div>
        <div className='tools'>{e.p.Introduct.tools}</div>
        <Link to={`/details/${e.p._id}`}><button>show details</button></Link>
      </div>
    </div>
  )
}

export default Card
