import React, { Component } from 'react'
import classNames from 'classnames'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'

export class SimilarProjectsCard extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0,
    }
  }

  curryHandleArrowClick(newCurrentIndex, callback) {
    return () => {
      this.setState({ currentIndex: newCurrentIndex })
      callback()
    }
  }

  hasProjects() {
    return this.props.projects.length > 0
  }

  isAtEnd() {
    if (!this.hasProjects()) return false

    return this.state.currentIndex == this.props.projects.length - 1
  }

  isAtStart() {
    if (!this.hasProjects()) return false

    return this.state.currentIndex == 0
  }

  currentProject() {
    if (!this.hasProjects()) return

    return this.props.projects[this.state.currentIndex]
  }

  currentProjectProps() {
    const project = this.currentProject()

    if (!project) return

    return {
      imageSrc: project.imageSrc,
      title: project.title,
      paragraph: project.description,
      tags: project.tags,
      infos: project.infos,
    }
  }

  currentStep() {
    if (!this.hasProjects()) return

    return `${this.state.currentIndex + 1 }/${ this.props.projects.length }`
  }

  render() {
    const {
      projects,
      onRefreshClick,
      onLeftArrowClick,
      onRightArrowClick,
      ...others
    } = this.props

    const nextIndex = this.state.currentIndex + 1
    const previousIndex = this.state.currentIndex - 1

    return (
      <ProjectSimilarCard
        { ...this.currentProjectProps() }
        { ...others }
        step={ this.currentStep() }
        onLeftArrowClick={
          this.curryHandleArrowClick(previousIndex, this.props.onLeftArrowClick)
        }
        onRightArrowClick={
          this.curryHandleArrowClick(nextIndex, this.props.onRightArrowClick)
        }
        leftArrowDisabled={ this.isAtStart() }
        rightArrowDisabled={ this.isAtEnd() }
      />
    )
  }
}

SimilarProjectsCard.defaultProps = {
  projects: [], // Check ProjectSimilarCard for project data format.
  coloredInfosValues: false,
  refresh: 'Refresh',
  onRefreshClick: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
}
