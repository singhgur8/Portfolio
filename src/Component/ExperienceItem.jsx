import React from 'react';
import styled, {css} from 'styled-components';
import {Colors} from '../Styles';

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
`
const Text = styled.div`
    padding-left: 30px;
    color: white;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
`
const Bullet = styled.li`
    color: #949495;
    'fontSize': '14px',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    display: 'block',
    'marginBlockStart': '1em',
    'marginBlockEnd': '1em',
    'marginInlineStart': '0px',
    'marginInlineEnd': '0px',
    'lineHeight': '1.5em'
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
`

// I could make this take in an animation if its the last one, then i conditional render it
// so that the ending is fading off...kinda how aston did it
const Line = styled.div`
    width: 10px;
    height: 100%;
    background-color: #949495;
    margin: 2px;
    position: relative;

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
    
class ExperienceItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {jobTitle, company, timeline, description} = this.props.data
        const {last} = this.props
        return (
            <Container>
                <Timeline>{timeline}</Timeline>
                <LineContainer>
                    <Ball/>
                    {last ? <Line animate/> : <Line/>}
                </LineContainer>
                <Details>
                    <Title>{jobTitle}</Title>
                    <Text>{company}</Text>
                    <ul>
                        {description.map((item, idx) => {
                            return(
                                <ExperienceBulletPoints
                                    item={item}
                                    key={'list'+idx}
                                />
                            )
                        })}
                    </ul>
                </Details>
            </Container>
        )
    }
}



export default ExperienceItem