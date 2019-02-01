import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../constants/colors-config'
import { createRangeFromZeroTo } from '../../helpers/utils/range'
import { pxToRem } from '../../helpers/utils/typography'

const StyledContainer = styled.div`
  ${({ addBottomMargin }) =>
    addBottomMargin &&
    css`
      margin-bottom: ${pxToRem(40)};
    `}
  display: -ms-grid;
  display: grid;
  grid-gap: 0;
  gap: 0;

  > div {
    grid-column: 1;
    grid-row: 1;
    visibility: visible;
    opacity: 1;
    transition: all 0.8s ease-in-out;

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
  }
`
const StyledPagination = styled.ul`
  justify-content: ${({ paginationAlign }) => paginationAlign};
  margin: ${pxToRem(40)} 0;
  padding: 0;
  display: flex;
  li {
    list-style-type: none;
    line-height: ${pxToRem(6)};
  }
`

const StyledPaginationButton = styled.button`
  margin-right: ${pxToRem(5)};
  width: ${pxToRem(6)};
  height: ${pxToRem(6)};
  border: 0;
  padding: 0;
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  background: ${({ paginationColor }) => paginationColor};
  vertical-align: top;

  &[aria-selected='true'] {
    background: ${({ activePaginationColor }) => activePaginationColor};
  }
`

export class SimpleCarousel extends Component {
  static propTypes = {
    id: PropTypes.string,
    containerStyle: PropTypes.object,
    activePaginationColor: PropTypes.string,
    paginationColor: PropTypes.string,
    paginationAlign: PropTypes.oneOf([
      'start',
      'center',
      'space-between',
      'space-around',
    ]),
    paginationStyle: PropTypes.object,
    bulletStyle: PropTypes.object,
  }

  static defaultProps = {
    id: '',
    containerStyle: {},
    activePaginationColor: COLORS.primary1,
    paginationColor: COLORS.background1,
    paginationAlign: 'center',
    paginationStyle: {},
    bulletStyle: {},
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
      containerStyle,
      activePaginationColor,
      paginationColor,
      paginationAlign,
      paginationStyle,
      bulletStyle,
    } = this.props

    const { totalPagesCount, currentPageNumber } = this.state
    const rangePage = createRangeFromZeroTo(totalPagesCount)
    const id = this.props.id ? this.props.id + '_' : ''

    return (
      <Fragment>
        <StyledContainer
          style={containerStyle}
          addBottomMargin={this.showPagination()}
        >
          {React.Children.map(children, (item, index) => {
            return (
              <div
                key={item.key}
                aria-hidden={index !== currentPageNumber}
                id={`${id}carouselItem_${index}`}
                aria-labelledby={`${id}carouselTab_${index}`}
                role="tabpanel"
              >
                {item}
              </div>
            )
          })}
        </StyledContainer>

        {this.showPagination() && (
          <StyledPagination
            style={paginationStyle}
            paginationAlign={paginationAlign}
            role="tablist"
          >
            {rangePage.map(numPage => {
              return (
                <li key={numPage}>
                  <StyledPaginationButton
                    id={`${id}carouselTab_${numPage}`}
                    type="button"
                    aria-controls={`${id}carouselItem_${numPage}`}
                    aria-label={`Page ${numPage + 1}`}
                    role="tab"
                    aria-selected={numPage === currentPageNumber}
                    paginationColor={paginationColor}
                    activePaginationColor={activePaginationColor}
                    style={bulletStyle}
                    onClick={this.handlePageClick(numPage)}
                  />
                </li>
              )
            })}
          </StyledPagination>
        )}
      </Fragment>
    )
  }
}
