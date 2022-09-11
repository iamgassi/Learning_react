import React,{useEffect, useRef} from 'react'
import './style.css'

const RefComponent = () => {
    console.log("--------------------------Component start");
     const inputRef = useRef(null)
     console.log("input Ref",inputRef);
    // const inputRef=React.createRef();
    useEffect(()=>{
       inputRef.current.focus();
        console.log("inside USE EFFECT"); 
        console.log(inputRef);
    },[])
 

   const handleClick=(event)=>{
    console.log(event);
    if(event.code=="Enter")
    {
        inputRef.current.value=""
        console.log("Enter key is pressed")

    }
    // console.log(event)
   }
   console.log("######################################ended");
    return (
    <>
        <h3>UserName</h3>
        <input ref={inputRef} placeholder='Enter To Clear' onKeyDown={handleClick}/>
    </>
  )
}

export default RefComponent
