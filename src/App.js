import React, { Component } from 'react'
import { Container } from 'react-bulma-components/full'
import './App.css'
import ProjectList from './ProjectList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container breakpoint="fullhd">
          <ProjectList/>
        </Container>
      </div>
    );
  }
}

export default App