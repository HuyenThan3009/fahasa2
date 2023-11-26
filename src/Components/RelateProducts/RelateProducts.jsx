import React from 'react'
import './RelateProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelateProducts = () => {
  return (
    <div className='relateproducts'>
     <h1>Sản Phẩm Liên Quan</h1>
     <hr />
     <div className="relateproducts-item">
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
     </div>
    </div>
  )
}

export default RelateProducts