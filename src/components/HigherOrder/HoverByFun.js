import React from 'react'
import HigherOrder from './HigherOrder'

const HoverByFun = ({name, count,handleClick}) => {
   
  return (
   <button onMouseOver={handleClick}>{name} Hover {count} times</button>
  )
}

export default HigherOrder(HoverByFun)