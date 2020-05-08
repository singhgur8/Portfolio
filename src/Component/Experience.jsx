import React from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles';
import ExperienceItem from './ExperienceItem.jsx';

const Container = styled.div`
    padding-right: 30px;
    margin: 10px;
    width: 90%;
    filter: grayscale(100%);
    margin: auto;
    // background-color: ${Colors.innerBackground}
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 30px;
`


const experienceData = [
    {  
        jobTitle: 'Full Stack Engineer',
        company: 'ConfigFab Inc.',
        timeline: 'July 2019 - Current',
        description: [
            'Developed front-end website email list report feature for admin users using C# in ASP.NET MVC.',
            'Seeded SQL database and created MVC components for new ecommerce products', 
            'Updated authentication forms to include more data points. Reflected changes in the backend and database.',
            'Coded python scripts to create adaptable 3D models based on user input.',
            'Used Inventor to create engineering specification drawings for manufacturable 3D parts.'
        ],
    },
    {
        jobTitle: 'Supply Chain Associate',
        company: 'Pepsico',
        timeline: 'July 2018 - July 2019',
        description: [
            'Managed quality, production and maintenance departments on a daily basis ensuring average production output was 70% or more while creating a safe and quality product.',
            'Decreased minor stops downtime by 20% implementing solutions using Lean Six Sigma and TPM.', 
            'Decreased worker injury by designing and implementing an improved engineering design on the assembly line allowing easy disposal of hot liquid without direct contact.',
        ],
    },
]

    
class Experience extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div id='experience'>
                <Title>Experience</Title>
                <Container>
                    {experienceData.map((data,index) => {
                        return(
                            <ExperienceItem
                                data={data}
                                key={index+'exp'}
                                last = {experienceData.length-1 === index}
                            />
                        )
                    })}
                </Container>
            </div>
        )
    }
}



export default Experience