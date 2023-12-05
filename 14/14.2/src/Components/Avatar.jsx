import React from 'react'
import './style.css'

export default function Avatar({user}) {
  return (
    <div id='card'>
    <img src={user.avatar} alt="" />
    <h3>{user.name}</h3>
    <section><b>Email: </b>{user.email}</section>
    <section><b>Age: </b>{user.age}</section>
    <section><b>Country: </b>{user.country}</section>
  </div>
  )
}
