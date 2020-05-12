import React from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx'
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx'
import styled from 'styled-components';
import {Colors} from '../Styles.js';

const Container = styled.div`
  background: ${Colors.background};
  height: auto;
  padding:0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  left: 0;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`

const AboutContainer = styled.div`
  width: 40%;
  padding: 40px;
  height: 100%;
  @media (max-width: 1150px) {
    width: 80%;
    position: relative;
    margin: auto;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    position: relative;
    margin: auto;
  }
  
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; 
  background-color: ${Colors.Background};
`
const TimelineContainer = styled.div`
  width: 0px;
  margin-top: 40px;
  @media (max-width: 1150px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    position: relative;
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 40px;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
          sectionHighlight: 0,
          mobile: false
      }
    this.positions = []
    this.onScrollHandle = this.onScrollHandle.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.onScrollHandle);
    window.addEventListener('resize', this.handleWindowResize);

    let components = []
    components.push(document.getElementById('experience'), document.getElementById('projects'), document.getElementById('skills'), document.getElementById('contact'))
    let bodyRect = document.body.getBoundingClientRect();
    for (let i = 0; i < components.length; i++){
      this.positions.push(-bodyRect.top + components[i].getBoundingClientRect().top - 40)
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize(){
    let components = []
    components.push(document.getElementById('experience'), document.getElementById('projects'), document.getElementById('skills'), document.getElementById('contact'))
    let bodyRect = document.body.getBoundingClientRect();
    for (let i = 0; i < components.length; i++){
      this.positions[i] = -bodyRect.top + components[i].getBoundingClientRect().top - 40
    }
    this.onScrollHandle()
  }

  onScrollHandle(){
    let bodyRect = document.body.getBoundingClientRect();
    let section = 0;
    let bodyPosY = -bodyRect.top
    if (bodyPosY > this.positions[this.positions.length-2]) bodyPosY += 500 // adjusts for last one
    // being at a spot where the page cant scroll to top of
    for(let i = 0; i < this.positions.length; i++){
      if (bodyPosY >= this.positions[i]) {
        section = i;
      }
    } 

    // does it rerender if the state changes from same to same?
    if (this.state.sectionHighlight !== section){
      this.setState({sectionHighlight: section})
    }

  }
  

  render() {
    return(
        <Container onScroll={this.onScrollHandle}> 
            <AboutContainer>
              <About idx={this.state.sectionHighlight}/>
            </AboutContainer>
            <TimelineContainer onScroll={this.onScrollHandle}>
              <Experience/>
              <Projects/>
              <Skills/>
              <Education/>
              <Contact/>
            </TimelineContainer>
        </Container>
    )
  }
}

export default App;