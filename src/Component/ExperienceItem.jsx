import React from 'react';
import styled, {css} from 'styled-components';
import {Mobile} from '../Styles.js';

const Container = styled.div`
    display: flex;
    flex-grow: 6;
    padding-right: 30px;
    padding-left: 30px;
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 30px;

    @media (max-width: 600px) {
        font-size: 50px;
    }
`
const Text = styled.div`
    padding-left: 30px;
    color: white;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;

    @media (max-width: 600px) {
        font-size: 40px;
    }
`
const Bullet = styled.li`
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

class ExperienceBulletPoints extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {item} = this.props
        return (
            <Bullet>{item}</Bullet>
        )
    }
}

const Timeline = styled.div`
    font-size: 18px;
    width: 158px;
    color: #949495;
    text-align: end;

    ${props=> props.mobile && css `
        display: none;
        border-bottom: solid;
        border-color: white;
        width: 100%;
        padding-left: 30px;
        font-size: 30px;
        text-align: start;
        @media (max-width: 600px) {
            display: block;
        }
    `}

    ${props=> props.web && css `
        @media (max-width: 600px) {
            display: none;
        }
    `}
`

// I could make this take in an animation if its the last one, then i conditional render it
// so that the ending is fading off...kinda how aston did it
const Line = styled.div`
    width: 10px;
    height: 100%;
    background-color: #949495;
    margin: 2px;
    position: relative;
    @media (max-width: 600px) {
        display: none;
      }

    ${props=> props.animate && css `
        background-image: linear-gradient(to bottom, 
            rgba(0, 0, 0, 0), 
            rgba(5, 5, 5, 0.9)
        100%);
    `}
`

const Details = styled.div`
    width: 100%;
`


const ballSize = 45;

const Ball = styled.div`
height: ${ballSize+14}px;
width: ${ballSize}px;
background-color: #949495;
border-radius: ${ballSize/2}px;

@media (max-width: 600px) {
    display: none;
  }
`

const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    position: relative;
    top: -12px;
`

const Description = styled.ul`
    color: #949495;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.5em;
    filter: grayscale(100%);
`
    
class ExperienceItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {jobTitle, company, timeline, description} = this.props.data
        const {last} = this.props
        return (
            <Container>
                <Timeline web>{timeline}</Timeline>
                <LineContainer>
                    <Ball/>
                    {last ? <Line animate/> : <Line/>}
                </LineContainer>
                <Details>
                    <Title>{jobTitle}</Title>
                    <Text>{company}</Text>
                    <Timeline mobile>{timeline}</Timeline>
                    <Description>
                        {description.map((item, idx) => {
                            return(
                                <ExperienceBulletPoints
                                    item={item}
                                    key={'list'+idx}
                                />
                            )
                        })}
                    </Description>
                </Details>
            </Container>
        )
    }
}



export default ExperienceItem