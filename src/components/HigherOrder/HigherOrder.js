import React,{Component,useState} from 'react'

const HigherOrder = (OriginalComponent) => {

    
    const NewComponent = () => {
        let [count,setCount]=useState(0)
        const handleClick=()=>{
            // count=count+1
           setCount(prev=>{
            console.log(prev)
            return count=prev+1
           })
            
        }
      return (
        <OriginalComponent handleClick={handleClick} count={count} name="Gaurav"/>
      )
    }

  return NewComponent
}

export default HigherOrder