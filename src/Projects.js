import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
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
      projectListItems.push(<ProjectCard key={project._id} project={project}/>)
    });
    return projectListItems
  }

  render() {
    return(
      <>

        <h1>Projects</h1>

        <CardColumns>
          {this.renderProjects()}
        </CardColumns>

      </>
    )
  }
}

export default Projects
