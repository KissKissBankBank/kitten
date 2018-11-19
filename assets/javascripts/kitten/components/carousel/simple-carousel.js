import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'

const Marger = Radium(MargerBase)

class SimpleCarouselBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPageNumber: 0,
      totalPagesCount: React.Children.toArray(props.children).length,
    }
  }

  showPagination = () => this.state.totalPagesCount > 1

  handlePageClick = numPage => () => {
    this.setState({ currentPageNumber: numPage })
  }

  render() {
    const { children } = this.props
    const { totalPagesCount, currentPageNumber } = this.state
    const rangePage = createRangeFromZeroTo(totalPagesCount)

    return (
      <Fragment>
        <Marger bottom={this.showPagination() ? 4 : 0} style={styles.container}>
          {React.Children.map(children, (item, index) => {
            const itemStyle = [
              styles.item,
              index !== currentPageNumber && styles.item.hide,
            ]

            return (
              <div key={item.key} style={itemStyle}>
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
                numPage === currentPageNumber && styles.page.active,
              ]

              return (
                <div
                  key={numPage}
                  style={pageStyle}
                  onClick={this.handlePageClick(numPage)}
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
    display: 'grid',
    gap: 0,
  },

  item: {
    gridColumn: 1,
    gridRow: 1,
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
