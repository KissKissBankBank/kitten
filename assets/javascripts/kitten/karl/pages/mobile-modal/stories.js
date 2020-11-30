import React, { useRef } from 'react'
import MobileModal from './index'
import { Button } from '../../../components/buttons/button/button'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StoryButton = () => <Button modifier="helium">Toggle</Button>

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
  return (
    <MobileModal.Footer>
      <StyledButton
        modifier="helium"
        big={true}
        onClick={() => props.mobileModalRef.current.close()}
      >
        Close
      </StyledButton>
    </MobileModal.Footer>
  )
}

const Modal = () => {
  const mobileModalRef = useRef(null)

  return (
    <MobileModal
      closeButtonLabel="Fermer"
      trigger={<StoryButton />}
      ref={mobileModalRef}
    >
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
      <Footer mobileModalRef={mobileModalRef} />
    </MobileModal>
  )
}

export default {
  title: 'pages/MobileModal',
  component: Modal,
}

export const Default = () => <Modal />
