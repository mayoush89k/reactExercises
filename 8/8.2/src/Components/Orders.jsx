import React from 'react'
import './style.css'

export default function Orders({order , isFull}) {
  return (
    <div id={isFull ? 'full' : 'order-card'}>
        {order.name}
        <img src={order.img} />
    </div>
  )
}
