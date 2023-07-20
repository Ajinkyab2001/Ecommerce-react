import React from 'react'
import './Outpulist.css'

const OutputList = ({id,name,category,price,productDetails,setProductDetails}) => {
    const deleteItem = (id) =>{
        const updatedItems = productDetails.filter((elem)=>{
            return elem.id !== id;
        })
        setProductDetails(updatedItems)
    }
     
  return (
    <div key={id} className='list'>
   <p>category:{category}</p>
    <p>Product Name:{name}</p>
    <p>Price:{price}</p>
    
    <button onClick={()=>deleteItem(id)}>delete</button>
    
  </div>
  )
}

export default OutputList