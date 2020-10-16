import React from 'react'
import styled from 'styled-components'
import { 
  pxToRem,
  stepToRem,
} from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { TextInputWithUnit } from '../../../../components/form/text-input-with-unit'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledLittleMore = styled((props) => <div {...props} />)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(30)};
  border-width: ${pxToRem(2)};
  border-style: dashed;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(30)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(30)};
  }

  .k-LittleMore__description {
    display: flex;
    align-items: start;
    
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      align-items: center;
    }
  }

  .k-LittleMore__description--image {
    width: 95px;
    height: 71px;
    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      justify-content: flex-start;
      width: 80px;
      height: 60px;
    }
  }

  .k-LittleMore__description--infos {
    padding-left: ${pxToRem(15)};
    padding-right: 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-right: ${pxToRem(20)};
      padding-left: ${pxToRem(20)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-right: ${pxToRem(70)};
    }
  }

  .k-LittleMore__description--infosLabel {
    font-size: ${stepToRem(-1)};
    margin-bottom: ${pxToRem(20)};
    margin-top: 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
      margin: 0;
    }
  }

  .k-LittleMore__description--input {
    justify-content: flex-end;
  }
`

const LittleMore = () => {
  return (
    <StyledLittleMore className="k-LittleMore">
      <div className="k-LittleMore__description">
        <img 
          src="https://via.placeholder.com/95x71"
          className="k-LittleMore__description--image"
        />
        <div className="k-LittleMore__description--infos">
          <Text
            color="font1"
            as="p"
            weight="bold"
            lineHeight="normal"
            className="k-LittleMore__description--infosLabel"
          >
            Un petit plus pour 900 care
          </Text>
          <Text
            color="font1"
            as="p"
            size="micro"
            lineHeight="normal"
            className="k-u-margin-none"
          >
            Donnez encore plus de chances à ce projet de voir le jour.
          </Text>
        </div>
        <div className="k-LittleMore__description--input">
          <TextInputWithUnit 
            unit="€"
            digits={12}
          />
        </div>
      </div>
    </StyledLittleMore>
  )
}

export default LittleMore
