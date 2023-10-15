import React, { useState } from 'react'
import { useStateContext } from '../../../../Context/Provider'

function Solution() {
  const {solution,setsolution} = useStateContext()
  const [info,setinfo] = useState({title:"",desc:""})
  const [OverviewList,setOverviewList] = useState([])
  const [OverviewData,setOverviewData] = useState({title:[],desc:[]})
  const handlecreate = ()=>{
    if(info.title!="" && info.desc!=""){
      setOverviewList(el=>[...el,info])
      setOverviewData((prevState) => ({
        title: [...prevState.title, info.title],
        desc: [...prevState.desc, info.desc],
        // image: [...prevState.image, info.image],
      }));

    }
    setinfo({title:"",desc:""})
   
  }

  console.log(OverviewData)
  return (
    <div className='Overview'>
      <div className='addline'>
      
        <div className='addform'>
          <form encType='multipart/form-data'>
          <input onChange={(e)=>setinfo({...info,title:e.target.value})} value={info.title} id='i' type="text" placeholder='title'/>
          <span id="comma">If you want to make a list of items, put a comma "," :</span>
          <textarea onChange={(e)=>setinfo({...info,desc:e.target.value})} value={info.desc} name="" id="i" cols="30" rows="10" placeholder='Description'></textarea>
          </form>
          <div className='btns'> 
          <button className="btn add" onClick={handlecreate}>Add</button>
          <button className="btn clean" onClick={()=>setOverviewList([])}>Clean</button>
          <button className="btn add" onClick={()=>setsolution(OverviewData)}>Confirme</button>
          </div>
        </div>
     

      </div>
      {OverviewList.length>0?OverviewList.map((o,index)=>{
  return(
  <div key={index} className='post'>
    <h3>{o.title}</h3>
    {o.desc.split(",").length>=2? 
    <ul key={index} id='ulPost'>
      {
    o.desc.split(",").map((l,index)=>{
      return(
        <li>{l}</li>
      )
    })
  }
    </ul>
    :<p>{o.desc}</p>
    }
  </div>
  )
}):""}
    </div>
  )
}

export default Solution





