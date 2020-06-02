import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { GridCol } from '../../../../../components/grid/grid'
import classNames from 'classnames'

const StyledCard = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-bottom: ${pxToRem(30)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-bottom: ${pxToRem(40)};
  }

  &:last-child {
    margin-bottom: 0;
  }

  .Partners__card__imageCol {
    padding: 0;
    padding-right: ${pxToRem(7.5)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-right: ${pxToRem(10)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-right: ${pxToRem(15)};
    }
  }

  .Partners__card__image {
    display: block;
    width: 100%;
  }

  .Partners__card__title {
    font-size: ${stepToRem(-1)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(1)};
      margin-bottom: ${pxToRem(10)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${stepToRem(2)};
    }
  }

  .Partners__card__text {
    display: none;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(-1)};
      margin-top: ${pxToRem(10)};
      margin-bottom: 0;
      display: block;
    }
  }

  .Partners__card__descriptionCol {
    padding-right: 0;
    padding-left: ${pxToRem(7.5)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(10)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-left: ${pxToRem(15)};
    }
  }
`

export const Card = ({
  imageProps,
  title,
  text,
  ...props
}) => {
  return (
    <StyledCard 
      className={classNames('Partners__card')}
      {...props}
    >
      <GridCol
        className="Partners__card__imageCol"
        col={6}
        col-s={5}
        col-l={6}
      >
        <img
          alt=""
          {...imageProps}
          className={classNames(
            'Partners__card__image',
            imageProps.className,
          )}
        />
      </GridCol>
      <GridCol
        className="Partners__card__descriptionCol"
        col={6}
        col-s={7}
        col-l={6}
      >

        <Title
          margin={false}
          className="Partners__card__title"
          tag="h4"
          modifier="septenary"
        >
          {title}
        </Title>

        <Text className="Partners__card__text" tag="p" color="font1">
          {text}
        </Text>
      </GridCol>
    </StyledCard>
  )
}

Card.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
