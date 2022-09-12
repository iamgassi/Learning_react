import React from 'react'
import HigherOrder from './HigherOrder'

const HoverByFun = ({name, count,handleClick,hover}) => {
   
  return (
   <button onMouseOver={handleClick}>{name} Hover {count} times...{hover}</button>
  )
}

export default HigherOrder(HoverByFun)