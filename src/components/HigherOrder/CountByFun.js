import React from 'react'
import HigherOrder from './HigherOrder'

const CountByFun = ({name, count,handleClick,data}) => {
   
  return (
   <button onClick={handleClick}>{name} Click {count} times..{data}</button>
  )
}

export default HigherOrder(CountByFun)