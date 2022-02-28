import React from 'react'
import styled from "styled-components";

function Component1() {
  return (
    <TutorialC1>
        <SizeDiv>
        <H1>자습서: React 시작하기</H1>
        <Div>이 자습서는 <strong>React</strong>에 대한 어떤 지식도 가정하지 않습니다.</Div>
        </SizeDiv>
    </TutorialC1>
    
  )
}

export default Component1

const TutorialC1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 100vw;
`
const SizeDiv = styled.div`
    width: 950px;
`

const H1 = styled.div`
    font-size: 57px;
    font-weight: bold;
`

const Div = styled.div`
    font-size: 25px;
    color: gray;
    font-weight: 200;
    margin-top: 40px;
`