import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import {Colors, Text, Title} from '../Styles'


// SEE IF I could use react styled components to dim other classes
// will that happen if i know their class names? or can if that does work
// then i could do it through props...and i could pass props to these components as well
// maybe they need to be diff that const then
const Container = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    margin: 10px;
    filter: grayscale(100%);
    transition: .5s;
    position: relative;
    z-index: 1;
    &:hover {
        z-index:999;
        cursor: pointer;
        filter: grayscale(0%);
        transform: scale(1.1);
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
            <Container >
                <ImgContainer>
                    <div
                        style = {{
                            backgroundImage: img,
                            width: '100%',
                            height: '100%',
                            backgroundSize: '120% 120%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    />
                </ImgContainer>
                <WordContainer onMouseEnter={this.hoverWrapper} onMouseLeave={this.hoverWrapper}>
                    <div style={{...Title, fontSize: 25, fontWeight: 'bold'}}>{title}</div>
                    <div style={{...Text}}>{description}</div>
                    <div style={{...Text, fontSize: 15, color: 'white'}}>Technologies: {techStack}</div>
                </WordContainer>
            </Container>
        )
    }
}



export default ProjectItem