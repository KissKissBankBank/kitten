import React from 'react'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
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
  overflow: hidden;
  box-sizing: border-box;
  
  .kiss-Summary__close {
    position: absolute;
    right: 0;
    top: 0;
    border-right: none;
    border-top: none;
  }
  
  .kiss-Summary__img {
    position: absolute;
    top: ${pxToRem(20)};
    left: ${pxToRem(20)};
    width: ${pxToRem(80)};
  
    @media (min-width: ${ScreenConfig.S.min}px) {
      top: 0;
      left: 0;
      object-fit: cover;
      width: ${pxToRem(140)};
      height: 100%;
    }
  }

  .kiss-Summary__container {
    display: inline-block;
    width: 100%;
    padding: ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(20)} ${pxToRem(110)};
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${ScreenConfig.S.min}px) {
      display: flex;
      padding: ${pxToRem(20)} ${pxToRem(60)} ${pxToRem(20)} ${pxToRem(160)};
    }
  }

  .kiss-Summary__subSummary {
    font-size: ${stepToRem(-1)};
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(25)};
  
    @media (min-width: ${ScreenConfig.XS.min}px) {
      font-size: ${stepToRem(0)};
      margin-right: ${pxToRem(5)};
      max-width: ${pxToRem(240)};
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  ${'' /* .kiss-Summary__infosPrice {
    display: inline-flex;
    vertical-align: middle;
    text-align: right;
    margin: 0;
  } */}
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
        <Text
          tag="p"
          color="font1"
          weight="bold"
          lineHeight="1"
          className="kiss-Summary__subSummary"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor 
          eget dolor.eget dolor.eget dolor.
        </Text>
        <PillNumberInput 
          value={0}
          min={0}
          max={100}
          className="k-u-margin-right@s-up"
        />
        <div>
          <Text
            color="font1"
            weight="bold"
            size="huge"
            className="kiss-Summary__infosPrice"
          >
            135€
          </Text>
        </div>
        </div>
    </StyledSummary>
  )
}

export default Summary
