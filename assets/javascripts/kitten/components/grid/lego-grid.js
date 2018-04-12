import React, { Component } from 'react'
import classNames from 'classnames'
import Masonry from 'react-masonry-component'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { NUM_COLUMNS } from 'kitten/constants/grid-config'
import Radium from 'radium'

class LegoGridBase extends Component {
  static defaultProps = {
    className: null,
    masonryProps: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  handleLayoutComplete = () => {
    if (!this.state.show) {
      this.setState({ show: true })
    }
  }

  componentDidMount() {
    if (this.masonry) {
      this.masonry.on('layoutComplete', this.handleLayoutComplete)
    }
  }

  componentWillUnmount() {
    if (this.masonry) {
      this.masonry.off('layoutComplete', this.handleLayoutComplete)
    }
  }

  render() {
    const { className, masonryProps, children, ...others } = this.props
    const classByMediaQuery = () => {
      const classNamesByMediaQuery = Object.keys(ScreenConfig).map(size => {
        const mediaQuery = size.toLowerCase()
        const items = this.props[`items-${mediaQuery}-up`]

        return classNames(classNamesByMediaQuery, {
          [`k-LegoGrid--${NUM_COLUMNS / items}col@${mediaQuery}`]: items,
        })
      })

      return classNamesByMediaQuery
    }

    const gridClassName = classNames(
      'k-LegoGrid',
      classByMediaQuery(),
      className,
    )
    const masonryStyle = [
      styles.masonry,
      !this.state.show && styles.masonry.hidden,
      others.style,
    ]

    return (
      <div className={gridClassName} {...others} style={masonryStyle}>
        <Masonry
          ref={c => {
            this.masonry = this.masonry || c.masonry
          }}
          {...masonryProps}
        >
          {children}
        </Masonry>
      </div>
    )
  }
}

export const LegoGrid = Radium(LegoGridBase)

LegoGrid.Item = ({ children, ...props }) => {
  const itemClassName = classNames('k-LegoGrid__item', props.className)

  return (
    <div {...props} className={itemClassName}>
      <div className="k-LegoGrid__item__content">{children}</div>
    </div>
  )
}

LegoGrid.Item.defaultProps = {
  className: null,
}

const styles = {
  masonry: {
    opacity: 1,
    visibility: 'visible',
    transition: 'opacity .5s, visibility .5s',

    hidden: {
      visibility: 'hidden',
      opacity: 0,
    },
  },
}
