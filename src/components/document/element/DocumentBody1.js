import React from 'react'
import styled from 'styled-components';

function DocumentBody1() {
  return (
    <>
        <div>
        <DocumentTitle>시작하기</DocumentTitle> 
        <DocuSubText>이 페이지는 React 문서 및 관련된 리소스의 개요입니다.</DocuSubText>
        <DocumentText>
           React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다. 홈페이지나 자습서에서 React에 대한 모든 것을 알아보세요.
        </DocumentText>
        </div>

        <div>
            <ul>
                <li></li>
                
            </ul>
        </div>
    </>
  )
}

export default DocumentBody1

const DocumentTitle = styled.div`

`;

const DocuSubText = styled.div`

`;

const DocumentText = styled.div`

`;