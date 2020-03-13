import React, { Component } from 'react'
import { Router } from '@reach/router'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Container } from 'react-bulma-components'
import './App.css'
import Navigation from './Navigation'
import Home from './Home'
import ProjectList from './ProjectList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container breakpoint="fullhd">
          <Navigation/>
          <Router>
            <Home path="/"/>
            <ProjectList path="projects"/>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App