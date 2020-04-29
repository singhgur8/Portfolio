import React, { Component } from 'react';
import styled from 'styled-components';
import {Colors} from '../Styles'

const Container = styled.div`
    width: 80%,
    justify-content: center;
    align-items: center;
    background: ${Colors.innerBackground};
    // need to align text as well
`

// this should take in props with following data
// Tech Stack
// App Description
// photo of the item
// want to add abstraction black and white layer here on photo?..maybe later keep color for now. then on hover it changes
    
class ProjectItem extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div>

            </div>
        )
    }
}



export default ProjectItem