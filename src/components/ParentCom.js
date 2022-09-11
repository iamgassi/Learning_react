import React, { Component, PureComponent } from 'react'
import MemoCom from './MemoCom'
import Purecomp from './Purecomp'
import RegularCom from './RegularCom'

export default class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'gaurav'
      }
    }
   componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'gaurav'
        })
    },5000)
   }
  render() {
    console.log("####################################################parent component")
    return (
        <>
            <h1>Parent component</h1>
            <MemoCom/>
            {/* <Purecomp name={this.state.name}/>
            <RegularCom name={this.state.name} /> */}

        </>
    )
  }
}
