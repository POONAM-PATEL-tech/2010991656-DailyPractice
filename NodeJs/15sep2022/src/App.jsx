
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import Home from './components/Home/Home'
import A from './components/Home/A'
/*const App=()=>{
  return();}
}*/
function App() {
  return (
    <div className="App">
      <h1>This is App componenet of this website</h1>
      <h2>dsjfhj</h2>
      <Home title="Poonam" title2="CSE"/>
      <A/>
      
    </div>

  );
}

export default App;
