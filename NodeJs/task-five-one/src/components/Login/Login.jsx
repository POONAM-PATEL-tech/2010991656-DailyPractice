import React from 'react'
import './Login.css'
function Login(props) {
  return (
    <div className="logincontainer">
      <form>
        <h1>Login</h1>
        <label class="Head1">{props.Username}</label>
        <input></input><br></br>
        <label class="Head1">{props.Password}</label>
        <input type="password" id="p1" name="p1"></input>
        </form>
    </div>

  )
}

export default Login;