import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import SwiperApp from '../../Swiper/SwiperApp'
import axios from 'axios'
import SlideImage from '../../Loading/SlideImage'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Projects() {
  const [NewsP,setNewsP] = useState([])
  const [loading,setloading] = useState(false)
  const [search,setSearch] = useState([])
  const [keys,setKeys] = useState([])
  const [pat,setPat] = useState("")
  const [display,setdisplay] = useState(false)
  const Location = useLocation()
  const searchParams =new URLSearchParams(Location.search)
  const Params = searchParams.get("search")
  const Navigate = useNavigate()
  var searchBar = useRef(null)
  const doc = useRef(null)
  const toolsB1 = ["HTML","CSS","Javascript","React","jQuery"]
  const toolsB2 = ["Laravel","PHP","Nodejs","Ajax","Python","MYSQL","Mongodb"]
  useEffect(()=>{
    setloading(false)
    axios.get(`${import.meta.env.VITE_BACK_BASE_URL}/NewsProject`)
    .then(({data})=>{
    setNewsP(data.data)
    setloading(true)
    })
    .catch(err=>console.log(err))
    window.addEventListener('click',handleClickout)
  },[])


const  handleClickout=(ev)=>{
 if(searchBar && searchBar.current.contains(ev.target)){
  if(window.location.pathname!="/projects"){
    var searchBar = useRef(null)
  }
 }else{
  setdisplay(false)
 }
}

const handelsearch = (e)=>{
let item  = e.target.value
if(item.length>0){
  setdisplay(true)
}else{
  setdisplay(false)
}
setPat(item)
console.log(item)
 let filter = search.filter((i,index)=>i.Introduct.title.toLowerCase().includes(item.toLowerCase()))
 setKeys(filter)
}

  return (
    <div className='Projects gen' ref={doc}>
      <div className='header'>
        <div className='title'>
            <h2>My Projects</h2>
            <div className='conT'>
        <div className='search'>
          <input ref={searchBar} type="text" placeholder='Find a project...' onChange={(e)=>handelsearch(e)}/>
          
          {/* <button onClick={handelsearch}><i class='bx bx-search'></i></button> */}
          
          {display ? 
          <div className='result'>
            <ul>
           {keys.length>0?keys.map((k,i)=><Link to={`?search=${k.Introduct.title}`} id="linkD" key={i}><li>{k.Introduct.title}</li></Link>):<div className='pasRe'>No Result</div>}
            </ul>
          </div>
          :""}
          </div>
       
        {Params ?
        <div className='res'>
        <b>
        {'Result: '+Params}
        </b>
        <button onClick={()=>Navigate("/projects")}>All</button>
        </div>
        :""} 
        
       </div>
        
        
        
        </div>
        <div className='buttons'>
            <div className='buttonsum'>
            {toolsB1.map((t,i)=><button key={i} onClick={()=>Navigate(`?search=${t.toLowerCase()}`)}>{t}</button>)}
            </div>
            <div className='buttonsum'>
            {toolsB2.map((t,i)=><button key={i} onClick={()=>Navigate(`?search=${t.toLowerCase()}`)}>{t}</button>)}
            </div>
            {/* <div className='intro'>
            In my portfolio, you'll find an array of web development projects that represent my journey as a Full Stack Developer. These projects are more than just lines of code; they are a testament to my dedication to crafting exceptional digital experiences.
            </div> */}
        </div>
      </div>
      <div className='swiperApp'>
        {loading?<SwiperApp images={NewsP}/>:<SlideImage/>}
      </div>
      <div className='cardsP'>
        <Cards Params={Params} search={search} setSearch={setSearch}/>
      </div>
    </div>
  )
}

export default Projects
