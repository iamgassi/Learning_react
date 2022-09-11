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
    <CountByFun/>
    <HoverByFun/>
    {/* <Hover/> */}
  </div>
  </>
  );
}

export default App;
