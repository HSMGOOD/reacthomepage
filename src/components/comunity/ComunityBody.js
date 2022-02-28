import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

function ComunityBody() {
  return (
        <ComunityMain>
            <ComunityMenu>
              <p>COMMUNITY RESOURCES</p>
              <Link to="1">Surport</Link>
              <Link to="1">Team</Link>
              <Link to="1">Courses</Link>
              <Link to="1">Example</Link>
              <Link to="1">Meetups</Link>
              <Link to="1">Conferences</Link>
              <Link to="1">Articles</Link>
              <Link to="1">Podcasts</Link>
              <Link to="1">Video</Link>
              <Link to="1">External Resources</Link>
            </ComunityMenu>
            <ComuBody>
                <ComuMainTitle>Where To Get Support</ComuMainTitle>
                <ComuSubTitle>React has a community of millions of developers.</ComuSubTitle>
                <ComuText>
                On this page we’ve listed some React-related communities that you can be a part of; 
                <br/>
                see the other pages in this section for additional online and in-person learning materials.
                <br/>
                <br/>
                Before participating in React’s communities, please read our Code of Conduct. 
                <br/>
                We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
                </ComuText>

                <ComunitySubTitle>Stack Overflow</ComunitySubTitle>
                <ComuText>
                Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. 
                <br/>
                Read through the existing questions tagged with reactjs or ask your own!
                </ComuText>

                <ComunitySubTitle>Popular Discussion Forums</ComunitySubTitle>
                <ComuText>
                There are many online forums which are a great place for discussion about best practices and 
                <br/>
                application architecture as well as the future of React. If you have an answerable code-level 
                <br/>
                question, Stack Overflow is usually a better fit.
                <br/>
                <br/>
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
            </ComuBody>

        </ComunityMain>
  ) 
}

export default ComunityBody

const ComunityMain = styled.div`
    //margin: 0px 300px;
    display: flex;
    flex-direction: row-reverse;
`;

const ComunityMenu = styled.div`
    background-color: rgb(240,240,240);
    width: 250px;
    height: 100vh;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    font-size: 15px;
    font-weight: 600;
    
    a{
        text-decoration: none;
        color: black;
        margin-top: 10px;
        font-size: 15px;
        font-weight: 400;
        a:hover {
            font-weight: 600;
        }
    }
`;

const ComuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ComuMainTitle = styled.div`
    font-size: 60px;
    font-weight: 600;
    margin: 60px 0px;
`;

const ComuSubTitle = styled.div`
    color: gray;
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 300;
`;

const ComuText = styled.div`
    border: none;
    margin: 30px 0px;
`;

const ComunitySubTitle = styled.div`
    margin: 30px 0px;
    font-size: 30px;
    font-weight: 700;
`;

