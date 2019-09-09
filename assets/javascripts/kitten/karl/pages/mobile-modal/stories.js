import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import MobileModal from './index'
import { Button } from '../../../components/buttons/button'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StoryButton = ({ children }) => <Button modifier="helium">Toggle</Button>

const StyledButton = styled(Button)`
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    display: block;
    width: 100%;
  }
`

const StyledTitle = styled.div`
  text-align: center;
  font-size: ${stepToRem(-1)};
  line-height: 1.2;
  flex-grow: 1;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    font-size: ${stepToRem(3)};
  }
`

const Footer = props => {
  const [isOpen, close] = useState(false)

  return (
    <MobileModal.Footer shouldClose={isOpen}>
      <StyledButton modifier="helium" size="big" onClick={() => close(true)}>
        Close
      </StyledButton>
    </MobileModal.Footer>
  )
}

storiesOf('Pages/MobileModal', module).add('Mobile-modal', () => {
  return (
    <MobileModal closeButtonLabel="Fermer" trigger={<StoryButton />}>
      <MobileModal.Header>
        <StyledTitle>
          Contribution <strong>#146788</strong> du <strong>10/04/2019</strong>
        </StyledTitle>
      </MobileModal.Header>
      <MobileModal.Content>
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
        🚲
        <br />
      </MobileModal.Content>
      <Footer />
    </MobileModal>
  )
})
