import React, { useState } from 'react'
import { useStateContext } from '../../../../Context/Provider'

function Diagrams() {
  const {diagrams,setdiagrams} = useStateContext()
  const [info,setinfo] = useState({title:"",desc:"",image:""})
  const [OverviewList,setOverviewList] = useState([])
  const [OverviewData,setOverviewData] = useState({title:[],desc:[],images:[]})
  const handlecreate = ()=>{
    if(info.title!="" && info.desc!="" && typeof(info.image) == typeof([])){
      setOverviewList(el=>[...el,info])
      setOverviewData((prevState) => ({
        title: [...prevState.title, info.title],
        desc: [...prevState.desc, info.desc],
        images: [...prevState.images, info.image],
      }));

    }
    setinfo({title:"",desc:"",image:""})
   
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
          <input onChange={(e)=>setinfo({...info,image:e.target.files[0]})} type="file" name="images" id='image' style={{display:"none"}}/>
          <label htmlFor="image"><div className='addImage'><div id='icons'><img src="http://localhost:5173/images/photos.png" alt="" /></div>Add image</div></label>
          </form>
          <div className='btns'> 
          <button className="btn add" onClick={handlecreate}>Add</button>
          <button className="btn clean" onClick={()=>setOverviewList([])}>Clean</button>
          <button className="btn add" onClick={()=>setdiagrams(OverviewData)}>Confirme</button>
          </div>
        </div>
     

      </div>
      {OverviewList.length>0?OverviewList.map((o,index)=>{
        return(
        <div key={index} className='post'>
          <h3>{o.title}</h3>
          <div className='generaleI'><div className='image'><img src={URL.createObjectURL(o.image)} alt="" /></div></div>
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

export default Diagrams

