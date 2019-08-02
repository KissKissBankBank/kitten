import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledFooter = styled.div`
  margin: ${pxToRem(30)} 0;
  display: flex;
  justify-content: space-around;
`

export class Footer extends PureComponent {
  render() {
    const { cleanText, choiceText } = this.props

    return (
      <StyledFooter>
        <Text as="button" size="tiny" weight="regular" color="font1">
          {cleanText}
        </Text>
        <Text as="button" size="tiny" weight="regular" color="primary1">
          {choiceText}
        </Text>
      </StyledFooter>
    )
  }
}
