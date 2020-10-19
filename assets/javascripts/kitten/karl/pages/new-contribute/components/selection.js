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

const StyledSelection = styled((props) => <div {...props} />)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(30)};
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(30)};
  }

  .k-Selection__close {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      position: relative;
      top: ${pxToRem(-2)};
      right: ${pxToRem(-2)};
    }
  }

  .k-Selection__description {
    display: flex;
    align-items: start;
    margin-right: ${pxToRem(30)};
    margin-bottom: ${pxToRem(30)};
    margin-left: ${pxToRem(30)};
    
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      align-items: center;
    }
  }

  .k-Selection__description--image {
    width: 95px;
    height: 71px;
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      justify-content: flex-start;
      width: 80px;
      height: 60px;
    }
  }

  .k-Selection__description--infos {
    padding-left: ${pxToRem(15)};
    padding-right: 0;
    display: block;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-right: ${pxToRem(20)};
      padding-left: ${pxToRem(20)};
      display: flex;
      flex: 1;
    }
  }

  .k-Selection__description--infosLabel {
    flex: 1;
    font-size: ${stepToRem(-1)};
    margin-bottom: ${pxToRem(20)};
    margin-top: 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
      margin: 0;
    }
  }

  .k-Selection__description--infosPrice {
    font-size: ${stepToRem(2)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(20)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${stepToRem(4)};
      padding-left: ${pxToRem(50)};
    }
  }
`

const Selection = () => {
  return (
    <StyledSelection className="k-Selection">
      <div className="k-Selection__close">
        <CloseButton
          modifier="hydrogen"
          onClick={close}
          size="micro"
        />
      </div>
      <div className="k-Selection__description">
        <img 
          src="https://via.placeholder.com/95x71"
          className="k-Selection__description--image"
        />
        <div className="k-Selection__description--infos">
          <Text
            color="font1"
            as="p"
            weight="bold"
            lineHeight="normal"
            className="k-Selection__description--infosLabel"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.
          </Text>

          <Text
            color="font1"
            weight="bold"
            fontStyle="italic"
            className="k-Selection__description--infosPrice"
          >
            70€
          </Text>
        </div>
      </div>
    </StyledSelection>
  )
}

export default Selection
