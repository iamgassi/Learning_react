import React from 'react'

const Comp2 = ({count,handleClick}) => {
  return (
    <button onMouseOver={handleClick} >{count}</button>
  )
}

export default Comp2