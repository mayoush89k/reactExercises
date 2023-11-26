import React from 'react'
import './Button.css'

export default function Button({title , boxId}) {
  return (
    <button id={boxId}>{title}</button>
  )
}
