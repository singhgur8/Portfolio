import React from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles';
import ExperienceItem from './ExperienceItem.jsx';

const Container = styled.div`
    padding-right: 30px;
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
        timeline: 'july 2019 - current',
        description: ['debugged issues on the website', 'created admin user list feature', 'added new consumer products to website.'],
    },
    {
        jobTitle: 'Supply Chain Associate',
        company: 'Pepsico',
        timeline: 'july 2018 - july 2019',
        description: ['Managed 40+, 3 departments. Did quality control, maintenece and operation optimization -- typos.', 'second thing', 'third thing'],
    },
]

    
class Experience extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <Container>
                <Title>Experience</Title>
                {experienceData.map((data,index) => {
                    return(
                        <ExperienceItem
                            data={data}
                            key={index+'exp'}
                        />
                    )
                })}
            </Container>
        )
    }
}



export default Experience