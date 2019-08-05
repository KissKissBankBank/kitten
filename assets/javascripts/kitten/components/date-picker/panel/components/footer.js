import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledFooter = styled.div`
  padding: 0 ${pxToRem(20)} ${pxToRem(20)};
  outline: none;

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding: 0 ${pxToRem(30)} ${pxToRem(30)};
  }

  margin: ${pxToRem(30)} 0;
  display: flex;
  justify-content: space-between;
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
