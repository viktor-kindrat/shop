import "./Style/Goods.css"

import React from 'react'

export default function Goods(props) {
  return (
    <div className='goodsItem'>
      <div className="goodsItem-image-container">
        <img className='goodsItem-image' width={300} src={props.data.image} alt={`${props.data.title} view`} />
      </div>
      <div className="goodsItem-info">
        <div className="goodsItem-headline-group">
          <h3 className='goodsItem-headline'>{props.data.title}</h3>
          {(props.data.sale) ? <span className="goods-item-sale-badge">For Sale</span> : ""}
        </div>
        <p className='goodsItem-price'>Description: {props.data.description}</p>
        <p className='goodsItem-price'>Price: {props.data.price}</p>
        <p className='goodsItem-price'>Color: {props.data.color}</p>
        <p className='goodsItem-price'>Count: {props.data.count}</p>
        <button className="goodsItem-buy">Buy</button>
      </div>
    </div>
  )
}
