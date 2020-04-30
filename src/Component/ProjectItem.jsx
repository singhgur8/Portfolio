import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Text, Title} from '../Styles'


// SEE IF I could use react styled components to dim other classes
// will that happen if i know their class names? or can if that does work
// then i could do it through props...and i could pass props to these components as well
// maybe they need to be diff that const then
const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding-right: 30px;
    filter: grayscale(80%);
    transition: .5s;
    z-index: 1;
    &:hover {
        cursor: pointer;
        filter: grayscale(0%);
        transform: scale(1.1);
        z-index:999;
    }
`

const ImgContainer = styled.div`
    width: 30%;
`

const WordContainer = styled.div`
    justify-content: center;
    align-items: center;
    background: ${Colors.innerBackground};
    height: 200px;
    width: 400px;
    padding: 25px;
`
const Textish = styled.div`
    font-size: 20px
`

// this should take in props with following data
// Tech Stack
// App Description
// photo of the item
// want to add abstraction black and white layer here on photo?..maybe later keep color for now. then on hover it changes
    
class ProjectItem extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const {title, description, img, techStack} = this.props.data;
        return (
            <Container>
                <ImgContainer>
                    <div
                        style = {{
                            backgroundImage: 'url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/Profile.jpg)',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'contain',
                        }}
                    />
                </ImgContainer>
                <WordContainer>
                    <Textish style={{...Title, fontSize: 20}}>{title}</Textish>
                    <Textish style={{...Text}}>{title}>{description}</Textish>
                    <Textish style={{...Text}}>{title}>{techStack}</Textish>
                </WordContainer>
            </Container>
        )
    }
}



export default ProjectItem