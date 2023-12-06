import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Style.css'

export default function Homepage() {
    const {theme} = useTheme()
  return (
    <div id={theme ? 'light' : 'dark'} className='pages'>The Home page </div>
  )
}
