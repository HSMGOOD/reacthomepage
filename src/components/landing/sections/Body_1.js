import React from 'react';
import styled from "styled-components";

function Body_1() {
  return (
    <>
        <Component_1>
            <C1>React</C1>
            <C2>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</C2>
            <C3>
                <StartBtn><StartBtn_1>시작하기</StartBtn_1></StartBtn>
                <NextBtn>자습서 읽어보기 --</NextBtn>
            </C3>
        </Component_1>
    </>
  )
}

export default Body_1

const Component_1 = styled.div`
    min-height: 35vh;
    background-color: rgb(40, 44, 51);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const C1 = styled.div`
    font-size: 70px;
    color: lightblue;
    font-weight: bold;
`

const C2 = styled.div`
    font-size: 30px;
    color: white;
    font-weight: 100;
    margin-top: 20px;
`
const C3 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 45px;
`

const StartBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: lightblue;
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
`
