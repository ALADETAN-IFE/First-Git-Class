import React from 'react'
import { ScaleLoader } from 'react-spinners'
import styled from 'styled-components'
import Bg from "../../assets/IMG/bg2.png"

const LoadingBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
`

const Loading = () => {
  return (
    <LoadingBody>
        <ScaleLoader 
        height={100}
        color="#a8701d"
         />
    </LoadingBody>
  )
}

export default Loading