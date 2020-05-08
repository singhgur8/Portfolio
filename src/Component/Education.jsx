import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Text} from '../Styles'

const Container = styled.div`
    width: 80%;
    padding: 10px;
    text-align: center;
    justify-content: space-between;
    margin: auto;
    background-color: ${Colors.innerBackground}
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 20px;
    padding-bottom:10px;
`

const InnerContainer = styled.div`
    width:80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.background}
`
const Seperator = styled.div`
    width: 80%;
    height: .5px;
    color:white;
    background-color: white;
    margin: auto;
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
                        <InnerContainer>
                            <img style={{width:170, height:35, marginRight: 20}} src='https://gurjotportfolio.s3-us-west-1.amazonaws.com/ucdavis_logo_gold.png'/>
                            <div>
                                <div style={{...Text, color: 'white'}}>University of California, Davis</div>
                                <div style={{...Text, color: 'white'}}>Bachelors of Science, Mechanical Engineering</div>
                                <div style={{...Text, color: 'white'}}>2014 - 2018</div>
                            </div>
                        </InnerContainer>
                        <Seperator/>
                        <InnerContainer>
                            <img style={{width:170, height:50, marginRight: 20}} src='http://hrhqdir.s3.amazonaws.com/brand-guide/HackReactor_RGBLogo-White-Blue.png'/>
                            <div style={{alignSelf:'flex-end'}}>
                                <div style={{...Text, color: 'white'}}>Hack Reactor</div>
                                <div style={{...Text, color: 'white'}}>Software Engineering Immersive</div>
                                <div style={{...Text, color: 'white'}}>2019 - 2020</div>
                            </div>
                        </InnerContainer>
                </Container>
            </div>
        )
    }
}



export default Education