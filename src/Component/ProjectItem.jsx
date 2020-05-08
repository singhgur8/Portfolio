import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {Colors, Text, Title} from '../Styles'


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
`

const WordContainer = styled.div`
    justify-content: center;
    align-items: center;
    background: ${Colors.innerBackground};
    width: 70%;
    padding: 25px;
    margin: auto;
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
`
    
class ProjectItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {title, description, img, techStack, imgWidth, videoUrl, githubUrl} = this.props.data;
        const playSign = '\u25B6'
        return (
            <Container href={githubUrl}>
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
                    <div style={{...Title, fontSize: 25, fontWeight: 'bold'}}>{title}</div>
                    <div style={{...Text}}>{description}</div>
                    <div style={{...Text, fontSize: 15, color: 'white'}}>Technologies: {techStack}</div>
                    {videoUrl ? <VideoLink href={videoUrl}>{playSign} Video</VideoLink> : null}
                </WordContainer>
            </Container>
        )
    }
}



export default ProjectItem