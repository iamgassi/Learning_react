import React from 'react'
import { UserConsumer } from './CreateContext'

const RandomComp = () => {
  return (
    <UserConsumer>
        {
           Username=>{
            return <h1>Username is {Username}</h1>
           } 
        }
    </UserConsumer>
  )
}

export default RandomComp