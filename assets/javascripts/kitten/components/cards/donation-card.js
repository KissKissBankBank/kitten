import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Label } from 'kitten/components/form/label'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { ScreenConfig } from 'kitten/constants/screen-config'

const Grid = Radium(GridBase)
const Button = Radium(ButtonBase)
const Title = Radium(TitleBase)

class DonationCardComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    textTag: PropTypes.string,

    donationId: PropTypes.string,
    isError: PropTypes.bool,
    errorTag: PropTypes.string,
    amountPlaceholder: PropTypes.string,
    currencySymbol: PropTypes.string,
    amountLabel: PropTypes.string,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    onInputFocus: PropTypes.func,

    buttonLabel: PropTypes.string.isRequired,
    onButtonMouseEnter: PropTypes.func,
    onButtonMouseLeave: PropTypes.func,
    onButtonClick: PropTypes.func,
    onFormSubmit: PropTypes.func,

    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    titleTag: 'h1',
    textTag: 'p',

    donationId: '',
    isError: false,
    errorTag: '',
    amountPlaceholder: '',
    currencySymbol: '€',
    amountLabel: 'Label',
    onInputBlur: () => {},
    onInputChange: () => {},
    onInputFocus: () => {},

    onButtonMouseEnter: () => {},
    onButtonMouseLeave: () => {},
    onButtonClick: () => {},
    onFormSubmit: () => {},

    isDisabled: false,
  }

  render() {
    const {
      viewportIsSOrLess,
      isDisabled,
      onFormSubmit,
      ...others
    } = this.props

    const styleCard = [
      others.style,
      styles.card,
      isDisabled && styles.card.isDisabled,
    ]

    return (
      <StyleRoot {...others} style={styleCard}>
        <Marger
          bottom={viewportIsSOrLess ? 3 : 4}
          top={viewportIsSOrLess ? 3 : 4}
        >
          <Grid style={styles.card.addPadding}>
            <GridCol col-l="8" offset-l="2" col-m="10" offset-m="1">
              {this.renderDescription()}
              <form onSubmit={onFormSubmit}>
                {this.renderInputBase()}
                {this.renderButton()}
              </form>
            </GridCol>
          </Grid>
        </Marger>
      </StyleRoot>
    )
  }

  renderDescription() {
    const { title, titleTag, viewportIsSOrLess } = this.props

    return (
      <Fragment>
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
      </Fragment>
    )
  }

  renderInputBase() {
    const {
      donationId,
      isError,
      errorTag,
      amountPlaceholder,
      currencySymbol,
      amountLabel,
      isDisabled,
      viewportIsSOrLess,
      onInputBlur,
      onInputChange,
      onInputFocus,
    } = this.props

    const donationIsError = !isError ? 3 : 1
    const donationViewport = !viewportIsSOrLess ? 3 : 2

    return (
      <Marger top="3" bottom={donationIsError && donationViewport}>
        <Grid style={styles.center}>
          <GridCol col-xs="7" col-m="5">
            <Marger bottom="1.5">
              <Label size="micro" htmlFor={donationId}>
                {amountLabel}
              </Label>
            </Marger>
            <Marger top="1.5" bottom={isError ? 1 : null}>
              <TextInputWithUnit
                error={isError}
                id={donationId}
                type="number"
                placeholder={amountPlaceholder}
                unit={currencySymbol}
                disabled={isDisabled}
                onBlur={onInputBlur}
                onChange={onInputChange}
                onFocus={onInputFocus}
              />
            </Marger>
            {isError && (
              <Marger top="1">
                <Text size="micro" color="error" weight="regular">
                  {errorTag}
                </Text>
              </Marger>
            )}
          </GridCol>
        </Grid>
      </Marger>
    )
  }

  renderButton() {
    const {
      buttonLabel,
      viewportIsSOrLess,
      onButtonMouseEnter,
      onButtonMouseLeave,
      onButtonClick,
      onFormSubmit,
      isDisabled,
    } = this.props

    return (
      <Marger style={styles.center}>
        <Button
          size="big"
          modifier="helium"
          type="submit"
          aria-label={buttonLabel}
          style={styles.button}
          onMouseEnter={onButtonMouseEnter}
          onMouseLeave={onButtonMouseLeave}
          onClick={onButtonClick}
          disabled={isDisabled}
        >
          {buttonLabel}
        </Button>
      </Marger>
    )
  }
}

const styles = {
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    addPadding: {
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

  center: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
      width: '100%',
    },
  },
}

export const DonationCard = mediaQueries(Radium(DonationCardComponent), {
  viewportIsSOrLess: true,
})
