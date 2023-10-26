import React, { useState } from 'react'
import { useStateContext } from '../../../../Context/Provider'

function Overview(e) {
  const {overview,setoverview} = useStateContext()
  const [info,setinfo] = useState({title:"",desc:""})
  const [edit,setEdit] = useState(false)
  const [infoEdit,setinfoEdit] = useState(e.p ? e.p :"")
  const [OverviewList,setOverviewList] = useState(overview ? overview.title.length>0 ? overview:{title:"",desc:""}:{title:"",desc:""})
  console.log(OverviewList)
  const handlecreate = ()=>{
    if(e.p && info.title!="" && info.desc!=""){
       setinfoEdit((el)=>({
         title:[...el.title,info.title],
         desc:[...el.desc,info.desc],
       }))
    }else{
      if(info.title!="" && info.desc!=""){
        setOverviewList((el)=>({
          title:[...el.title,info.title],
          desc:[...el.desc,info.desc],
        }))
       
      }
      setinfo({title:"",desc:""})
    }
  }
// console.log(infoEdit)
  const handleEdit = ()=>{
    const update  = {...infoEdit}
    update.title[info.index]=info.title
    update.desc[info.index]=info.desc
   setinfoEdit(update)
   setEdit(false)
  }
  const handleEditbtn = (e)=>{
    setinfo(e)
    setEdit(true)
  }
  const handleDeletebtn = (e)=>{
  setinfoEdit((el)=>({
      title:[...el.title.filter((t,index)=>index!==e.index)],
      desc:[...el.desc.filter((t,index)=>index!==e.index)]
    }))
   
  }
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
          
          {e.p && edit?
          <button className="btn add" onClick={handleEdit}>Edit</button>
          :
         ""
          }
          {!edit ? <button className="btn add" onClick={handlecreate}>Add</button>:""}
          <button className="btn clean" onClick={()=>setOverviewList([])}>Clean</button>
          <button className="btn add" onClick={()=>setoverview(e.p?infoEdit:OverviewList)}>Confirme</button>
          {/* <button className="btn add" onClick={()=>console.log(infoEdit)}>Confirme</button> */}
          
          </div>
        </div>
     

      </div>
      {!e.p && OverviewList.title.length>0?OverviewList.title.map((o,index)=>{
  return(
  <div key={index} className='post'>
    <h3>{o}</h3>
    {OverviewList.desc[index].split("//").length>=2? 
    <ul key={index} id='ulPost'>
      {
    OverviewList.desc[index].split("//").map((l,index)=>{
      return(
        <li>{l}</li>
      )
    })
  }
    </ul>
    :<p>{OverviewList.desc[index]}</p>
    }
  </div>
  )
}):""}
 {e.p && infoEdit.title.length>0?infoEdit.title.map((o,index)=>{
  return(
  <div key={index} className='post'>
    <h3>{o}</h3>
    {infoEdit.desc[index].split(",").length>=2? 
    <ul key={index} id='ulPost'>
      {
    infoEdit.desc[index].split(",").map((l,index)=>{
      return(
        <li>{l}</li>
      )
    })
  }
    </ul>
    :<p>{infoEdit.desc[index]}</p>
    }
    <div className='btnsPost'>
      <button id="edit" onClick={()=>handleEditbtn({title:o,desc:infoEdit.desc[index],index:index})}><i class='bx bx-edit-alt'></i></button>
      <button id="delete" onClick={()=>handleDeletebtn({index:index})}><i class='bx bx-x'></i></button>
    </div>
  </div>
  )
}):""}
    </div>
  )
}

export default Overview





