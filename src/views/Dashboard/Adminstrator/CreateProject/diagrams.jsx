import React, { useState } from 'react'
import { useStateContext } from '../../../../Context/Provider'

function Diagrams(e) {
  const {diagrams,setdiagrams,setImagesD,ImagesD} = useStateContext()
  const [info,setinfo] = useState({title:"",desc:"",image:""})
  const [OverviewList,setOverviewList] = useState(diagrams ? diagrams.title.length>0 ? diagrams:{title:[],desc:[]}:{title:[],desc:[]})
  const [imagesRea,setimagesRea] = useState(ImagesD ? ImagesD.length>0 ? ImagesD:[]:[])
  const [infoEdit,setinfoEdit] = useState(e.p ? e.p :"")
  const [edit,setEdit] = useState(false)
  console.log(imagesRea)
  const handlecreate = ()=>{
    if(e.p && info.title!="" && info.desc!="" && typeof(info.image) == typeof([])){
      setinfoEdit((el)=>({
        title:[...el.title,info.title],
        desc:[...el.desc,info.desc],
        images:[...el.images,info.image]
      }))
   }else{
    if(info.title!="" && info.desc!="" && typeof(info.image) == typeof([])){
      setOverviewList((prevState) => ({
        title: [...prevState.title,info.title],
        desc: [...prevState.desc,info.desc],
      }));
      setimagesRea([...imagesRea,info.image]);

    }
    setinfo({title:"",desc:"",image:""})
  }
  }


  const handleConfirme = ()=>{
    if(e.p){
      setdiagrams(infoEdit)
    }else{
      setdiagrams(OverviewList)
      setImagesD(imagesRea)
    }
  }
  const handleEdit = ()=>{
    const update  = {...infoEdit}
    update.title[info.index]=info.title
    update.desc[info.index]=info.desc
    update.images[info.index]=info.image
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
      desc:[...el.desc.filter((t,index)=>index!==e.index)],
      images:[...el.images.filter((t,index)=>index!==e.index)],

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
          <input onChange={(e)=>setinfo({...info,image:e.target.files[0]})} type="file" name="images" id='image' style={{display:"none"}}/>
          <label htmlFor="image"><div className='addImage'><div id='icons'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/photos.png`} alt="" /></div>Add image</div></label>
          </form>
          <div className='btns'> 
          
          {e.p && edit?
          <button className="btn add" onClick={handleEdit}>Edit</button>
          :
         ""
          }
          {!edit ? <button className="btn add" onClick={handlecreate}>Add</button>:""}
          <button className="btn clean" onClick={()=>setOverviewList([])}>Clean</button>
          <button className="btn add" onClick={()=>handleConfirme()}>Confirme</button>
          {/* <button className="btn add" onClick={()=>console.log(infoEdit)}>Confirme</button> */}
          
          </div>
        </div>
     

      </div>
      {!e.p && OverviewList.title.length>0?OverviewList.title.map((o,index)=>{
        return(
        <div key={index} className='post'>
          <h3>{o}</h3>
          <div className='generaleI'><div className='image'><img src={imagesRea.length>0 ? URL.createObjectURL(imagesRea[index]):""} alt="" /></div></div>
          {OverviewList.desc[index].split(",").length>=2? 
          <ul key={index} id='ulPost'>
            {
          OverviewList.desc[index].split(",").map((l,index)=>{
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
    <div className='generaleI'><div className='image'><img src={infoEdit.images[index] ?typeof(infoEdit.images[index])=="string" ? `${import.meta.env.VITE_API_BASE_URL}/${infoEdit.images[index]}` : URL.createObjectURL(infoEdit.images[index]):"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="" /></div></div>
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
      <button id="edit" onClick={()=>handleEditbtn({title:o,desc:infoEdit.desc[index],images:infoEdit.images[index],index:index})}><i class='bx bx-edit-alt'></i></button>
      <button id="delete" onClick={()=>handleDeletebtn({index:index})}><i class='bx bx-x'></i></button>
    </div>
  </div>
  )
}):""}
    </div>
  )
}

export default Diagrams
