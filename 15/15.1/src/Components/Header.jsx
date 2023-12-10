import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <nav id='Header'>
        <Link to='/' >Home</Link>
        <Link to='/products'>Products</Link>
    </nav>
  )
}
