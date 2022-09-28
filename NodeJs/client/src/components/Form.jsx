
import React, {useState} from 'react';
import './Form.css'


export default function Form() {
  const[name,setName]=useState('Give your Name');
  const[mobile,setMobile]=useState(91);
  const[address,setAddress]=useState('Give your Address');
  
  return (
    <> {/*Fragment */}
    
    <form action='/'>
      <fieldset>
    Name :<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    Mobile:<input type="number" value={mobile} onChange={(a)=>setMobile(a.target.value)}></input>
    <br></br>
    Address:<input type="text" value={address} onChange={(b)=>setAddress(b.target.value)}></input>
    <br></br>
    <br></br>
    <button >Button</button>
    </fieldset>


    </form>
    </>
  )
}


