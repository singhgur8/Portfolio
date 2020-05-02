import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Text} from '../Styles'
import ProjectItem from './ProjectItem.jsx';

const Container = styled.div`
    width: 80%;
    padding: 10px;
    margin-left: 15px;
    margin-bottom: 30px;
    text-align: center;
    background-color: ${Colors.innerBackground}
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 20px;
`

    
class Education extends React.Component{
    constructor(){
        super()
    }


    render(){
        return (
            <div>
                <Title>Education</Title>
                    <Container>
                        <div style={{backgroundColor: 'white', width:500, margin: 'auto'}}>
                            <div style={Text}>University of California, Davis</div>
                            <div style={Text}>Bachelors of Science, Mechanical Engineering</div>
                            <div style={Text}>2014-2018</div>
                        </div>
                        <div style={{backgroundColor: 'white', width:500, margin: 'auto'}}>
                            <div style={Text}>Hack Reactor</div>
                            <div style={Text}>Software Engineering Immersive</div>
                            <div style={Text}>2019-2020</div>
                        </div>
                </Container>
            </div>
        )
    }
}



export default Education