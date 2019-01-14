import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Context } from './context'
import { Marger } from '../../layout/marger'

const ContentStyled = styled.div`
  box-sizing: border-box;
  visibility: visible;
  overflow: hidden;
  height: auto;

  max-height: ${({ maxHeight }) => pxToRem(maxHeight)};

  background-color: ${COLORS.background3};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-top: 0;
  border-bottom-left-radius: ${pxToRem(3)};
  border-bottom-right-radius: ${pxToRem(3)};
  opacity: 1;

  padding: 0 ${pxToRem(30)};

  ${({ isAnimated }) =>
    isAnimated &&
    css`
      transition: visibility 0s ease, max-height 0.4s ease, opacity 0.4s ease;
      transition-delay: 0s, 0s, 0s;

      &[aria-hidden='true'] {
        transition-delay: 0.4s, 0s, 0s;
      }
    `}

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }
`

export class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maxHeight: 'none',
    }
  }

  componentDidMount() {
    if (this.div) {
      this.setState({ maxHeight: this.div.scrollHeight })
    }
  }

  componentDidUpdate() {
    if (this.div && this.state.maxHeight !== this.div.scrollHeight) {
      this.setState({ maxHeight: this.div.scrollHeight })
    }
  }

  render() {
    const { id, children } = this.props
    const { maxHeight } = this.state

    return (
      <Context.Consumer>
        {({ selectedItem, isAnimated, componentId }) => (
          <ContentStyled
            aria-hidden={selectedItem !== id}
            ref={contentDiv => (this.div = contentDiv)}
            maxHeight={maxHeight}
            isAnimated={isAnimated}
            id={`${componentId}_${id}`}
          >
            <Marger top="3" bottom="3">
              {children}
            </Marger>
          </ContentStyled>
        )}
      </Context.Consumer>
    )
  }
}
