import React,{useState} from 'react';
import './App.css';
import MainDiv from './Component/MainDiv';
import Upper from './Component/Upper';
import About from './Component/About';
import Lower from './Component/Lower';
function App() {
  const [aboutDisplay,setAboutDisplay]=useState(false);
  const Display=()=>{
    setAboutDisplay(!aboutDisplay);
  }
  return (
    <div className="App">
      <Upper dsplyConfig={Display}/>
      {aboutDisplay?null:<MainDiv/>}      {aboutDisplay?<About/>:null}
      <Lower/>
    </div>
  );
}

export default App;
