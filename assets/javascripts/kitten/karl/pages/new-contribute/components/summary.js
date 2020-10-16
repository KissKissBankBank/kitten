import React from 'react'
import styled from 'styled-components'
import { 
  pxToRem,
  stepToRem,
} from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { CloseButton } from '../../../../components/buttons/close-button'

const StyledSummary = styled((props) => <div {...props} />)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(30)};
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(30)};
  }

  .k-Summary__close {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      position: relative;
      top: ${pxToRem(-2)};
      right: ${pxToRem(-2)};
    }
  }

  .k-Summary__description {
    display: flex;
    align-items: start;
    margin-right: ${pxToRem(30)};
    margin-bottom: ${pxToRem(30)};
    margin-left: ${pxToRem(30)};
    
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      align-items: center;
    }
  }

  .k-Summary__description--image {
    width: 95px;
    height: 71px;
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      justify-content: flex-start;
      width: 80px;
      height: 60px;
    }
  }

  .k-Summary__description--infos {
    padding-left: ${pxToRem(15)};
    padding-right: 0;
    display: block;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-right: ${pxToRem(20)};
      padding-left: ${pxToRem(20)};
      display: flex;
    }
  }

  .k-Summary__description--infosLabel {
    font-size: ${stepToRem(-1)};
    margin-bottom: ${pxToRem(20)};
    margin-top: 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
      margin: 0;
      padding-right: ${pxToRem(20)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-right: ${pxToRem(50)};
    }
  }

  .k-Summary__description--infosPrice {
    font-size: ${stepToRem(2)};

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${stepToRem(4)};
    }
  }
`

const Summary = () => {
  return (
    <StyledSummary className="k-Summary">
      <div className="k-Summary__close">
        <CloseButton
          modifier="hydrogen"
          onClick={close}
          size="micro"
        />
      </div>
      <div className="k-Summary__description">
        <img 
          src="https://via.placeholder.com/95x71"
          className="k-Summary__description--image"
        />
        <div className="k-Summary__description--infos">
          <Text
            color="font1"
            as="p"
            weight="bold"
            lineHeight="normal"
            className="k-Summary__description--infosLabel"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.
          </Text>

          <Text
            color="font1"
            weight="bold"
            fontStyle="italic"
            className="k-Summary__description--infosPrice"
          >
            70€
          </Text>
        </div>
      </div>
    </StyledSummary>
  )
}

export default Summary
