import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/buttons/button/button'
import { TextInput } from '../../../../components/form/text-input'
import { ExportIcon } from '../../../../components/icons/export-icon'
import { EmailIcon } from '../../../../components/icons/email-icon'
import { SearchIcon } from '../../../../components/icons/search-icon'

const StyledButtonContainer = styled.div`
  display: flex;
`

const StyledInput = styled(TextInput)`
  justify-content: flex-end;
`

class AnnexeNav extends PureComponent {
  render() {
    return (
      <>
        <StyledButtonContainer>
          <Button modifier="helium" style={{ marginRight: 20 }}>
            <EmailIcon />
            <span>Contacter</span>
          </Button>

          <Button modifier="helium" style={{ marginRight: 80 }}>
            <ExportIcon />
            <span>Exporter</span>
          </Button>
          <StyledInput />
        </StyledButtonContainer>
      </>
    )
  }
}

export default AnnexeNav
