import React, { useState } from 'react'

const State = () => {
    let [count,seteCount]=useState((0));
    const handleClick=()=>{
        count=count+1
        seteCount(count)
    }
    const incrementFive=()=>{
        handleClick()
        handleClick()
        handleClick()
        handleClick()
        handleClick()

    }
  return (
    <>
        <h1>count:{count}</h1>
        <button onClick={incrementFive}>Increament By 5</button>
    </>
  )
}

export default State