import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {Colors, Text, Title} from '../Styles'
import GithubIcon from '../SVG/github.jsx'

const Container = styled.div`
    width: 85%
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Name = styled.div`
    color: ${Colors.title};
    font-size: 65px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
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
`
const LinkedinSize = 130;
const LinkedinLogo = styled.div`
    background: rgb(255,255,255,0);
    position: relative;
    width:${LinkedinSize}px;
    height:${LinkedinSize/4}px;
    background-image: url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/linkedin.png);
    background-size: cover;
    filter: grayscale(100%) brightness(500%);
    transition: .5s;
    &:hover {
        cursor: pointer;
        filter: grayscale(0%);
    }
`

const githubSize = 140;
const GithubContainer = styled.div`
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
`

const ContactInfoContainer = styled.div`
    display: flex;
    align-self: flex-end;
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
    font-size: 20px;
    cursor: pointer;
    color: ${Colors.text};
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    transition: .5s;
    filter: grayscale(100%);
    ${props=> props.highlight && css `
        font-size: 40px;
        color: white;
    `}

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

    handleGit(e){
        e.preventDefault();
        window.location = 'https://github.com/singhgur8'
    }
    handleLinkedin(e){
        e.preventDefault();
        window.location = 'https://www.linkedin.com/in/singhgur8/'
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
                    Hello, I'm Gurjot Singh.
                </Name>
                <p style={{...Text, filter:'grayscale(100%)'}}>
                    I'm a full-stack software engineer who likes keeping up to date with the latest technologies.
                    Lately I have been using React, Node, Python, GraphQL, and MongoDB to build my applications. However
                    a full list of technologies is in the <u style={{color:'white', cursor:'pointer'}} onClick={this.goToSection} id={'skills!'}>skills</u> section.
                    <br></br>
                    <br></br>
                    Outside of work, catch me snowboarding, filmmaking, or playing volleyball. 
                    <br></br>
                    <br></br>
                    I'm eager to collaborate on new projects. <u style={{color:'white', cursor:'pointer'}} onClick={this.goToSection} id={'contact!'}>Let's talk</u>!
                </p>
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
                <ContactInfoContainer>
                    <div style={{paddingRight: 0}}>
                        {/* <Profile> */}
                            <Image/>
                        {/* </Profile> */}
                    </div>
                    <GithubContainer onClick={this.handleGit}>
                        <GithubIcon width={45} height={45}/>
                        <GithubLogo/>
                    </GithubContainer>
                    <div style={{position: 'relative', top: 24, left: 40}} onClick={this.handleLinkedin}>
                        <LinkedinLogo/>
                    </div>
                    <ResumeContainer id='resume' href={'https://gurjotportfolio.s3-us-west-1.amazonaws.com/GurjotSingh_Resume.pdf'} download='resume.pdf' >
                        Download Resume
                    </ResumeContainer>
                </ContactInfoContainer>
            </Container>
        )
    }
}



export default About