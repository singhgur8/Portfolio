import React from 'react';
import styled, {css} from 'styled-components';
import {Colors, Mobile} from '../Styles';

const SkillContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 5px;   
    border-style: solid;
    border-width: 1px;
    border-color: white;
    border-radius: 40px;
    position: relative;
    z-index: 1;
    min-width: 70px;
    background-color: ${Colors.innerBackground};

    &:hover {
        z-index:999;
        transform: scale(1.2);

    }
`

const Title = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    justify-text: center;
    align-text: center;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 25px;
    }
`


class Skill extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <SkillContainer>
                <Title>
                    {this.props.name}
                </Title>
            </SkillContainer>
        )
    }
}



const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

class SkillItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {data} = this.props
        return(
                <Container longer>
                    {data.map((item, idx) => {
                        return(
                            <Skill
                                name={item}
                                key={'skillItem' + idx}
                            />
                        )
                    })}
                </Container>
        )
    }
}



export default SkillItem