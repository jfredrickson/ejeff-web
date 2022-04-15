import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Container className="main">
          <Outlet/>
        </Container>
      </div>
    );
  }
}

export default Layout
