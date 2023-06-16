import React from 'react'
import Goods from './Goods/Goods';
import goods from "../goods.json"

export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods key={item.title} data={item} />)}
      </div>
  )
}
