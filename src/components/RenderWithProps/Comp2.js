import React from 'react'

const Comp2 = ({count,onMouseOver}) => {
  return (
    <button onMouseOver={onMouseOver} >{count}</button>
  )
}

export default Comp2