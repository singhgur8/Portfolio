import React from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles';
import SkillItem from './SkillItem.jsx';

const Container = styled.div`
    margin: 10px;
    width: 85%;
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


const skills = [
        ['placeholder'],
        ['Javascript', 'React', 'Node.js'],
        ['Javascript', 'React', 'Node.js', 'Expres.js', 'AWS EC2'],
        ['Nginx', 'Python', 'C#' , 'ASP.NET', 'MongoDB', 'Cassandra', 'PostgreSQL'],
        ['Javascript', 'React', 'Node.js', 'Expres.js', 'AWS EC2'],
        ['Javascript', 'React', 'Node.js'],
        ['placeholder']
]

    
class Skills extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Title>Skills</Title>
                <Container>
                    {skills.map((data,index) => {
                        console.log(index, index%2===1)
                        return(
                            <SkillItem
                                data={data}
                                longer={index%2===1}
                            />
                        )   
                    })}
                </Container>
            </div>
        )
    }
}



export default Skills