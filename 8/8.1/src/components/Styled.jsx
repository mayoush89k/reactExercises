import React from 'react'
import {styled} from 'styled-components'

const Box1 = styled.div`
background-color: lightgreen;
width: 80vw;
height: 80vh;
    margin-top: 20px;
    position: relative;
`
const Box2 = styled.div`
background-color: lightblue;
width: 70vw;
height: 70vh;
position: absolute;
left: 5vw;
top: 5vh;
`
const Box3 = styled.div`
background-color: pink;
width: 60vw;
height: 60vh;
position: absolute;
left: 5vw;
top: 5vh;
` 
const Box4 = styled.div`
background-color: plum;
width: 50vw;
height: 20vh;
position: absolute;
left: 5vw;
top: 5vh;
display: block;
`
const Box5 = styled.div`
background-color: plum;
width: 50vw;
height: 20vh;
position: absolute;
left: 5vw;
bottom: 5vh;
display: block;
`

export default function Styled() {
  return (
    <div >
      <h1>Styled Components</h1>
      <Box1>
        <Box2>
          <Box3>
            <Box4></Box4>
            <Box5></Box5>
          </Box3>
        </Box2>
      </Box1>
    </div>
  )
}
