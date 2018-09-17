import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'
import domElementHelper from 'kitten/helpers/dom/element-helper'

const Marger = Radium(MargerBase)

class SimpleCarouselBase extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      numPageActive: 0,
      numPages: this.props.items.length,
      containerHeight: 0,
    }

    this.elements = []
  }

  showPagination = () => this.state.numPages > 0

  updateContainerHeight = () => {
    let maxElementHeight = 0

    this.elements.forEach(element => {
      const elementHeight = domElementHelper.getComputedHeight(element)

      if (elementHeight > maxElementHeight) {
        maxElementHeight = elementHeight
      }
    })

    this.setState({ containerHeight: maxElementHeight })
  }

  componentDidMount() {
    this.updateContainerHeight()
  }

  handlePageClick = numPage => {
    this.setState({ numPageActive: numPage })
  }

  render() {
    const { items } = this.props
    const { numPages, numPageActive, containerHeight } = this.state
    const rangePage = createRangeFromZeroTo(numPages)

    return (
      <Fragment>
        <Marger
          bottom={this.showPagination() ? 4 : 0}
          style={{ ...styles.container, height: containerHeight }}
        >
          {items.map((item, index) => {
            const itemStyle = [
              styles.item,
              index !== numPageActive && styles.item.hide,
            ]

            return (
              <div
                ref={node => {
                  this.elements[index] = node
                }}
                style={itemStyle}
              >
                {item}
              </div>
            )
          })}
        </Marger>

        {this.showPagination() && (
          <Marger top="4" bottom="4" style={styles.pagination}>
            {rangePage.map(numPage => {
              const pageStyle = [
                styles.page,
                numPage === numPageActive && styles.page.active,
              ]

              return (
                <div
                  key={numPage}
                  style={pageStyle}
                  onClick={() => {
                    this.handlePageClick(numPage)
                  }}
                />
              )
            })}
          </Marger>
        )}
      </Fragment>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
  },

  item: {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'visible',
    opacity: 1,
    transition: `all .8s ease-in-out`,

    hide: {
      visibility: 'hidden',
      opacity: 0,
      pointerEvents: 'none',
    },
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },

  page: {
    width: 6,
    height: 6,
    background: COLORS.background1,
    marginRight: 5,
    cursor: 'pointer',

    active: {
      transition: `background .4s ease-in-out`,
      background: COLORS.primary1,
    },
  },
}

export const SimpleCarousel = Radium(SimpleCarouselBase)
