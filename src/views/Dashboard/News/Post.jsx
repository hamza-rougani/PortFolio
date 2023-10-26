import React, { useState } from 'react'

function Post(e) {
    const [display,setDisplay] = useState(true)
    const handelSee = (ev)=>{
        var paraCon = document.querySelectorAll(".paraCon")[ev]
        paraCon.classList.toggle("moreactive")
        setDisplay(!display)
    }
  return (
    <div className='post'>
    <div className='head'>
    <div className='logo'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/profile.png`} alt="" /></div>
    <div className='text'>
    <span id='name'><b>HAMZA ROUGANI</b></span>
    <span id='desc'>@Developer full stack</span>
    </div>
    </div>
    <div className='content'>
        <p className='paraCon'>
            <div className={e.p.post.length>400 ? "span" :""}>
           {e.p.post}
           </div>
           {e.p.post.length>400 ? <button onClick={()=>handelSee(e.index)}> {display?"See more":"See less"}</button>:""} 
        </p>
        <div className='img'>
            <img src={`${import.meta.env.VITE_API_BASE_URL}/${e.p.image}`} alt="" />
        </div>
        <div className='time'>
            <span>{e.p.create_at.split("T")[1].split(".")[0]}</span>
            <span>{e.p.create_at.split("T")[0]}</span>
        </div>
    </div>

</div>
  )
}

export default Post
