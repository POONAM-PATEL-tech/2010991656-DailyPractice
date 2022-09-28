import React from 'react'
import { useNavigate } from 'react-router-dom'
//use Navigate is a hook
export const OrderSummary = () => {
    const navigate=useNavigate()


  return (
    <>
    <div>
 <p> Order summary</p>
 <button onClick={()=>navigate(-1)}>Go back</button>
{/* this -1 will take you back with one step */}
<button onClick={()=>navigate('OrderSummary',{replace:false})}>Just go out</button>
</div>
</>
  )
}