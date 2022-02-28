import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

function Footer() {
  return (
    <FooterFt>
      <FooterSub>
        <Coper>
        Facebook Open Source
        <br/>
        Copyright © 2022 Meta Platforms, IncFacebook Open Source
        <br/>
        Copyright © 2022 Meta Platforms, Inc
        </Coper>
        <FooterMenuList style={{}}>
          <Document>
            문서
            <Link to="1">설치</Link>
            <Link to="1">주요 개념</Link>
            <Link to="1">고급 안내서</Link>
            <Link to="1">API 참고서</Link>
            <Link to="1">Hook</Link>
            <Link to="1">테스팅</Link>
            <Link to="1">기여</Link>
            <Link to="1">자주 묻는 질문</Link>
          </Document>

          <Channel>
            채널
            <Link to="1">GitHub</Link>
            <Link to="1">Stack Overflow</Link>
            <Link to="1">Discussion Forums</Link>
            <Link to="1">Reactiflux Chat</Link>
            <Link to="1">DEV Community</Link>
            <Link to="1">Facebook</Link>
            <Link to="1">Twitter</Link>
          </Channel>

          <Comunity>
            커뮤니티
            <Link to="1">Code of Conduct</Link>
            <Link to="1">Community Resources</Link>      
          </Comunity>
          
          <More>
            더보기
            <Link to="1">자습서</Link>
            <Link to="1">블로그</Link>
            <Link to="1">감사의 글</Link>
            <Link to="1">React Native</Link>
            <Link to="1">Privacy</Link>
            <Link to="1">Terms</Link>
          </More>
        </FooterMenuList>
      </FooterSub>
    </FooterFt>
  )
}

export default Footer

const FooterFt = styled.div `
  background-color: rgb(32,35,42);
  /* margin-top: 90%; */
  height: 20vh;
  width: 100vw;
  padding-top: 40px;
`;

const FooterSub = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Coper = styled.div`
  color: white;
  font-size: 13px;
`;
const FooterMenuList = styled.div`
  color: gray;
  font-size: 13px;
  display: flex;

  a {
    text-decoration: none;
    color: white;
    margin-top: 10px;
    font-size: 15px;
  }
`;


const Document = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;

`;

const Comunity = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;

`;

const Channel = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;

`;

const More = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;

`;


