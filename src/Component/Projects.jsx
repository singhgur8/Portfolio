import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles'
import ProjectItem from './ProjectItem.jsx';

const Container = styled.div`
    padding-right: 30px;
    padding-left: 10px;
    margin-bottom: 30px;
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 20px;
`

const projectsData = [
    {  
        title: 'Home Reservation Application',
        img: 'url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/HomeReservationApp.png)',
        description: 'Created a containerized microserive which was deployed to Ec2. Main features include a dynamic photo gallery along with a photo carousel.',
        techStack: 'React, Docker, AWS EC2, Node.js, CSS Modules, Webpack, Microservice, MongoDB',
        imgWidth: 250,
        videoUrl: 'https://www.youtube.com/watch?v=ltTGxX7qFrs&feature=youtu.be',
        githubUrl: 'https://github.com/singhgur8/airbnb-photogallery'
    },
    {
        title: 'System Design',
        img: 'url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/DashboardSysDesign.png)',
        description: 'Created CRUD operations for Cassandra database. Deployed database to EC2 and load balanced using Nginx proxy. This system handled 1200 RPS which was achieved by horizontally scaling the database and Node.js servers. Performance was optimized by finding bottlenecks using the New Relic dashboard.',
        techStack: 'Nginx, Cassandra, AWS, New Relic, PostgreSQL',
        imgWidth: 250,
        videoUrl: null,
        githubUrl: 'https://github.com/singhgur8/popularFoods'
    },
    {
        title: 'Mobile Application',
        img: 'url(https://gurjotportfolio.s3-us-west-1.amazonaws.com/GroakNative.PNG)',
        description: 'Created a mobile applciaiton using react native. Content on this application was served up using AWS Lambda serverless. Included D3 Piechart which was animated using React',
        techStack: 'React Native, GraphQL, D3, AWS Lambda',
        imgWidth: 470,
        videoUrl: null,
        githubUrl: 'https://github.com/singhgur8/groakMobile'
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
            <Container id='projects'>
                <Title>Projects</Title>
                    {projectsData.map((data, idx) => { 
                        return(
                            <ProjectItem
                                data={data}
                                index={idx}
                                key={'project'+idx}
                            />
                        )
                    })}
            </Container>
        )
    }
}



export default Projects