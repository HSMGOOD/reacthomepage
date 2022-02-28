import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navi = useNavigate();
  return (
  <div>
    <HeaderTitle>
      <ReactTitle onClick={ ()=> navi("/")}>React</ReactTitle>
      <Title_1>문서</Title_1>
      <Title_2 onClick={()=> navi("/tutorial")}>자습서</Title_2>
      <Title_3>블로그</Title_3>
      <Title_4 onClick={ ()=>navi("/comunity") }>커뮤니티</Title_4>
    </HeaderTitle>
  </div>    
  )
}

export default Header

const HeaderTitle = styled.div`
    background-color: rgb(33, 35, 42);
    min-height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

const ReactTitle = styled.div`
   font-size: 30px;
   color: lightblue;
   font-weight: bold;
   position: absolute;
   left: 600px;
`

const Title_1 = styled.div`
  font-size: 20px;
  color: gray;
  position: absolute;
  left: 850px;
`
const Title_2 = styled.div`
  font-size: 20px;
  color: gray;
  position: absolute;
  left: 950px;
`
const Title_3 = styled.div`
  font-size: 20px;
  color: gray;
  position: absolute;
  left: 1050px;
`
const Title_4 = styled.div`
  font-size: 20px;
  color: gray;
  position: absolute;
  left: 1150px;
`