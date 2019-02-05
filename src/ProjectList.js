import React, { Component } from 'react'
import { Columns } from 'react-bulma-components/full'
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
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
      <Columns multiline={true}>
        {this.renderProjects()}
      </Columns>
    )
  }
}

export default ProjectList