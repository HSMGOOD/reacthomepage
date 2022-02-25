import React from 'react'
import styled from 'styled-components'

function Body_4() {
  return (
    <>
        <Body_4_components>
        <StartBtn><StartBtn_1>시작하기</StartBtn_1></StartBtn>
        <NextBtn>자습서 읽어보기 --</NextBtn>
        </Body_4_components>
    </>
  )
}

export default Body_4

const Body_4_components = styled.div`
    width: 100vw;
    height: 7vh;
    background-color: rgb(40, 44, 51);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StartBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: lightblue;
    margin-right: 20px;
`

const StartBtn_1 = styled.div`
    display: flex;
    font-size: 20px;
`

const NextBtn = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-left: 30px;
    color: lightblue;
    margin-left: 20px;
`