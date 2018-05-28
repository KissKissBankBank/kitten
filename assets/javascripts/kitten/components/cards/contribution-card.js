import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { HorizontalStroke as HorizontalStrokeBase } from 'kitten/components/layout/horizontal-stroke'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Button = Radium(ButtonBase)
const Title = Radium(TitleBase)
const Text = Radium(TextBase)
const Paragraph = Radium(ParagraphBase)
const IconBadge = Radium(IconBadgeBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class ContributionCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    titleDescription: PropTypes.string,
    textDescription: PropTypes.string.isRequired,
    textTag: PropTypes.string,

    button: PropTypes.string,
    buttonOnMouseEnter: PropTypes.func,
    buttonOnMouseLeave: PropTypes.func,
    buttonOnClick: PropTypes.func,

    myContribution: PropTypes.string,
    manageContribution: PropTypes.string,
    manageContributionLink: PropTypes.string,

    isDisabled: PropTypes.bool,
    descriptionMarginBottom: PropTypes.number,
    render: PropTypes.func,
  }

  static defaultProps = {
    titleDescription: '',
    titleTag: 'h1',
    textTag: 'p',
    imageProps: {
      src: '',
      alt: '',
    },
    button: '',
    buttonOnMouseEnter: () => {},
    buttonOnMouseLeave: () => {},
    buttonOnClick: () => {},

    myContribution: '',
    manageContribution: '',
    manageContributionLink: '',

    isDisabled: false,
    descriptionMarginBottom: null,
    render: () => {},
  }

  render() {
    // We need to destructure the props to prevent them to hydrate children components.
    const {
      isDisabled,
      viewportIsSOrLess,
      viewportIsMobile,
      viewportIsTabletOrLess,
      titleAmount,
      titleDescription,
      textDescription,
      titleContributors,
      titleSmallContributors,
      titleDelivery,
      titleSmallDelivery,
      titleAvailability,
      titleSmallAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      button,
      buttonOnMouseEnter,
      buttonOnMouseLeave,
      buttonOnClick,
      myContribution,
      manageContribution,
      manageContributionLink,
      imageProps,
      titleTag,
      textTag,
      ...others
    } = this.props

    const styleCard = [
      others.style,
      styles.card,
      isDisabled && styles.card.isDisabled,
    ]

    return (
      <StyleRoot {...others} style={styleCard}>
        <Marger bottom={viewportIsSOrLess ? 0 : 5}>
          <Grid style={styles.card.addPadding} disabled={isDisabled}>
            <GridCol col-l="7" col-m={!imageProps.src ? 10 : 7}>
              {this.renderDescription()}
            </GridCol>
            {imageProps.src && (
              <GridCol col-m="4" offset-m="1">
                {this.renderImage()}
              </GridCol>
            )}
          </Grid>
          {viewportIsSOrLess && this.renderChoiceButton()}
        </Marger>
      </StyleRoot>
    )
  }

  renderDescription() {
    const {
      button,
      titleAmount,
      titleDescription,
      textDescription,
      titleTag,
      textTag,
      myContribution,
      viewportIsSOrLess,
      viewportIsMobile,
    } = this.props

    return (
      <Fragment>
        <Marger top={viewportIsSOrLess ? 4 : 5}>
          <Marger bottom="2">
            <Title
              modifier={viewportIsSOrLess ? 'tertiary' : 'secondary'}
              italic
              margin={false}
              tag={titleTag}
            >
              {titleAmount}
            </Title>
          </Marger>
          <Marger top="2" bottom={viewportIsMobile ? 3 : 4}>
            <HorizontalStroke size="big" />
          </Marger>
          {titleDescription && (
            <Marger top="4" bottom="1">
              <Text
                size={viewportIsSOrLess ? 'big' : 'huge'}
                tag={textTag}
                weight="bold"
              >
                {titleDescription}
              </Text>
            </Marger>
          )}
          <Marger top={!titleDescription ? 4 : 1}>
            <Paragraph
              modifier={viewportIsSOrLess ? 'quaternary' : 'tertiary'}
              margin={false}
            >
              {textDescription}
            </Paragraph>
          </Marger>
        </Marger>
        {!!this.props.render && this.props.render()}
        {this.renderInfos()}
        {!viewportIsSOrLess && this.renderChoiceButton()}
      </Fragment>
    )
  }

  renderInfos() {
    const {
      titleContributors,
      titleSmallContributors,
      titleDelivery,
      titleSmallDelivery,
      titleAvailability,
      titleSmallAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      viewportIsSOrLess,
    } = this.props

    if (!valueContributors && !valueDelivery && !valueAvailability) return

    return (
      <Marger top="2" bottom={viewportIsSOrLess ? 3 : 4}>
        <Grid>
          {this.renderInfo(
            titleContributors,
            titleSmallContributors,
            valueContributors,
          )}
          {this.renderInfo(titleDelivery, titleSmallDelivery, valueDelivery)}
          {this.renderInfo(
            titleAvailability,
            titleSmallAvailability,
            valueAvailability,
          )}
        </Grid>
      </Marger>
    )
  }

  renderInfo(title, titleSmall, value) {
    const { viewportIsTabletOrLess, viewportIsSOrLess } = this.props

    if (!title || !titleSmall) return

    return (
      <GridCol style={styles.infos} col-l="4" col-xl="3">
        {viewportIsTabletOrLess && (
          <Text weight="regular" style={styles.infos.lists}>
            {titleSmall}
            <Text weight="light">{value}</Text>
          </Text>
        )}

        {!viewportIsTabletOrLess && (
          <Fragment>
            <Text weight="regular">{title}</Text>
            <Text weight="light">{value}</Text>
          </Fragment>
        )}
      </GridCol>
    )
  }

  renderChoiceButton() {
    const { viewportIsSOrLess, myContribution, button } = this.props

    if (!button && !myContribution) return

    return (
      <Fragment>
        {viewportIsSOrLess && (
          <Fragment>
            {myContribution && (
              <Marger
                top={!this.props.imageProps.src ? 0 : 2}
                bottom={!myContribution ? 0 : 2}
              >
                {this.renderMyContribution()}
              </Marger>
            )}
            {this.renderButton()}
          </Fragment>
        )}

        {!viewportIsSOrLess && (
          <Marger top="4">
            {this.renderButton()}
            {myContribution && (
              <Marger top={!myContribution ? 0 : 2}>
                {this.renderMyContribution()}
              </Marger>
            )}
          </Marger>
        )}
      </Fragment>
    )
  }

  renderButton() {
    const {
      button,
      viewportIsSOrLess,
      buttonOnMouseEnter,
      buttonOnMouseLeave,
      buttonOnClick,
      myContribution,
      isDisabled,
    } = this.props

    const buttonMargin = viewportIsSOrLess || !myContribution ? null : 2

    if (!button) return

    return (
      <Marger bottom={buttonMargin}>
        <Button
          size="big"
          modifier="helium"
          aria-label={button}
          style={styles.button}
          onMouseEnter={buttonOnMouseEnter}
          onMouseLeave={buttonOnMouseLeave}
          onClick={buttonOnClick}
          disabled={isDisabled}
        >
          {button}
        </Button>
      </Marger>
    )
  }

  renderIconBadge() {
    if (this.props.isDisabled) return

    return (
      <IconBadge style={styles.iconBadge}>
        <CheckedIcon className="k-IconBadge__svg" />
      </IconBadge>
    )
  }

  renderMyContribution() {
    const {
      isDisabled,
      myContribution,
      manageContribution,
      manageContributionLink,
      viewportIsSOrLess,
    } = this.props

    if (!myContribution || (viewportIsSOrLess && isDisabled)) return

    return (
      <Fragment>
        {viewportIsSOrLess && (
          <Grid style={styles.choiceButton.addPadding}>
            <GridCol>
              <div style={styles.myContribution}>
                {this.renderIconBadge()}
                <div style={styles.myContribution.text}>
                  <Text size="tiny" weight="regular">
                    {myContribution}
                    <br />
                    <Text
                      tag="a"
                      href={manageContributionLink}
                      color="primary1"
                      weight="regular"
                      decoration="none"
                    >
                      {manageContribution}
                    </Text>
                  </Text>
                </div>
              </div>
            </GridCol>
          </Grid>
        )}

        {!viewportIsSOrLess && (
          <div style={styles.myContribution}>
            {this.renderIconBadge()}
            <div style={styles.myContribution.text}>
              <Text size="tiny" weight="regular">
                {myContribution}
                <br />
                <Text
                  tag="a"
                  href={manageContributionLink}
                  color="primary1"
                  weight="regular"
                  decoration="none"
                >
                  {manageContribution}
                </Text>
              </Text>
            </div>
          </div>
        )}
      </Fragment>
    )
  }

  renderImage() {
    if (!this.props.imageProps.src) return

    return <img {...this.props.imageProps} style={styles.image} />
  }
}

const styles = {
  card: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    addPadding: {
      paddingLeft: '20px',
      paddingRight: '20px',

      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingLeft: '50px',
        paddingRight: 0,
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        paddingLeft: '115px',
        paddingRight: 0,
      },
    },

    isDisabled: {
      filter: 'grayscale(1) opacity(.4)',
      cursor: 'not-allowed',
    },
  },

  infos: {
    display: 'flex',
    flexDirection: 'column',

    lists: {
      fontSize: '14px',
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        fontSize: '16px',
      },
    },
  },

  choiceButton: {
    addPadding: {
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
  },

  myContribution: {
    display: 'flex',
    alignItems: 'center',

    text: {
      display: 'flex',
      lineHeight: 'normal',
    },
  },

  button: {
    [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
      width: '100%',
    },
  },

  iconBadge: {
    backgroundColor: COLORS.valid,
    marginRight: '10px',
  },

  image: {
    width: '100%',
  },
}

export const ContributionCard = mediaQueries(
  Radium(ContributionCardComponent),
  {
    viewportIsMobile: true,
    viewportIsTabletOrLess: true,
    viewportIsSOrLess: true,
  },
)
