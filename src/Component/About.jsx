import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Text} from '../Styles'

const Container = styled.div`
    width: 70%
`

const Name = styled.div`
    color: ${Colors.title};
    font-size: 65px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
`

const photoHeight = 150;
const photoWidth = photoHeight*(3/2)

const frameHeight = photoHeight;
const frameWidth = frameHeight

const posX = (frameWidth/2) - (photoWidth/2)
const posY = (frameHeight/2) - (photoHeight/2)


const Profile = styled.div`
    border-style: solid;
    width:${frameHeight}px;
    height: ${frameWidth}px;
    border-radius: ${frameWidth/2}px;
    overflow: hidden;
    background: white;
    // z-index: 5;
`

const Image = styled.div`
    width:${photoWidth}px;
    height: ${photoHeight}px; 
    background:pink; 
    position: relative;
    top: ${posY}px;
    left: ${posX}px;
    background-image: url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/Profile.jpg);
    background-size: cover;
    filter: grayscale(100%);
    &:hover {
        filter: grayscale(0%);
    }
`
    
class About extends React.Component{
    constructor(){
        super()
    }

    handleClick(){
        alert('hi')
    }

    render(){
        return (
            <Container>
                <Name>
                    Hello, I'm Gurjot Singh.
                </Name>
                <p style={Text}>
                    I am full-stack software engineer who likes keeping up to date with the latest technologies.
                    Lately I have been using React, Node, Python, GraphQL, and MongoDB to build my applications however
                    I have used various other tech stacks. You can find the full list in the skills section.
                    <br></br>
                    <br></br>
                    When I am not building apps, I might be snowboarding, filmmaking, playing volleyball or watching netlfix.
                    <br></br>
                    <br></br>
                    I would love to hear from you so feel free to <u onClick={this.handleClick}>contact</u> me!
                </p>
                <div>
                    01 ---- Experience. onclick these should scroll
                </div>
                <div>
                    02 ---- Projects. and on scroll these should highlight differently
                </div>
                <div>03 ---- Skills</div>
                <div>04 ---- Contact Me</div>

                <div>
                    ph: (510)672-8042
                </div>
                <div>
                    email: gurjotssingh510@gmail.com
                </div>
                <div>
                    Timeline:
                </div>
                <div>   
                    Photo
                    Github logo
                    Linkedin logo
                    Resume Download
                </div>
                <Profile>
                    <Image/>
                </Profile>
            </Container>
        )
    }
}



export default About
                    // <div style={{
                    //     width:`${photoWidth}px`, 
                    //     height: `${photoHeight}px`, 
                    //     background:'pink', 
                    //     display:'flex', 
                    //     position: 'relative', top: posY, left:posX,
                    //     zIndex: 1
                    //     }}>
                    //     {/* <img 
                    //         src='https://gurjotportfolio.s3-us-west-1.amazonaws.com/Profile.jpg' 
                    //         width='100%' 
                    //         height='100%'
                    //         zIndex={-1}
                    //         /> */}
                    // </div>