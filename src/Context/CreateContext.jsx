import React,{createContext} from 'react'
const CreateContext = createContext({
    introduct:null,
    overview:null,
    problem:null,
    solution:null,
    diagrams:null,
    realization:null,
    notification:null,
    setintroduct:()=>{},
    setoverview:()=>{},
    setproblem:()=>{},
    setsolution:()=>{},
    setdiagrams:()=>{},
    setrealization:()=>{},
    setnotification:()=>{},
})

export default CreateContext
