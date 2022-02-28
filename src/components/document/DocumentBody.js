import React from 'react'
import styled from 'styled-components'

function DocumentBody() {
  return (
    <>
       <DocumentTitle>Where To Get Support</DocumentTitle> 
       <DocuSubTitle>React has a community of millions of developers.</DocuSubTitle>
       <DocumentText>
        On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
        Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
        </DocumentText>

       <DocumentSubTitle>Stack Overflow</DocumentSubTitle>
       <DocumentText>
           Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!
       </DocumentText>

       <DocumentSubTitle>Popular Discussion Forums</DocumentSubTitle>
       <DocumentText>
       There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.
        Each community consists of many thousands of React users.
        <ul>
            <li>DEV’s React community</li>
            <li>Hashnode’s React community</li>
            <li>Reactiflux online chat</li>
            <li>Reddit’s React community</li>
        </ul>
       </DocumentText>

       <DocumentSubTitle>News</DocumentSubTitle>
       <DocumentText>
           For the latest news about React, follow @reactjs on Twitter and the official React blog on this website.
        </DocumentText>
    </>
  )
}

export default DocumentBody

const DocumentTitle = styled.div`

`;

const DocuSubTitle = styled.div`

`;

const DocumentText = styled.div`

`;

const DocumentSubTitle = styled.div`

`;

