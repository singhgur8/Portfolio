import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {Colors, Text, Mobile} from '../Styles'


// SEE IF I could use react styled components to dim other classes
// will that happen if i know their class names? or can if that does work
// then i could do it through props...and i could pass props to these components as well
// maybe they need to be diff that const then

// https://stackoverflow.com/questions/19170481/highlight-div-on-hover-and-fade-out-other-divs-using-just-css3

// i should dim outer container containing all projects so this things parent. when i hover on these
// items they should come out, and be above the parent in z index so it lightends up while others are dark

const Container = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 10px;
    filter: grayscale(100%);
    transition: .5s;
    flex-grow: 4;
    overflow: hidden;
    position: relative;
    z-index: 1;
    &:hover {
        z-index:999;
        cursor: pointer;
        filter: grayscale(0%) blur(0px);
        transform: scale(1.1);
    }
`

const ImgContainer = styled.div`
    width: 30%;
    // margin: auto;
    background-color: gray;

    @media (max-width: 600px) {
        display: none;
    }
`

const WordContainer = styled.div`
    justify-content: center;
    align-items: center;
    background: ${Colors.innerBackground};
    width: 70%;
    padding: 25px;
    margin: auto;

    @media (max-width: 600px) {
        width: 100%;
    }
`

const Title = styled.div`
    color: white;
    font-size: 25px;
    font-weight: bold; // might need to be like 800
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 600px) {
        font-size: 50px;
    }
`

const Description = styled.div`
    color: #949495;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.5em;

    @media (max-width: 600px) {
        font-size: ${Mobile.textFontSize}px;
    }
`

const SkillsText = styled.div`
    color: white;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.5em;

    @media (max-width: 600px) {
        font-size: ${Mobile.textFontSize}px;
    }
`

const VideoLink = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 20px;
    transition: .5s;
    position: relative;
    &:hover {
        color: white;
    }

    @media (max-width: 600px) {
        font-size: ${Mobile.textFontSize + 10}px;
        color: white;
    }
`
    
class ProjectItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {title, description, img, techStack, imgWidth, videoUrl, githubUrl} = this.props.data;
        const playSign = '\u25B6'
        return (
            <Container href={githubUrl} target="_blank">
                <ImgContainer>
                    <div
                        style = {{
                            backgroundImage: img,
                            width: '100%',
                            height: '100%',
                            // backgroundSize: `auto ${imgWidth}px`,
                            backgroundSize: 'auto 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    />
                </ImgContainer>
                <WordContainer onMouseEnter={this.hoverWrapper} onMouseLeave={this.hoverWrapper}>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <SkillsText>Technologies: {techStack}</SkillsText>
                    {videoUrl ? <VideoLink href={videoUrl}>{playSign} Video</VideoLink> : null}
                </WordContainer>
            </Container>
        )
    }
}



export default ProjectItem