import React from 'react'
import classNames from 'classnames'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { GrabberIcon } from '../../../components/icons/grabber-icon'

// DOM for the Slider component. See Slider for state and
export class SliderBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grabbing: false,
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // Allow other components to focus
  focus() {
    this.refs.thumb.focus()
  }

  handleClick(e) {
    this.props.onAction(e)
    this.setState({ grabbing: false })
    this.handleMove(e)
  }

  handleStart(e) {
    this.props.onAction(e)
    e.stopPropagation()
    e.preventDefault()

    if (domElementHelper.canUseDom()) {
      document.addEventListener('mousemove', this.handleMove)
      document.addEventListener('touchmove', this.handleMove)
      document.addEventListener('mouseup', this.handleEnd)
      document.addEventListener('touchend', this.handleEnd)
    }

    this.setState({ grabbing: true })
  }

  handleEnd() {
    if (domElementHelper.canUseDom()) {
      document.removeEventListener('mousemove', this.handleMove)
      document.removeEventListener('touchmove', this.handleMove)
      document.removeEventListener('mouseup', this.handleEnd)
      document.removeEventListener('touchend', this.handleEnd)
    }

    this.setState({ grabbing: false })
  }

  handleMove(e) {
    e.stopPropagation()
    e.preventDefault()

    const coordinate = e.touches ? e.touches[0].clientX : e.clientX
    const trackPosition = this.refs.track.getBoundingClientRect()
    const ratio = (coordinate - trackPosition.left) / trackPosition.width

    this.props.onMove(ratio)
  }

  renderInput() {
    if (this.props.name)
      return (
        <input
          type="hidden"
          name={this.props.name}
          value={this.props.value || ''}
        />
      )
  }

  render() {
    const percentage = this.props.ratio * 100 + '%'
    const trackStyles = { width: percentage }
    const thumbStyles = { left: percentage }
    const grabbingClass = this.state.grabbing ? 'is-grabbing' : null

    return (
      <div
        className={classNames('k-Slider', grabbingClass)}
        onClick={this.handleClick}
      >
        <div className="k-Slider__ramp" ref="track">
          <div className="k-Slider__progress" style={trackStyles} />
          <div
            className="k-Slider__handle"
            ref="thumb"
            style={thumbStyles}
            role="slider"
            tabIndex="0"
            aria-valuemin={this.props.min}
            aria-valuemax={this.props.max}
            aria-valuenow={this.props.value}
            onKeyDown={this.props.onKeyDown}
            onMouseDown={this.handleStart}
            onTouchStart={this.handleStart}
            onClick={this.handleClick}
            onFocus={this.props.onAction}
          >
            <GrabberIcon
              className="k-Slider__handleIcon"
              width="32"
              height="32"
            />
          </div>
        </div>
        {this.renderInput()}
      </div>
    )
  }
}
