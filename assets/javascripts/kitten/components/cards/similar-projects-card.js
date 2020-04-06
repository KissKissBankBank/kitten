import React, { Component } from 'react'
import { SimilarProjectCard } from '../../components/cards/project-similar-card'

export class SimilarProjectsCard extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.projects != nextProps.projects) {
      this.setState({ currentIndex: 0 })
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

    const { description, ...otherProjectProps } = project

    return {
      ...otherProjectProps,
      paragraph: description,
    }
  }

  currentStep() {
    if (!this.hasProjects()) return

    return `${this.state.currentIndex + 1}/${this.props.projects.length}`
  }

  render() {
    const {
      projects,
      onLeftArrowClick,
      onRightArrowClick,
      ...others
    } = this.props

    const nextIndex = this.state.currentIndex + 1
    const previousIndex = this.state.currentIndex - 1

    return (
      <SimilarProjectCard
        {...others}
        {...this.currentProjectProps()}
        step={this.currentStep()}
        onLeftArrowClick={this.curryHandleArrowClick(
          previousIndex,
          this.props.onLeftArrowClick,
        )}
        onRightArrowClick={this.curryHandleArrowClick(
          nextIndex,
          this.props.onRightArrowClick,
        )}
        leftArrowDisabled={this.isAtStart()}
        rightArrowDisabled={this.isAtEnd()}
      />
    )
  }
}

SimilarProjectsCard.defaultProps = {
  projects: [], // Check ProjectSimilarCard for project data format.
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
}
