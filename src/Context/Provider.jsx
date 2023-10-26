import React, { useContext, useState } from 'react'
import CreateContext from './CreateContext'

export const ContextProvider = (props)=>{
    const [introduct,_setintroduct] = useState(null)
    const [overview,_setoverview] = useState(null)
    const [problem,_setproblem] = useState(null)
    const [solution,_setsolution] = useState(null)
    const [diagrams,_setdiagrams] = useState(null)
    const [realization,_setrealization] = useState(null)
    const [ImagesD,_setImagesD] = useState(null)
    const [ImagesR,_setImagesR] = useState(null)
    const [Image,_setImage] = useState(null)
    const [notification,_setnotification] = useState(null)
    const [NewsPost,_setNewsPost] = useState([])
    const [NewsProject,_setNewsProject] = useState([])
    const [token,_setToken] = useState(localStorage.getItem('TOKEN'));
    const  setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('TOKEN',token)
        }else{
            localStorage.removeItem('TOKEN')
        }
    }
    const setintroduct = (value)=>{
        _setintroduct(value)
    }
    const setoverview = (value)=>{
        _setoverview(value)
    }
    const setproblem = (value)=>{
        _setproblem(value)
    }
    const setsolution = (value)=>{
        _setsolution(value)
    }
    const setdiagrams = (value)=>{
        _setdiagrams(value)
    }
    const setrealization = (value)=>{
        _setrealization(value)
    }
    const setImagesD = (value)=>{
        _setImagesD(value)
    }
    const setImagesR = (value)=>{
        _setImagesR(value)
    }
    const setImage = (value)=>{
        _setImage(value)
    }
    const setNewsPost = (value)=>{
        _setNewsPost(value)
    }
    const setNewsProject = (value)=>{
        _setNewsProject(value)
    }
    const setnotification = (message)=>{
        _setnotification(message);
        setTimeout(()=>{
            _setnotification(null);
        },4000)
    }
return(
    <CreateContext.Provider value={{
     introduct,
     overview,
     problem,
     solution,
     diagrams,
     realization,
     notification,
     ImagesD,
     ImagesR,
     Image,
     token,
     NewsPost,
     NewsProject,
     setNewsPost,
     setNewsProject,
     setToken,
     setImagesD,
     setImagesR,
     setImage,
     setintroduct,
     setoverview,
     setproblem,
     setsolution,
     setdiagrams,
     setrealization,
     setnotification,
    }
    }>
        {props.children}
    </CreateContext.Provider>
)
}

export const useStateContext = ()=> useContext(CreateContext);
