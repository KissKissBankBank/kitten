import React, { Component } from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Context } from './context'

const ContentStyled = styled.div`
  box-sizing: border-box;
  visibility: visible;
  overflow: hidden;

  flex-basis: ${({ maxHeight }) => pxToRem(maxHeight)};

  background-color: ${COLORS.background3};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-top: 0;
  border-bottom-left-radius: ${pxToRem(3)};
  border-bottom-right-radius: ${pxToRem(3)};

  opacity: 1;

  transition: visibility 0s ease, flex-basis 0.4s ease, opacity 0.4s ease;
  transition-delay: 0s, 0s, 0s;

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    flex-basis: 0;
    transition-delay: 0.4s, 0s, 0s;
  }

  > div {
    margin: ${pxToRem(30)};
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

  render() {
    const { id, children, selectedItem } = this.props
    const { maxHeight } = this.state

    return (
      <Context.Consumer>
        {({ selectedItem }) => (
          <ContentStyled
            aria-hidden={selectedItem !== id}
            ref={contentDiv => (this.div = contentDiv)}
            maxHeight={maxHeight}
          >
            <div>{children}</div>
          </ContentStyled>
        )}
      </Context.Consumer>
    )
  }
}
