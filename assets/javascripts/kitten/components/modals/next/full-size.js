import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Text } from '../../../components/typography/text'
import { CloseButton } from '../../../components/buttons/close-button'

const StyledFullSize = styled.div`
  position: relative;

  .k-ModalNext__fullSize {
    padding: ${pxToRem(12)};
    border-bottom: ${pxToRem(2)} solid ${COLORS.line1};
  }

  .k-ModalNext__fullSize--close {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: ${pxToRem(12)};
    margin-left: ${pxToRem(12)};
  }

  .k-ModalNext__fullSize--title {
    margin-left: ${pxToRem(40)};
    text-align: center;
  }
`

export const FullSize = () => {
  return(
    <StyledFullSize>
      <div className="k-ModalNext__fullSize">
        <div className="k-ModalNext__fullSize--title">
          <Text 
            tag="p"
            size="micro" 
            color="font1"
            weight="bold"
            lineHeight="normal"
            className="k-u-margin-none"
          >
            Clit Révolution, manuel d'activisme féministe
          </Text>
        </div>
        <CloseButton
          className="k-u-hidden@s-up"
          modifier="hydrogen"
          size="tiny"
          className="k-ModalNext__fullSize--close"
        />
      </div>
    </StyledFullSize>
  )
}

