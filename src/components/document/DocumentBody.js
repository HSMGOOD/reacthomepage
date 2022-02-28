import React from 'react'
import styled from 'styled-components'

function DocumentBody() {
  return (
    <>
       <DocumentTitle>시작하기</DocumentTitle> 
       <DocuSubText>이 페이지는 React 문서 및 관련된 리소스의 개요입니다.</DocuSubText>
       <DocumentText>
           React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다. 홈페이지나 자습서에서 React에 대한 모든 것을 알아보세요.
        </DocumentText>

       <DocumentSubTitle>React 시도해보기</DocumentSubTitle>
       <DocumentText>
           React는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 필요한 만큼 React를 사용할 수 있습니다.
            React를 맛보기로 접해보거나 간단한 HTML 페이지에 약간의 대화형 기능(interactivity)을 추가하거나 복잡한 React 기반의 앱을 시작하고자 하는 경우, 이 섹션의 링크를 통해 시작할 수 있습니다.
        </DocumentText>

       <DocuSubTitle>온라인 플레이그라운드</DocuSubTitle>
       <DocumentText>
       React를 사용하는데 관심이 있다면, 온라인 코드 편집기를 사용할 수 있습니다. CodePen, CodeSandbox 또는 Stackblitz에서 Hello World 템플릿을 사용해 보세요.
        여러분이 사용하고 있는 코드 편집기를 사용하길 원한다면, 이 HTML 파일을 다운로드하고 편집한 다음 브라우저의 로컬 파일 시스템에서 열 수도 있습니다. 런타임 코드 변환이 느리므로 간단한 데모에만 이 코드를 사용하는 것이 좋습니다.
       </DocumentText>

       <DocuSubTitle>웹사이트에 React를 추가하기</DocuSubTitle>
        <DocumentText>
           1분 안에 HTML 페이지에 React를 추가할 수 있습니다. 그리고 조금씩 React의 비중을 늘리거나 몇 개의 동적 위젯에 포함할 수 있습니다.
        </DocumentText>

        <DocuSubTitle></DocuSubTitle>

       <DocumentSubTitle></DocumentSubTitle>
       <DocumentText></DocumentText>

       <DocumentSubTitle></DocumentSubTitle>
       <DocumentText></DocumentText>
    </>
  )
}

export default DocumentBody

const DocumentTitle = styled.div`

`;

const DocuSubText = styled.div`

`;

const DocuSubTitle = styled.div`

`;

const DocumentText = styled.div`

`;

const DocumentSubTitle = styled.div`

`;

