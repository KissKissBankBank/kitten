import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../../../../components/buttons/button/button'
import { TextInput } from '../../../../components/form/text-input'
import { ExportIcon } from '../../../../components/icons/export-icon'
import { EmailIcon } from '../../../../components/icons/email-icon'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledButtonContainer = styled.div`
  display: flex;
`

const StyledInput = styled(TextInput)`
  flex: 1;
`

const StyledButtonText = styled.span`
  @media (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
`

class AnnexeNav extends PureComponent {
  render() {
    const { icon } = this.props

    return (
      <>
        <StyledButtonContainer>
          <Button icon={icon} modifier="helium" style={{ marginRight: 20 }}>
            <EmailIcon width="18" height="18" />
            <StyledButtonText>Contacter</StyledButtonText>
          </Button>

          <Button icon={icon} modifier="helium" style={{ marginRight: 80 }}>
            <ExportIcon width="15" height="15" />
            <StyledButtonText>Exporter</StyledButtonText>
          </Button>
          <StyledInput placeholder="Via un email, un nom ou un #" />
        </StyledButtonContainer>
      </>
    )
  }
}

export default AnnexeNav
