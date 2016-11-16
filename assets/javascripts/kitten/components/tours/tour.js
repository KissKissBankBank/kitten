import React from 'react'
import classNames from 'classnames'
import domElementHelper from 'kitten/helpers/dom/element-helper'
import TourStep from 'kitten/components/tours/tour-step'

class Tour extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      play: false,
      visible: false,
      currentIndex: 0,
      currentStep: this.props.steps[0],
    }

    this.handleClickOnNext = this.handleClickOnNext.bind(this)
    this.handleClickOnPrev = this.handleClickOnPrev.bind(this)
    this.handleClickOnClose = this.handleClickOnClose.bind(this)
    this.handleTargetHighlightPlace = this.handleTargetHighlightPlace.bind(this)
  }

  // Component lifecycle.

  componentDidMount() {
    if (this.shouldStart()) {
      this.start()
    }
  }

  // Component listener callbacks.

  handleTargetHighlightPlace(step) {
    this.setState({ visible: true })
  }

  handleClickOnNext() {
    const newIndex = this.state.currentIndex + 1

    this.toggleStep(newIndex)

    window.dispatchEvent(new Event('k:tour:next'))
  }

  handleClickOnPrev() {
    const newIndex = this.state.currentIndex - 1

    this.toggleStep(newIndex)

    window.dispatchEvent(new Event('k:tour:prev'))
  }

  handleClickOnClose() {
    this.stop()

    window.dispatchEvent(new Event('k:tour:close'))
  }

  // Component methods.

  start() {
    this.setState({
      play: true
    })

    const tourState = JSON.stringify({ hasPlayed: true })

    if (this.props.useStore) {
      localStorage.setItem(this.props.storeName, tourState)
    }
  }

  stop() {
    this.setState({ play: false })
  }

  toggleStep(newIndex) {
    this.setState({
      currentIndex: newIndex,
      currentStep: this.props.steps[newIndex]
    })
  }

  getProgress() {
    const currentStep = this.state.currentIndex + 1
    const totalSteps = this.props.steps.length

    return `${currentStep} ${this.props.pagingLabel} ${totalSteps}`
  }

  isNextButtonActive() {
    const currentStep = this.state.currentIndex + 1

    return currentStep != this.props.steps.length
  }

  isPrevButtonActive() {
    return this.state.currentIndex != 0
  }

  shouldStart() {
    if (!domElementHelper.canUseDom()) {
      return false
    }

    // TODO: better implementation of localStorage as state store for React
    // component.
    const tourState = JSON.parse(localStorage.getItem(this.props.storeName))

    return !(tourState && tourState.hasPlayed)
  }

  getButtonsList() {
    return {
      next: {
        active: this.isNextButtonActive(),
        label: this.props.nextButtonLabel,
        title: this.props.nextButtonTitle,
      },
      prev: {
        active: this.isPrevButtonActive(),
        label: this.props.prevButtonLabel,
        title: this.props.prevButtonTitle,
      },
      close: {
        active: true,
        label: this.props.closeButtonLabel,
      }
    }
  }

  renderTourStep() {
    if (!this.state.play) return

    return(
      <TourStep onNextClick={ this.handleClickOnNext }
                onPrevClick={ this.handleClickOnPrev }
                onCloseClick={ this.handleClickOnClose }
                name={ this.state.currentStep.name }
                title={ this.state.currentStep.title }
                content={ this.state.currentStep.content }
                targetElement={ this.state.currentStep.targetElement }
                illustration={ this.state.currentStep.illustration }
                buttons={ this.getButtonsList() }
                onTargetHighlightPlace={ this.handleTargetHighlightPlace }
                progress={ this.getProgress() } />
    )
  }

  render() {
    const tourClassName = classNames(
      'k-Tour',
      { 'is-hidden': !this.state.visible },
      this.props.className
    )

    return(
      <div className={ tourClassName }>
        { this.renderTourStep() }
      </div>
    )
  }
}

Tour.defaultProps = {
  nextButtonLabel: 'Next',
  nextButtonTitle: 'Next',
  prevButtonLabel: 'Prev',
  prevButtonTitle: 'Previous',
  closeButtonLabel: 'Close',
  pagingLabel: 'on',
  storeName: 'kitten.Tour',
  useStore: true,
}

export default Tour
