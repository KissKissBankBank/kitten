import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Text } from '../../../components/typography/text'
import { CloseButton } from '../../../components/buttons/close-button'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { PillNumberInput } from '../../../components/form/pill-number-input'

const StyledSummary = styled.div`
  border-radius: ${pxToRem(8)};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  position: relative;
  display: inline-flex;
  width: 100%;
  
  .kiss-Summary__close {
    position: absolute;
    right: 0;
    top: 0;
    border-right: none;
    border-top: none;
  }
  
  .kiss-Summary__img {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: ${pxToRem(140)};
    object-fit: cover;
    object-position: center center;
    text-align: center;
  }

  .kiss-Summary__container {
    display: flex;
    width: 100%;
    padding: ${pxToRem(20)} ${pxToRem(60)} ${pxToRem(20)} ${pxToRem(30)};
    align-items: center;
    justify-content: space-between;
  }

  .kiss-Summary__subSummary {
    padding-left: ${pxToRem(140)};
    margin-right: ${pxToRem(5)};
    max-width: ${pxToRem(240)};
  }
`

const Summary = () => {
  return (
    <StyledSummary>
      <CloseButton className="kiss-Summary__close" size="micro" />
      <img 
        src="/kitten.jpg"
        className="kiss-Summary__img"
      />
      <div className="kiss-Summary__container">
        <Text color="font1" weight="bold" lineHeight="1" size="default" className="kiss-Summary__subSummary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor 
          eget dolor.eget dolor.eget dolor.
        </Text>
        <PillNumberInput value={0} min={0} max={100} className="k-u-margin-right-triple" />
        <Text color="font1" weight="bold" size="big">135€</Text>
      </div>
    </StyledSummary>
  )
}

export default Summary
