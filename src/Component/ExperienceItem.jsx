import React from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles';

const Container = styled.div`
    padding-right: 30px;
    display: flex;
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 30px;
`

class ExperienceBulletPoints extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {item} = this.props
        return (
            <li>{item}</li>
        )
    }
}

const Timeline = styled.div`
    width: 140px;
    color: white;
    text-align: end;
`

const Line = styled.div`
    width: 1px;
    height: inherit;
    background-color: white;
    margin: 2px;
    position: relative;
`
const Details = styled.div`
    width: 320px;
`
    
class ExperienceItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {jobTitle, company, timeline, description} = this.props.data
        return (
            <Container>
                <Timeline>{timeline}</Timeline>
                <Line/>
                <Details>
                    <div>{jobTitle}</div>
                    <div>{company}</div>
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