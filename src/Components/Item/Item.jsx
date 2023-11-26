import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}><img className="item_image" onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
     <p className="productName_item">{props.name}</p>
     <div className="item-prices">
        <div className="item-price-new">
        {props.new_price}đ
        </div>
        <div className="item-price-old">
        {props.old_price}đ
        </div>
     </div>
    </div>
  )
}

export default Item