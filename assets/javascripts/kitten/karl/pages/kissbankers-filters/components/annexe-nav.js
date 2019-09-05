import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Button, ICON } from '../../../../components/buttons/button/button'
import { TextInput } from '../../../../components/form/text-input'
import { ExportIcon } from '../../../../components/icons/export-icon'
import { EmailIcon } from '../../../../components/icons/email-icon'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledButtonContainer = styled.div`
  display: flex;
  margin-bottom: ${pxToRem(15)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-bottom: ${pxToRem(20)};
  }
`

const buttonMargin = css`
  @media (max-width: ${ScreenConfig.M.max}px) {
    ${ICON}

    > :nth-child(n) {
      margin-right: 0;
    }
  }
`

const StyledEmailButton = styled(Button)`
  ${buttonMargin}
  margin-right: ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-right: ${pxToRem(20)};
  }
`

const StyledExportButton = styled(Button)`
  ${buttonMargin}
  margin-right: ${pxToRem(20)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-right: ${pxToRem(80)};
  }
`

class AnnexeNav extends PureComponent {
  render() {
    return (
      <>
        <StyledButtonContainer>
          <StyledEmailButton modifier="helium">
            <EmailIcon width="19" height="12" />
            <span className="k-u-hidden@m-down">Contacter</span>
          </StyledEmailButton>

          <StyledExportButton modifier="helium">
            <ExportIcon width="14" height="16" />
            <span className="k-u-hidden@m-down">Exporter</span>
          </StyledExportButton>
          <TextInput
            aria-label="Via un email, un nom ou un #"
            placeholder="Via un email, un nom ou un #"
            style={{ flex: 1 }}
          />
        </StyledButtonContainer>
      </>
    )
  }
}

export default AnnexeNav
