import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Marger as MargerBase } from '../../components/layout/marger'
import COLORS from '../../constants/colors-config'
import { createRangeFromZeroTo } from '../../helpers/utils/range'

const Marger = Radium(MargerBase)

class SimpleCarouselBase extends Component {
  static propTypes = {
    activePaginationColor: PropTypes.string,
    paginationColor: PropTypes.string,
    paginationAlign: PropTypes.string,
  }

  static defaultProps = {
    activePaginationColor: COLORS.primary1,
    paginationColor: COLORS.background1,
    paginationAlign: 'center',
  }

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
    const {
      children,
      activePaginationColor,
      paginationColor,
      paginationAlign,
    } = this.props

    const { totalPagesCount, currentPageNumber } = this.state
    const rangePage = createRangeFromZeroTo(totalPagesCount)
    const paginationStyle = [
      styles.pagination,
      paginationAlign && { justifyContent: paginationAlign },
    ]

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
          <Marger top="4" bottom="4" style={paginationStyle}>
            {rangePage.map(numPage => {
              const pageStyle = [
                styles.page,
                paginationColor && { background: paginationColor },
                numPage === currentPageNumber && {
                  background: activePaginationColor,
                },
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
    marginRight: 5,
    cursor: 'pointer',
    transition: `background .4s ease-in-out`,
  },
}

export const SimpleCarousel = Radium(SimpleCarouselBase)
