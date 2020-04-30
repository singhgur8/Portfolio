import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles'
import ProjectItem from './ProjectItem.jsx';

const Container = styled.div`
    // padding-top: 35px;
`

const projectsData = [
    {  
        title: 'Home Reservation Application',
        img: 'url()',
        description: 'Created a containerized microserive which was deployed to Ec2. Main features include a dynamic photo gallery along with a photo carousel.',
        techStack: ['React', 'Docker', 'AWS EC2', 'Node.js', 'CSS Modules', 'Webpack', 'Microservice', 'MongoDB']
    },
    {
        title: 'System Design',
        img: 'url()',
        description: 'Created CRUD operations for Cassandra database. Deployed database to EC2 and load balanced it using Nginx proxy. This system was able to handle 1200 RPS which was achieved by horizontally scaling the database and Express Node.js servers. Performance was optimized by reviewing system metrics on the New Relic dashboard.',
        techStack: ['Nginx', 'Cassandra', 'AWS', 'New Relic', 'PostgreSQL']
    },
    {
        title: 'Mobile Application',
        img: 'url()',
        description: 'Created a mobile applciaiton using react native. Content on this application was served up using AWS Lambda serverless. Included D3 Piechart which was animated using React',
        techStack: ['React Native', 'GraphQL', 'D3', 'AWS Lambda']
    },
]

    
class Projects extends React.Component{
    constructor(){
        super()
    }

    handleClick(){
        alert('hi')
    }


    render(){
        return (
            <Container>
                {projectsData.map((data, idx) => {
                    return(
                        <ProjectItem
                            data={data}
                            index={idx}
                        />
                    )
                })}
            </Container>
        )
    }
}



export default Projects