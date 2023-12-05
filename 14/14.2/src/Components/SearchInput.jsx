import React from 'react'

export default function SearchInput({inputHandle}) {
  return (
    <input type='text' placeholder='Search' onChange={(e) => {inputHandle(e)}}/>
  )
}
