import React, { useState } from 'react'

const Main = (props) => {
    let [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(prev=>{
            return count=prev+1;
        })
    }
  return (
    <>
    {props.data(count,handleClick)}
  
    </>
  )
}

export default Main