import React from 'react';
//import Home from './Home.css';

//second way

const h4Style={
     color:'blue'
};
function Home(props) {
  return (
    <div>
        <h1>Welcome to Home Component</h1>
        <h2>Name:{props.title}</h2>
        <h3>Branch:{props.title2}</h3>
        <h4 style={h4Style}>Hi</h4>



        </div>
  )
}

export default Home;