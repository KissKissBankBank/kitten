import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Text } from '../../../components/typography/text'
import { CloseButton } from '../../../components/buttons/close-button'

const StyledFullSize = styled.div`
  position: sticky;
  top: 0;
  background-color: ${COLORS.background1};
  outline: none;
  box-sizing: border-box;
  overflow: scroll;

  
  .k-ModalNext__fullSize {
    padding-top: ${pxToRem(10)};
    padding-right: ${pxToRem(20)};
    padding-bottom: ${pxToRem(10)};
    padding-left: ${pxToRem(60)};
    border-bottom: ${pxToRem(2)} solid ${COLORS.line1};
  }

  .k-ModalNext__fullSize--close {
    position: absolute;
    top: 0;
    left: 0;
    top: ${pxToRem(10)};
    left: ${pxToRem(20)};
  }

  .k-ModalNext__fullSize--title {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${pxToRem(40)};
  }
`

export const FullSize = ({ children }) => {
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
            {children}
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
