import React from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import styled from 'styled-components';
import {Colors, Text, Title} from '../Styles.js';

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
  margin: 20px;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`

const AboutContainer = styled.div`
  width: 40%;
  margin: 20px;
  height: 100%;
  // border-style: solid;
  // border-width: 3px;
  @media (max-width: 990px) {
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
  margin: 5px;
  // border-style: solid;
  // border-width: 3px;
  @media (max-width: 990px) {
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
              <Projects/>
              <div style={Text}>How do i look?vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</div>
              <div style={Title}>Some Title</div>
            </TimelineContainer>
        </Container>
    )
  }
}

export default App;