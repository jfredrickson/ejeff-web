import React, { Component } from 'react'
import { Columns, Card, Content, Heading, Tag } from 'react-bulma-components'
import './ProjectCard.css'

class ProjectCard extends Component {
  render() {
    const projectImageUrl = this.props.project.imageUrl || "/assets/images/project-default.png"
    return(
      <Columns.Column size={4}>
        <Card className="project-card">
          <Card.Image size="16by9" src={projectImageUrl}/>
          <Card.Content>
            <Heading size={4}>{this.props.project.title}</Heading>
            <Content>
              <p>{this.props.project.summary}</p>
              <Tag.Group>
                {this.props.project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </Tag.Group>
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>
    )
  }
}

export default ProjectCard