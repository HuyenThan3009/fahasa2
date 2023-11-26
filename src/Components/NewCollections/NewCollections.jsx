import React from 'react'
import './NewCollections.css'
import new_collections from "../Assets/new_collections"
const NewCollections = () => {
  return (
    <div className='new-collections'>
     <h1 className="title_collections">SÁCH MỚI</h1>
     <hr />
     <div className="collections">
      {new_collections.map((item)=>{
        return(
          <div className="new_collections" key={item.id}>
            <div className="new_collections1">
              <img src={item.image} alt=""  className="img_new_collections"/>
              <p className="name_produtcs"> {item.name}</p>
                {item.category}
            </div>
            <div className="new_collections_price">
              <p className="item_price_News" >{item.new_price}<strong>VNĐ</strong> </p>
              <p className="item_sale_price">{item.old_price}<strong>VNĐ</strong> </p>
            </div>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default NewCollections