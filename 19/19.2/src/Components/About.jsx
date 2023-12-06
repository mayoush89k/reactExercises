import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Style.css'

export default function About() {
    const {theme} = useTheme()
  return (
    <div id={theme ? 'light' : 'dark'} className='pages'>The About Page</div>
  )
}
