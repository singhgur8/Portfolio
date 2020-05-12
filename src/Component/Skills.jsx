import React from 'react';
import styled from 'styled-components';
import {Colors, Mobile} from '../Styles';
import SkillItem from './SkillItem.jsx';

const Container = styled.div`
    margin: 10px;
    width: 90%;
    display: flex;
    margin: auto;
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 30px;

    @media (max-width: 600px) {
        font-size: ${Mobile.titleFontSize}px;
    }
`


const skills = [
        ['ASP.NET'],
        ['Javascript', 'React', 'Node.js'],
        ['HTTP', 'MySQL', 'AWS Lambda', 'Express.js', 'AWS EC2'],
        ['Nginx', 'Python', 'C#' , 'React Native', 'MongoDB', 'Cassandra', 'PostgreSQL'],
        ['Mocha/Jest', 'Docker', 'D3.js', 'GraphQL', 'Webpack'],
        ['CSS', 'Git', 'Rest API'],
        ['HTML']
]

    
class Skills extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div id='skills'>
                <Title>Skills</Title>
                <Container>
                    {skills.map((data,index) => {
                        return(
                            <SkillItem
                                data={data}
                                longer={index%2===1}
                                key={index+'skillSection'}
                            />
                        )   
                    })}
                </Container>
            </div>
        )
    }
}



export default Skills