import React from 'react'
//import { Link } from 'react-router-dom'
import {Link,Outlet} from 'react-router-dom'
export const Product = () => {
  return (
    <div>Product

        <input type='search' placeholder='Search Products'></input>
        <nav>
         <Link to='Featured'>Featured</Link>
         <Link to='NewProduct'>New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
