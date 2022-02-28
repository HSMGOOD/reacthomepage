import React from 'react'
import styled from 'styled-components'

function ComunityBody() {
  return (
      <>
        <ComuMainTitle>Where To Get Support</ComuMainTitle>
        <ComuSubTitle>React has a community of millions of developers.</ComuSubTitle>
        <ComuText>
        On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
        Before participating in React’s communities, please read our Code of Conduct. 
        We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
        </ComuText>

        <ComunitySubTitle>Stack Overflow</ComunitySubTitle>
        <ComuText>
        Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!
        </ComuText>

        <ComunitySubTitle>Popular Discussion Forums</ComunitySubTitle>
        <ComuText>
        There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.
        Each community consists of many thousands of React users.
        <ul>
            <li>DEV’s React community</li>
            <li>Hashnode’s React community</li>
            <li>Reactiflux online chat</li>
            <li>Reddit’s React community</li>
        </ul>
        </ComuText>

        <ComunitySubTitle>News</ComunitySubTitle>
        <ComuText>
            For the latest news about React, follow @reactjs on Twitter and the official React blog on this website.
        </ComuText>
      </>
  )
}

export default ComunityBody

const ComuMainTitle = styled.div`

`;

const ComuSubTitle = styled.div`

`;

const ComuText = styled.div`

`;

const ComunitySubTitle = styled.div`

`;
