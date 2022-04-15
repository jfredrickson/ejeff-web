import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
import './ProjectCard.css'

class ProjectCard extends Component {
  render() {
    const projectImageUrl = this.props.project.imageRef || "/assets/images/project-default.png"
    return(
        <Card className="project-card">
          <Card.Img variant="top" src={projectImageUrl}/>
          <Card.Body>
            <Card.Title>{this.props.project.title}</Card.Title>
            <Card.Text>
              {this.props.project.summary}
            </Card.Text>
            <div>
              {this.props.project.tags.map(tag => <Badge variant="light" key={tag}>{tag}</Badge>)}
            </div>
          </Card.Body>
        </Card>
    )
  }
}

export default ProjectCard
