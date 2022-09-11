import React from 'react'
import HigherOrder from './HigherOrder'

const CountByFun = ({name, count,handleClick}) => {
   
  return (
   <button onClick={handleClick}>{name} Click {count} times</button>
  )
}

export default HigherOrder(CountByFun)