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

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(30)};
  }

  .k-LittleMore__description {
    display: flex;
    align-items: start;
    margin: ${pxToRem(30)};
    
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
    
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(20)};
      display: flex;
      flex: 1;
    }
  }

  .k-LittleMore__description--info {
    flex: 1;
    margin-bottom: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-bottom: 0;
      margin-right: 20px;
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-right: 70px;
    }
  }

  .k-LittleMore__description--infoLabel {
    font-size: ${stepToRem(-1)};
    margin: 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
    }
  }

  .k-LittleMore__description--input {
    justify-content: flex-end;
    margin: 0;
  }

  .k-LittleMore__description--inputButton {
    color: ${COLORS.primary1};
    width: 100%;
    background-color: transparent;
    border: 0;
    font-size: ${stepToRem(-1)};
    font-weight: bold;
    text-align: left;
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
          <div className="k-LittleMore__description--info">
            <Text
              color="font1"
              as="p"
              weight="bold"
              lineHeight="normal"
              className="k-LittleMore__description--infoLabel"
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
            />
            <button className="k-LittleMore__description--inputButton">
              Ajouter ce montant
            </button>
          </div>
        </div>
      </div>
    </StyledLittleMore>
  )
}

export default LittleMore
