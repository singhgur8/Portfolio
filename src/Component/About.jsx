import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {Colors, Text, Title} from '../Styles'
import GithubIcon from '../SVG/github.jsx'

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    @media (max-width: 500px) {
        width: 100%;
        padding-bottom: 40px;
    }
`

const Name = styled.div`
    color: ${Colors.title};
    font-size: 65px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 500px) {
        font-size: 80px;
    }
`

const Intro = styled.p`
    color: #949495;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.5em;
    filter: grayscale(100%);

    @media (max-width: 500px) {
        font-size: 40px;
    }
`

const frameHeight = 150;
const frameWidth = frameHeight

const Image = styled.div`
    width:${frameWidth}px;
    height: ${frameHeight}px; 
    background: rgb(0,0,0,0); 
    position: relative;
    background-image: url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/Profile.jpg);
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    transition: .5s;
    &:hover {
        filter: grayscale(0%);
    }
    border-radius: ${frameWidth/2}px;
    @media (max-width: 500px) {
        width:${frameWidth*1.5}px;
        height: ${frameHeight*1.5}px; 
        border-radius: ${(frameWidth*1.5)/2}px;
    }
`
const LinkedinSize = 130;
const LinkedinLogo = styled.div`
    background: rgb(255,255,255,0);
    position: relative;
    width:${LinkedinSize+10}px;
    height:${(LinkedinSize/4) + 1}px;
    background-image: url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/linkedin.png);
    background-size: cover;
    filter: grayscale(100%) brightness(500%);
    transition: .5s;
    &:hover {
        cursor: pointer;
        filter: grayscale(0%);
    }
    @media (max-width: 500px) {
        width:${LinkedinSize*2+10}px;
        height:${(LinkedinSize*2)/4}px;
    }
`
const LinkedInContainer = styled.a`
    position: relative;
    top: 24px;
    left: 40px; 
    textDecoration: none;
    @media (max-width: 500px) {
        top: 30px;
    }
`

const githubSize = 140;
const GithubContainer = styled.a`
    text-decoration: none;
    display: flex;
    cursor: pointer;
    width: ${githubSize}px;
    height: 50px;
    position: relative;
    top: 20px;
    left: 30px;
    transition: .5s;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(8px 8px 10px gray);
    }
    @media (max-width: 500px) {
        width: ${githubSize*1.5}px;
        height: ${50*1.5};
    }
`
const GithubLogo = styled.div`
    cursor: pointer;
    width: ${githubSize}px;
    height: ${githubSize*(3/10)}px;
    position: relative;
    top: 0px;
    background: rgb(0,0,0,0);
    background-image: url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/GitHub_Logo_White.png);
    background-size: cover;

    @media (max-width: 500px) {
        width: ${githubSize*1.5}px;
        height: ${githubSize*(3/10)*2}px;
    }
`

const ContactInfoContainer = styled.div`
    display: flex;
    align-self: flex-end;
    margin: auto;
    @media (max-width: 500px) {
        padding-top: 60px;
    }
`    

const ResumeContainer = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
    height: 25px;
    width: 170px;
    padding: 10px;
    white-space: nowrap;
    font-weight: 800;
    position: relative;
    left: -200px;
    top: 65px;
    text-align: center;


    @media (max-width: 500px) {
        height: 50px;
        width: 340px;
        border-radius: 80px;
        font-size: 40px;
        left: -380px;
        top: 120px;
    }

    border-style: solid;
    border-width: 3px;
    border-color: white;
    transition: .5s;
    &:hover {
        cursor: pointer;
        background-color: pink;
    }
    border-radius: 40px

`

let timelineData = [
    {
        title: 'Experience'
    },
    {
        title: 'Projects'
    },
    {
        title: 'Skills'
    },
    {
        title: 'Contact'
    }
]

const TimeLineDiv = styled.div`
    height: 20px;
    font-size: 14px;
    cursor: pointer;
    color: ${Colors.text};
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    transition: .5s;
    filter: grayscale(100%);
    ${props=> props.highlight && css `
        font-size: 20px;
        color: white;
    `}

    @media (max-width: 500px) {
        font-size: 40px;
        margin: 20px;
    }

`

let TimelineItem = ({highlight, title, index, scrollPage}) => {
    const dash = '\u2015'
    if (highlight){
        return(
            <TimeLineDiv highlight onClick={scrollPage} id={title.toLowerCase()+'.'}>
                    {index+1} {dash} {title}
            </TimeLineDiv>
        )
    } else {
        return (
            <TimeLineDiv onClick={scrollPage} id={title.toLowerCase()+'.'}>
                    {index+1} {dash} {title}
            </TimeLineDiv>
        )
    }
}


class About extends React.Component{
    constructor(props){
        super(props)

        this.goToSection = this.goToSection.bind(this)
    }

    goToSection(e){
        let id = e.target.id.slice(0,e.target.id.length-1)
        let el = document.getElementById(id)
        el.scrollIntoView({behavior: "smooth"});
    }

    render(){
        return (
            <Container>
                <Name>
                    Hello, I'm <br></br>Gurjot Singh.
                </Name>
                <Intro>
                    I'm a full-stack software engineer who likes keeping up to date with the latest technologies.
                    Lately I have been using React, Node, Python, GraphQL, and MongoDB to build my applications. However
                    a full list of technologies is in the <u style={{color:'white', cursor:'pointer'}} onClick={this.goToSection} id={'skills!'}>skills</u> section. 
                    Outside of work, catch me snowboarding, filmmaking, or playing volleyball. 
                    <br></br>
                    <br></br>
                    I'm eager to collaborate on new projects. <u style={{color:'white', cursor:'pointer'}} onClick={this.goToSection} id={'contact!'}>Let's talk</u>!
                </Intro>
                <div style={{height: 160}}>
                    {timelineData.map((item,idx)=>{
                        let highlight = this.props.idx === idx
                        return(
                            <TimelineItem
                                title = {item.title}
                                index = {idx}
                                highlight = {highlight}
                                scrollPage = {this.goToSection}
                                key={'timeline'+idx}
                            />
                        )
                    })}
                </div>
                <br></br>
                <br></br>
                <ContactInfoContainer>
                    <div style={{paddingRight: 0}}>
                        <Image/>
                    </div>
                    <GithubContainer href={'https://github.com/singhgur8'} target="_blank">
                        <GithubIcon width={45} height={45}/>
                        <GithubLogo/>
                    </GithubContainer>
                    <LinkedInContainer href={'https://www.linkedin.com/in/singhgur8/'} target="_blank">
                        <LinkedinLogo/>
                    </LinkedInContainer>
                    <ResumeContainer target="_blank" id='resume' href={'https://gurjotportfolio.s3-us-west-1.amazonaws.com/GurjotSingh_Resume.pdf'} download='resume.pdf' >
                        Download Resume
                    </ResumeContainer>
                </ContactInfoContainer>
            </Container>
        )
    }
}



export default About