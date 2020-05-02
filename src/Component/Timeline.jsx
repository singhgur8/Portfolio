import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles'
import Projects from './Projects.jsx'

const Name = styled.div`
    color: ${Colors.title};
    font-size: 48px;
`

// THIS IS THE COMPONENT THAT GOES INSIDE OF THE ABOUT SECTION
    
class Timeline extends React.Component{
    constructor(){
        super()
    }

    handleClick(){
        alert('hi')
    }

    render(){
        return (
            <div>
                <Projects/>
                <div>
                    {/* clicking on each should scroll the page a certain amount
                    and  i shoukd be able to scroll even if mouse in on the left half */}

                    01 --- Work
                    02 --- Projects
                    03 --- Skills
                    05 --- Education
                    04 --- Contact
                </div>
                <div>
                    Photo
                    Github logo
                    Linkedin logo
                    Resume Download
                </div>
            </div>
        )
    }
}



export default Timeline