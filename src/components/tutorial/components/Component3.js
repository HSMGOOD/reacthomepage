import React from 'react'
import styled from 'styled-components'

function Component3() {
  return (
    <Div>
    <div style={{width:"900px"}}>
      <Title>
        무엇을 만들게 될까요?
      </Title>
      <Text1>
        우리는 React로 대화형 틱택토 게임을 만드는 방법을 알려드릴 것입니다.
      </Text1>
      <Text1>
        최종 결과물은 이 페이지에서 확인할 수 있습니다. 
        코드가 이해가 되지 않거나 코드의 문법에 익숙하지 않더라도 걱정마세요! 
        자습서의 목적은 React와 React 문법에 대한 이해를 돕는 것입니다.
      </Text1>
      <Text2>
        자습서를 진행하기 전에 틱택토 게임을 체험해보길 추천합니다. 
        주목할만한 특징 중 하나는 게임판 오른쪽에 번호가 매겨진 목록이 있다는 것입니다. 
        목록은 게임에서 일어난 모든 이동의 기록을 보여주며 게임을 진행하면 업데이트 됩니다.
      </Text2>
      <Text3>
        틱택토 게임에 익숙해졌다면 종료해도 괜찮습니다. 
        우리는 자습서의 간단한 템플릿에서 시작할 것입니다. 
        다음 단계에서는 게임 구현을 시작하기 위한 설정을 다룹니다.
      </Text3>
    </div>
    </Div>
  )
}

export default Component3

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const Title = styled.div`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
`

const Text1 = styled.div`
  font-size: 15px;
  width: 700px;
  margin: 20px 0px;
`
const Text2 = styled.div`
  font-size: 15px;
  width: 700px;
  margin: 20px 0px;
`
const Text3 = styled.div`
  font-size: 15px;
  width: 700px;
  margin: 20px 0px;
`