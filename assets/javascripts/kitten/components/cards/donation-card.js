import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger } from '../../components/layout/marger'
import { Grid, GridCol } from '../../components/grid/grid'
import { Title } from '../../components/typography/title'
import { HorizontalStroke } from '../../components/layout/horizontal-stroke'
import COLORS from '../../constants/colors-config'
import { mediaQueries } from '../../hoc/media-queries'
import { TextInputWithUnitForm } from '../../components/form/text-input-with-unit-form'

const DonationCardComponent = ({
  viewportIsSOrLess,
  isDisabled,
  title,
  titleTag,
  donationForm,
  version,
  ...others
}) => {
  const isTinyVersion = version === 'tiny' || viewportIsSOrLess
  const gridColProps = isTinyVersion
    ? {}
    : { 'col-m': 10, 'offset-m': 1, 'col-l': 8, 'offset-l': 2 }

  const cardStyles = [
    others.style,
    styles.card,
    isDisabled && styles.card.isDisabled,
  ]

  return (
    <div style={cardStyles}>
      <Marger bottom={isTinyVersion ? 3 : 4} top={isTinyVersion ? 3 : 4}>
        <Grid style={styles.card.content}>
          <GridCol {...gridColProps}>
            <Marger bottom="2">
              <Title
                modifier={isTinyVersion ? 'quinary' : 'quaternary'}
                margin={false}
                tag={titleTag}
                style={styles.text}
              >
                {title}
              </Title>
            </Marger>

            <Marger top="2" bottom="3">
              <HorizontalStroke size="big" style={styles.horizontalStroke} />
            </Marger>

            <TextInputWithUnitForm
              {...donationForm}
              align="center"
              formIsDisabled={isDisabled}
              version={version}
            />
          </GridCol>
        </Grid>
      </Marger>
    </div>
  )
}

DonationCardComponent.propTypes = {
  viewportIsSOrLess: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  isDisabled: PropTypes.bool,
  donationForm: PropTypes.object.isRequired,
  version: PropTypes.oneOf(['default', 'tiny']),
}

DonationCardComponent.defaultProps = {
  titleTag: 'h2',
  isDisabled: false,
  version: 'default',
}

const styles = {
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    content: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    isDisabled: {
      filter: 'grayscale(1) opacity(.4)',
      cursor: 'not-allowed',
    },
  },

  text: {
    color: COLORS.font1,
    textAlign: 'center',
  },

  horizontalStroke: {
    margin: '0 auto',
  },
}

export const DonationCard = mediaQueries(Radium(DonationCardComponent), {
  viewportIsSOrLess: true,
})
