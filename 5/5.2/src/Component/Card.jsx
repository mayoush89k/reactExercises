import React from 'react'
import './card.css'

export default function Card({title , description, imageSrc}) {
  return (
    <div id='card-box'>
        <img src={imageSrc} alt={title + 'photo'} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="">SHARE</a>
        <a href="">EXPLORE</a>
    </div>
  )
}
