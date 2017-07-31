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

  isLastProjectCurrent() {
    if (!this.hasProjects()) return false

    return this.state.currentIndex == this.props.projects.length - 1
  }

  isFirstProjectCurrent() {
    if (!this.hasProjects()) return false

    return this.state.currentIndex == 0
  }

  currentProject() {
    if (!this.hasProjects()) return

    return this.props.projects[this.state.currentIndex]
  }

  currentProjectProps() {
    if (!this.currentProject()) return

    return {
      imageSrc: this.currentProject().imageSrc,
      title: this.currentProject().title,
      paragraph: this.currentProject().description,
      tags: this.currentProject().tags,
      infos: this.currentProject().infos,
    }
  }

  currentStep() {
    if (!this.currentProject()) return ''

    return `${this.state.currentIndex + 1 }/${ this.props.projects.length }`
  }

  render() {
    const {
      projects,
      onRefreshClick,
      onLeftArrowClick,
      onRightArrowClick,
      ...others } = this.props

    const nextIndex = this.state.currentIndex + 1
    const previousIndex = this.state.currentIndex - 1

    return (
      <ProjectSimilarCard
        { ...this.currentProjectProps() }
        step={ this.currentStep() }
        coloredInfosValues={ this.props.coloredInfosValues }
        refresh={ this.props.refresh }
        onRefreshClick={ this.props.onRefreshClick }
        onLeftArrowClick={
          this.curryHandleArrowClick(previousIndex, this.props.onLeftArrowClick)
        }
        onRightArrowClick={
          this.curryHandleArrowClick(nextIndex, this.props.onRightArrowClick)
        }
        leftArrowDisabled={ this.isFirstProjectCurrent() }
        rightArrowDisabled={ this.isLastProjectCurrent() }
      />
    )
  }
}

SimilarProjectsCard.defaultProps = {
  projects: [],
  coloredInfosValues: false,
  refresh: 'Refresh',
  onRefreshClick: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
}
