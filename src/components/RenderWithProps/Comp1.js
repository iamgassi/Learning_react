import React from 'react'

const Comp1 = ({count,handleClick}) => {
  return (
    <>
        <button onClick={handleClick}>{count}</button>
    </>
  )
}

export default Comp1