import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const Img = styled.img`
  width: 100%;
  display: block;
  margin-bottom: ${pxToRem(30)};

  ${({ style }) =>
    style &&
    css`
      ${style}
    `}
`

const Card = styled.div`
  color: ${COLORS.font1};

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(30)};
  width: ${pxToRem(30)};
`

const justifyContent = align => {
  switch (align) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    default:
      return 'center'
  }
}

const StrokePosition = styled.div`
  ${({ selfAlign }) =>
    selfAlign &&
    css`
      display: flex;
      justify-content: ${justifyContent(selfAlign)};
    `}
`

export const VerticalCard = ({
  imageProps,
  title,
  titleTag,
  description,
  descriptionTag,
  withTitleStroke,
  ...others
}) => {
  const { style, ...imgProps } = imageProps

  return (
    <Card {...others}>
      <Img {...imgProps} style={{ ...style }} />
      <Title modifier="senary" as={titleTag} margin={false}>
        {title}
      </Title>
      {withTitleStroke && (
        <StrokePosition selfAlign={others.textAlign}>
          <StyledHorizontalStroke />
        </StrokePosition>
      )}
      {description && (
        <Marger top={withTitleStroke ? 0 : 1}>
          <Paragraph modifier="quaternary" as={descriptionTag} margin={false}>
            {description}
          </Paragraph>
        </Marger>
      )}
    </Card>
  )
}

VerticalCard.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object,
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  descriptionTag: PropTypes.string,
  withTitleStroke: PropTypes.bool,
}

VerticalCard.defaultProps = {
  imageProps: {
    style: {},
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  textAlign: 'center',
  withTitleStroke: false,
}
