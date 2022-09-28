import React from 'react'
import './Welcome.css'
import  ReactDOM  from 'react-dom/client'

export default function Welcome(props) {
  const shoot=()=>{
    alert("Welcome Poonam");
  }
  return (
    
<button id="btn" onClick={shoot}>Alert</button>

  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome/>);
