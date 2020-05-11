import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors, Text} from '../Styles'

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
                        <div style={{...Text, color:'white'}}>Phone: (510) 672-8042</div>
                        <div style={{...Text, color:'white'}}>Email: gurjotssingh510@gmail.com</div>
                        <a style={{...Text, color:'white'}} href="https://www.linkedin.com/in/singhgur8/" target="_blank">https://www.linkedin.com/in/singhgur8/</a>
                    </div>
                </Container>
            </div>
        )
    }
}



export default Contact