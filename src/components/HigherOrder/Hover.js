import React, { useState } from 'react'

const Hover = () => {
    let [count,setCount]=useState(0)
    const handleClick=()=>{
        count=count+1
    setCount(count)
    }
  return (
    <button onMouseOver={handleClick}>Hovered {count} Times</button>
  )
}

export default Hover