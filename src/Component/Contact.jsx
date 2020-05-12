import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Mobile} from '../Styles'

const Container = styled.div`
    width: 83%;
    text-align: center;
    box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;
    background-color: white;
    border-radius: 5px;
    margin: auto;
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 20px;
    padding-top: 30px;
    margin-bottom: -5px;

    @media (max-width: 600px) {
        font-size: ${Mobile.titleFontSize}px;
        margin-bottom: -30px;
    }
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

const Link = styled.a`
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

    
class Contact extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div id='contact'>
                <Title>Contact Information</Title>
                <Container>
                    <div style={{backgroundColor: Colors.innerBackground, width:'100%', margin: 'auto', borderRadius:'3px'}}>
                        <Text>Phone: (510) 672-8042</Text>
                        <Text>Email: gurjotssingh510@gmail.com</Text>
                        <Link href="https://www.linkedin.com/in/singhgur8/" target="_blank">https://www.linkedin.com/in/singhgur8/</Link>
                    </div>
                </Container>
            </div>
        )
    }
}



export default Contact