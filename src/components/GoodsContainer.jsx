import React from 'react'
import Goods from './Goods';
const goods = [
  { title: "Крісло", price: 300, image: "https://cdn1.jysk.com/getimage/wd2.medium/185422", color: "grey", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.", sale: false, count: 2},
  { title: "Стілець", price: 320, image: "https://economtochka.com.ua/image/cache/catalog/samba/800x1000px_Vensan_plus_wood_alu_1-007_KL306_34-800x800.jpg", color: "orange", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.", sale: true, count: 5}];
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods key={item.title} title={item.title} />)}
      </div>
  )
}
