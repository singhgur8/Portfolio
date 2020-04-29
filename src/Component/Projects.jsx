import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles'

const Name = styled.div`
    color: ${Colors.title};
    font-size: 48px;
    
`

    
class Projects extends React.Component{
    constructor(){
        super()
    }

    handleClick(){
        alert('hi')
    }

    render(){
        return (
            <div>
                <Name>
                    Hello, I'm Gurjot Singh.
                </Name>
                <p>
                    I am full-stack software engineer who likes keeping up to date with the latest technologies.
                    Lately I have been using React, Node, Python, GraphQL, and MongoDB to build my applications however
                    I have used various other tech stacks. You can find the full list in the skills section.
                </p>
                <p>
                    When I am not building apps, I might be snowboarding, filmmaking, playing volleyball or watching netlfix.
                </p>
                <p>
                    I would love to hear from you so feel free to <u onClick={this.handleClick}>contact</u> me!
                </p>
                <div>
                    ph: (510)672-8042
                </div>
                <div>
                    email: gurjotssingh510@gmail.com
                </div>
                <div>
                    Timeline:
                </div>
                <div>
                    {/* clicking on each should scroll the page a certain amount
                    and  i shoukd be able to scroll even if mouse in on the left half */}
                    01 --- Work
                    02 --- Projects
                    03 --- Skills
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



export default Projects