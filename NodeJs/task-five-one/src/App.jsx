
import './App.css';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
<div className="container">
  
  <Welcome/>
  <Registration  registration="Registration:" name="Name:" age="Age:" address="Address:" username="UserName:" password="Password:"/>
  <Login Username="username" Password="password"/>
  
  </div>


  );
}


export default App;
