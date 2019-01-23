import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Prev } from './components/prev'
import { Next } from './components/next'
import { Pagination } from './components/pagination'
import COLORS from './../../../constants/colors-config'
import { getReactElementsByType } from './../../../helpers/react/react-elements'
import { pxToRem } from './../../../helpers/utils/typography'

const NavTabCarouselStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.font1};
  padding: ${pxToRem(32)} ${pxToRem(40)};
`

export class NavTabCarousel extends Component {
  static Prev = Prev
  static Next = Next
  static Pagination = Pagination

  render() {
    const { children } = this.props
    const prev = getReactElementsByType({
      children,
      type: NavTabCarousel.Prev,
    })[0]
    const next = getReactElementsByType({
      children,
      type: NavTabCarousel.Next,
    })[0]
    const pagination = getReactElementsByType({
      children,
      type: NavTabCarousel.Pagination,
    })[0]

    return (
      <NavTabCarouselStyles>
        {prev}
        {pagination}
        {next}
      </NavTabCarouselStyles>
    )
  }
}
