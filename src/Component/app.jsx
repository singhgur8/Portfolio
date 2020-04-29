import React from 'react';
import About from './About.jsx'
import styled from 'styled-components'
import {Colors, Text, Title} from '../Styles.js'

const Container = styled.div`
  background: ${Colors.background};
  height: auto;
  padding:10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  border-style: solid;
  border-width: 5px;
  left: 0;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`

const AboutContainer = styled.div`
  padding: 20px;
  width: 50%;
  margin: 5px;
  height: 100%;
  border-style: solid;
  border-width: 3px;
  @media (max-width: 990px) {
    width: 100%;
  }
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; /* <-- this is the fix */
  background-color: ${Colors.innerBackground};  /* Not necessary -- for example only */
`
const TimelineContainer = styled.div`
  width: 50%
  margin: 5px;
  border-style: solid;
  border-width: 3px;
  @media (max-width: 990px) {
    width: 100%;
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
              <div style={Text}>How do i look?</div>
              <div style={Title}>Some Title</div>
            </TimelineContainer>
        </Container>
    )
  }
}

export default App;