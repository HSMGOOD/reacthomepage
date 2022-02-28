import React from 'react'
import styled from 'styled-components'

function C2_1() {
  return (
    <C2_1Title>
    <Div>
      <C1H2>자습서를 시작하기 전에</C1H2>
      <C1Div>
        우리는 이 자습서에서 작은 게임을 만들겁니다. 
        게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 
        그래도 한번 해보세요! 자습서를 통해 React 앱을 만드는 기본적인 사항들을 배웁니다. 
        이것을 마스터하면 React를 더 깊게 이해할 수 있습니다.
      </C1Div>
      <C2Div1>
        <div>
          팁
        </div>
        <div>
          자습서는 실습으로 배우기를 선호하는 사람들에 맞춰 설계되었습니다. 
          기초부터 개념을 학습하길 선호한다면 단계별 가이드를 확인해보세요. 
          자습서와 단계별 가이드는 상호 보완적입니다.
        </div>
      </C2Div1>
      <C2Div2>
        <div style={{margin:"30px"}}>
          자습서는 아래와 같이 몇 가지 부분으로 나뉘어 있습니다.
        </div>
        <ul>
          <li>자습서 환경설정은 자습서를 따를 수 있는 시작점을 안내합니다.</li>
          <li style={{paddingTop:"10px"}}>개요에서는 React의 기본(components, props, state)에 대해서 알아봅니다.</li>
          <li style={{paddingTop:"10px"}}>게임 완성하기는 React 개발에서 사용하는 가장 일반적인 테크닉을 가르쳐 줄 것입니다.</li>
          <li style={{paddingTop:"10px"}}>시간여행 추가하기는 React의 고유한 강점에 대한 깊은 통찰력을 줄 것입니다.</li>
        </ul>
      </C2Div2>
    </Div>
    </C2_1Title>
  )
}

export default C2_1

const C2_1Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 90px;
`

const Div = styled.div`
  width: 950px;
`
const C1H2 = styled.h2`
  font-size: 35px;
`

const C1Div = styled.div`
  width: 760px;
`

const C2Div1 = styled.div`
  background-color: lightyellow;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
`
const C2Div2 = styled.div`
  width: 590px;
`