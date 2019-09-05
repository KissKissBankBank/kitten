import React from 'react'
import { Text } from '../../../../components/typography/text'
import styled from 'styled-components'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledContribute = styled(Text)`
  @media (max-width: ${ScreenConfig.M.max}px) {
    display: block;
  }
`

const Result = () => (
  <>
    <Text size="tiny" weight="light">
      Résultat :
      <StyledContribute size="tiny" weight="regular">
        {' '}
        1 contribution
      </StyledContribute>
    </Text>
  </>
)

export default Result
