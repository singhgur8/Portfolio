import React from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx'
import styled from 'styled-components';
import {Colors} from '../Styles.js';

const Container = styled.div`
  background: ${Colors.background};
  height: auto;
  padding:0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  // border-style: solid;
  // border-width: 5px;
  left: 0;
  // padding: 20px;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`

const AboutContainer = styled.div`
  width: 40%;
  padding: 40px;
  height: 100%;
  // border-style: solid;
  // border-width: 3px;
  @media (max-width: 1150px) {
    width: 100%;
    position: relative;
  }
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; /* <-- this is the fix */
  background-color: ${Colors.Background};  /* Not necessary -- for example only */
`
const TimelineContainer = styled.div`
  width: 0px;
  margin-top: 40px;
  // border-style: solid;
  // border-width: 3px;
  @media (max-width: 1150px) {
    width: 80%;
  }
  flex-grow: 1;
`


class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
      }
    
  }

  componentDidMount() {
   
    }
  

  render() {
    return(
        <Container> 
            <AboutContainer>
              <About/>
            </AboutContainer>
            <TimelineContainer>
              <Experience/>
              <Projects/>
            </TimelineContainer>
        </Container>
    )
  }
}

export default App;