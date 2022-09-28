import React from 'react'
import './Registration.css'

function Registration(props) {
  return (
    <div id="div1">

        <form>
            <fieldset>
                <legend>{props.registration}</legend>
            <label className="lab">{props.name}</label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <label className="lab">{props.age}</label>
            <input type="number" placeholder='age'></input>
            <br></br>
            <br></br>
            <label className="lab">{props.address}</label>
           <textarea name="commit">Enter Text Here</textarea>
            <br></br>
            <br></br>
            <label className="lab">{props.username}</label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <label className="lab">{props.password}</label>
            <input type="password"></input>
            </fieldset>
        </form>
        </div>
  )
}

export default Registration