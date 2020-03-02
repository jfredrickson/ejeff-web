import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Container } from 'react-bulma-components'
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