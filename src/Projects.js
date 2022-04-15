import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      projectsLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(json => {
        this.setState({ projects: json, projectsLoaded: true })
      })
  }

  renderProjects() {
    const projects = this.state.projects.slice()
    const projectListItems = []
    projects.forEach(project => {
      projectListItems.push(<Col><ProjectCard key={project._id} project={project}/></Col>)
    });
    return projectListItems
  }

  render() {
    return(
      <>

        <h1>Projects</h1>

        <Row xs={1} md={2} lg={3}>
          {this.renderProjects()}
        </Row>

      </>
    )
  }
}

export default Projects
