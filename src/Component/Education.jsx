import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Mobile} from '../Styles'

const Container = styled.div`
    width: 80%;
    padding: 10px;
    text-align: center;
    justify-content: space-between;
    margin: auto;
    
    @media (max-width: 600px) {
        width: 95%;
    }
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

    @media (max-width: 600px) {
        font-size: ${Mobile.titleFontSize}px;
    }
`

const InnerContainer = styled.div`
    width:80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 600px) {
        width: 100%;
    }
    background-color: ${Colors.background}
`

const Text = styled.div`
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
const Davis = styled.img`
    width: 170px;
    height: 35px;
    margin-right: 20px;

    @media (max-width: 600px) {
        width: 340px;
        height: 70px;
        margin-left: 30px;
    }
`
const HR = styled.img`
    width: 170px;
    height: 50px;
    margin-right: 20px;

    @media (max-width: 600px) {
        width: 340px;
        height: 100px;
        margin-left: 30px;
    }
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
                            <Davis src='https://gurjotportfolio.s3-us-west-1.amazonaws.com/ucdavis_logo_gold.png'/>
                            <div>
                                <Text>University of California, Davis</Text>
                                <Text>Bachelors of Science, Mechanical Engineering</Text>
                                <Text>2014 - 2018</Text>
                            </div>
                        </InnerContainer>
                        <Seperator/>
                        <InnerContainer>
                            <HR src='https://hrhqdir.s3.amazonaws.com/brand-guide/HackReactor_RGBLogo-White-Blue.png'/>
                            <div style={{alignSelf:'flex-end'}}>
                                <Text>Hack Reactor</Text>
                                <Text>Software Engineering Immersive</Text>
                                <Text>2019 - 2020</Text>
                            </div>
                        </InnerContainer>
                </Container>
            </div>
        )
    }
}



export default Education