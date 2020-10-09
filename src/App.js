import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Login from './Login'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <Container className="main">
            <Router>
              <Home path="/"/>
              <Projects path="projects"/>
              <Contact path="contact"/>
              <Login path="login"/>
              <Profile path="profile"/>
            </Router>
          </Container>
      </div>
    );
  }
}

export default App
