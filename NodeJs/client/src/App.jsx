
  
//import ReactDOM from "react-dom/client";
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Form from './components/Form.jsx';
//import Navbar from './components/Navbar';
import React, {useState} from 'react';
import  {OrderSummary}  from './components/OrderSummary.jsx';
import { NoMatch } from './components/NoMatch';
import { Product } from './components/Product';
import { NewProduct } from './components/NewProduct';
import { Featured } from './components/Featured';


export default function App() {
  return (
   <>

    <Routes>
  
<Route  path='/' element = {<Home/>} />
<Route path='/About' element={<About/>}/>
<Route path='/Form' element={<Form/>}/>
<Route path='OrderSummary' element={<OrderSummary/>}/>
<Route path='*' element={<NoMatch/>}/> {/*If any route not find then it will then it will call. */}
<Route path='Product' element={<Product/>}>
  <Route index element={<Featured/>}/> {/* This will come at first means give the featured by default */}
  <Route path='Featured' element ={<Featured/>}/>
  <Route path='NewProduct' element={<NewProduct/>}/>
   </Route>
   </Routes>

   </>
  );
}



