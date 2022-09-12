import React,{Component,useState} from 'react'

const HigherOrder = (OriginalComponent) => {

    
    const NewComponent = (props) => {
        let [count,setCount]=useState(0)
        const handleClick=()=>{
           setCount(prev=>{
            // console.log(prev)
            return count=prev+1
           })
            
        }
       console.log(props)
      return (
        
        <OriginalComponent handleClick={handleClick} count={count} name="Gaurav" 
         {...props}
        />
      )
    }

  return NewComponent
}

export default HigherOrder