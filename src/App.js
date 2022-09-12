import {Greet} from "./components/Greet";
import './App.css'
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import State from "./components/State";
import ParentCom from "./components/ParentCom";
import RefComponent from "./components/RefComponent";
import PortalDom from "./components/PortalDom"; 
import Count from "./components/HigherOrder/Count";
import CountByFun from "./components/HigherOrder/CountByFun";
import Hover from "./components/HigherOrder/Hover";
import HoverByFun from "./components/HigherOrder/HoverByFun";
import Main from "./components/RenderWithProps/Main";
import Comp1 from "./components/RenderWithProps/Comp1";
import Comp2 from "./components/RenderWithProps/Comp2";

function App() {
  return (
  <>
     <div className='App-header '>
   {/* <Hello/>
    <Greet/>
    <Welcome/>
    <State/>
    <ParentCom/>
    <RefComponent/>
    <PortalDom/> */}
    {/* <Count/> */}
    {/* <Hover/> */}
    {/* <CountByFun data="From Count"/>
    <HoverByFun hover="From Hover"/> */}
    <Main 
    data={(count,handleClick)=>(
        <Comp1 count={count} handleClick={handleClick} />
      )}
    />
     <Main data={(count,handleClick)=>(
        <Comp2 count={count} handleClick={handleClick} />
      )}
      />
      
   
  </div>
  </>
  );
}

export default App;
