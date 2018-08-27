import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Title } from 'kitten/components/typography/title'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { TextInputWithUnitForm } from 'kitten/components/form/text-input-with-unit-form'
import { ScreenConfig } from 'kitten/constants/screen-config'

const DonationCardComponent = ({
  viewportIsSOrLess,
  isDisabled,
  title,
  titleTag,
  donationForm,
  ...others
}) => {
  const cardStyles = [
    others.style,
    styles.card,
    isDisabled && styles.card.isDisabled,
  ]

  return (
    <div style={cardStyles}>
      <Marger
        bottom={viewportIsSOrLess ? 3 : 4}
        top={viewportIsSOrLess ? 3 : 4}
      >
        <Grid style={styles.card.content}>
          <GridCol col-l="8" offset-l="2" col-m="10" offset-m="1">
            <Marger bottom="2">
              <Title
                modifier={viewportIsSOrLess ? 'quinary' : 'quaternary'}
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
}

DonationCardComponent.defaultProps = {
  titleTag: 'h2',
  isDisabled: false,
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
