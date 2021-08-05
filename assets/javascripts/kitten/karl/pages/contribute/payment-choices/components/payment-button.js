import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem, TagButton as TagButtonBase, COLORS } from '../../../../..'

// TODO: Move in Kitten component.

const TagButton = styled(TagButtonBase)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(50)};
  margin: ${pxToRem(15)} ${pxToRem(15)} 0 0;
  padding: ${pxToRem(10)} ${pxToRem(20)};

  :hover,
  :focus {
    border-color: ${COLORS.primary4};
    background-color: ${COLORS.background1};
  }

  :active {
    border-color: ${COLORS.primary1};
    background-color: ${COLORS.background1};
  }
`

export class PaymentButton extends Component {
  render() {
    const { children, ...others } = this.props
    const content = React.cloneElement(children, {
      style: { width: '100%' },
    })

    return (
      <TagButton tag="span" {...others}>
        {content}
      </TagButton>
    )
  }
}
