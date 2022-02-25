import React from 'react'
import styled from 'styled-components'
import Image from '../../../assets/landimage.png'

function Body_3_1() {
  return (
    <Body_3_Components>
        <Body3C_1>
            <Body3C_1Title>상태를 가지는 컴포넌트</Body3C_1Title>
            <Body3C_1Text>
            React 컴포넌트는 render() 라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props 를 통해 접근할 수 있습니다.
            </Body3C_1Text>
            <Body3C_1Text>
            React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다. JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.
            </Body3C_1Text>
        </Body3C_1>
        <Img src={Image}/>
    </Body_3_Components>
  )
}

export default Body_3_1

const Body_3_Components = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 150px;
`
const Body3C_1 = styled.div`
    width: 320px;
`
const Body3C_1Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 25px;
`

const Body3C_1Text = styled.div`
    font-size: 16px;
    margin-bottom: 40px;
`

const Img = styled.img`
    width: 800px;
    margin-left: 90px;
`