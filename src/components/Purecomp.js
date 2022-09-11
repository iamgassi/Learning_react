import React, { Component } from 'react'

 class Purecomp extends React.PureComponent {
  render() {
    console.log('******************************************Pure component')
    return (
        <div>Purecomp {this.props.name}</div> 
    
    )
  }
}

export default Purecomp