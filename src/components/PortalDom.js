import React from 'react'
import ReactDOM from 'react-dom';
import '../App.css'

const PortalDom = () => {
    const style={color:"brown"}
    const data=<>
    <h1 className='App-header'>Hello, Gaurav From Portal</h1>
    </>
   return  ReactDOM.createPortal(data,(document.getElementById('portal')))
}

export default PortalDom

