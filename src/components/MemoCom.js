import React from 'react'

const MemoCom = ({name}) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Memo")
  return (
    <div>MemoCom {name}</div>
  )
}

export default React.memo( MemoCom) 