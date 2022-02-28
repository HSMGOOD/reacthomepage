import React from 'react'
import styled from 'styled-components'

function Component4() {
  return (
    <Div>
      <div style={{width:"900px"}}>
        <Title>
          자습서 환경설정
        </Title>
        <Text1>
          자습서를 완성하는 방법에는 두 가지가 있습니다. 
          브라우저에서 코드를 작성해도 되고 컴퓨터에 로컬 개발 환경을 설정해도 됩니다.
        </Text1>
        <Text2>
          선택 1: 브라우저에 코드 작성하기
        </Text2>
        <Text3>
          이 옵션은 가장 빠르게 시작하는 방식입니다!
        </Text3>
        <Text3>
          먼저 새 탭에서 초기 코드를 열어주세요. 
          새 탭은 비어있는 틱택토 게임판과 React 코드를 보여줄 것입니다. 
          우리는 자습서에서 React 코드를 편집할 것입니다.
        </Text3>
        <Text2>
          선택 2: 자신의 컴퓨터에서 코드 작성하기
        </Text2>
        <Text2>
          도움이 필요할 때!
        </Text2>
        <Text3>
          막히는 부분이 생겼다면 커뮤니티에서 지원하는 자료를 확인해보세요. 
          특히 Reactiflux Chat은 빠르게 도움을 받을 수 있는 좋은 방법입니다. 
          원하는 답을 얻지 못하거나 계속 막힌 상태라면 이슈를 제출해주세요. 
          우리가 도와드리겠습니다.
        </Text3>
      </div>
    </Div>
  )
}

export default Component4

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-top: 15px;
`

const Text1 = styled.div`
  margin: 30px 0px;
  width: 700px;
`

const Text2 = styled.div`
 font-size: 20px;
 font-weight: bold;
 margin: 30px 0px;
`
const Text3 = styled.div`
  width: 700px;
  margin: 30px 0px;
`