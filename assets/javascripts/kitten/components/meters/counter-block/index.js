import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../../components/layout/marger'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

const Container = styled.div`
  text-align: center;

  .styledText {
    line-height: 0.7;
    white-space: nowrap;
    display: flex;
    padding-bottom: ${pxToRem(4)};
    margin: 0;
    flex-grow: 1;
    font-size: ${pxToRem(50)};
    justify-content: center;

    @media (min-width: ${ScreenConfig.XS.min}px) {
      font-size: ${pxToRem(66)};
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${pxToRem(96)};
      padding-bottom: ${pxToRem(6)};
    }

    @media (min-width: ${ScreenConfig.M.min}px) {
      font-size: ${pxToRem(116)};
      padding-bottom: ${pxToRem(7)};
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      font-size: ${pxToRem(158)};
      padding-bottom: ${pxToRem(10)};
    }
  }

  .styledSubTitle {
    margin: 0;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StrokeContainer = styled.div`
  flex-grow: 2;

  .styledStroke {
    width: 100%;
    height: ${pxToRem(6)};
  }
`

const Unit = styled.span`
  display: inline-flex;
  align-self: center;
  font-size: 0.5em;
`

const isString = val => typeof val === 'string'

export const CounterBlock = ({
  title,
  titleTag,
  subTitle,
  subTitleTag,
  counter,
  unit,
}) => {
  const margin = { default: 2, fromS: 4 }

  return (
    <Container>
      {isString(title) ? (
        <Marger bottom={margin}>
          <Title modifier="tertiary" noMargin tag={titleTag}>
            {title}
          </Title>
        </Marger>
      ) : (
        title
      )}
      <FlexContainer>
        <StrokeContainer className="k-u-hidden@m-down">
          <HorizontalStroke className="styledStroke" size="big" />
        </StrokeContainer>
        {isString(counter) ? (
          <Text
            className="styledText"
            weight="bold"
            tag={titleTag}
            fontStyle="italic"
          >
            {counter}
            {unit && <Unit>&nbsp;{unit}</Unit>}
          </Text>
        ) : (
          counter
        )}

        <StrokeContainer className="k-u-hidden@m-down">
          <HorizontalStroke className="styledStroke" size="big" />
        </StrokeContainer>
      </FlexContainer>
      {isString(subTitle) ? (
        <Marger top={margin}>
          <Text
            className="styledSubTitle"
            size="huge"
            tag={subTitleTag}
            tag="p"
            fontStyle="italic"
          >
            {subTitle}
          </Text>
        </Marger>
      ) : (
        subTitle
      )}
    </Container>
  )
}

CounterBlock.propTypes = {
  title: PropTypes.node,
  titleTag: PropTypes.string,
  subTitle: PropTypes.node,
  subTitleTag: PropTypes.string,
  counter: PropTypes.node,
  unit: PropTypes.string,
}

CounterBlock.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0',
  unit: null,
}
