import React, { useContext, useState } from 'react'
import CreateContext from './CreateContext'

export const ContextProvider = (props)=>{
    const [introduct,_setintroduct] = useState(null)
    const [overview,_setoverview] = useState(null)
    const [problem,_setproblem] = useState(null)
    const [solution,_setsolution] = useState(null)
    const [diagrams,_setdiagrams] = useState(null)
    const [realization,_setrealization] = useState(null)
    const [notification,_setnotification] = useState(null)
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
