import React, { Component } from 'react'
import HigherOrder from './HigherOrder'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
     handleClick=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
        // this.setState({count:this.count+1})
    }
    render() {
        const {count}=this.state
    return (
      <button onClick={this.handleClick}>Click {count} {this.props.name} Times</button>
    )
  }
}

export default HigherOrder(Count)