import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { StarIcon } from 'kitten/components/icons/star-icon'
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
    starred: PropTypes.bool,
    starLabel: PropTypes.string,
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
    starred: false,
    starLabel: '',
    render: () => {},
  }

  render() {
    // We need to destructure the props to prevent them to hydrate children components.
    const {
      isDisabled,
      viewportIsSOrLess,
      viewportIsTabletOrLess,
      titleAmount,
      titleDescription,
      textDescription,
      titleContributors,
      titleDelivery,
      titleAvailability,
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
      render,
      starred,
      starLabel,
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
          bottom={viewportIsSOrLess ? 0 : 4}
          top={viewportIsSOrLess ? 3 : 4}
        >
          <Grid style={styles.card.addPadding} disabled={isDisabled}>
            <GridCol col-l="7" col-m={!imageProps.src ? 10 : 7}>
              {this.renderDescription()}
            </GridCol>
            {imageProps.src && (
              <GridCol col-m="4" offset-m="1" style={styles.card.image}>
                <Marger bottom={!myContribution ? 2 : null}>
                  {this.renderImage()}
                </Marger>
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
      titleAmount,
      titleDescription,
      textDescription,
      titleTag,
      textTag,
      starred,
      starLabel,
      viewportIsSOrLess,
    } = this.props

    return (
      <Fragment>
        {starred && (
          <Marger bottom="2">
            <Button
              icon
              readonly
              tag="span"
              size="tiny"
              modifier="lithium"
              style={{ borderRadius: '5px' }}
            >
              <StarIcon className="k-Button__icon k-Button--readonly" />
              {starLabel}
            </Button>
          </Marger>
        )}
        <Marger top="2" bottom="2">
          <Title
            modifier={viewportIsSOrLess ? 'quaternary' : 'tertiary'}
            italic
            margin={false}
            tag={titleTag}
            style={styles.textColor}
          >
            {titleAmount}
          </Title>
        </Marger>
        <Marger top="2" bottom="3">
          <HorizontalStroke size="big" />
        </Marger>
        {titleDescription && (
          <Marger top="3" bottom="1">
            <Text
              color="font1"
              size={viewportIsSOrLess ? 'big' : 'huge'}
              tag={textTag}
              weight="bold"
              style={styles.textMargin}
            >
              {titleDescription}
            </Text>
          </Marger>
        )}
        <Marger top={!titleDescription ? 3 : 1}>
          <Paragraph
            style={styles.textColor}
            modifier={viewportIsSOrLess ? 'quaternary' : 'tertiary'}
            margin={false}
          >
            {textDescription}
          </Paragraph>
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
      titleDelivery,
      titleAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      viewportIsSOrLess,
    } = this.props

    if (!valueContributors && !valueDelivery && !valueAvailability) return

    return (
      <Marger
        top={viewportIsSOrLess ? 2 : 3}
        bottom={viewportIsSOrLess ? 3 : 4}
      >
        {this.renderInfo(titleContributors, valueContributors)}
        {this.renderInfo(titleDelivery, valueDelivery)}
        {this.renderInfo(titleAvailability, valueAvailability)}
      </Marger>
    )
  }

  renderInfo(title, value) {
    const { viewportIsTabletOrLess } = this.props

    if (!title) return

    return (
      <Fragment>
        {viewportIsTabletOrLess && (
          <div>
            <Text color="font1" weight="regular" style={styles.infos.lists}>
              {title}
              <Text color="font1" weight="light">
                {value}
              </Text>
            </Text>
          </div>
        )}

        {!viewportIsTabletOrLess && (
          <Text color="font1" weight="regular" style={styles.infos.lists}>
            {title}
            <Text color="font1" weight="light">
              {value}
            </Text>
          </Text>
        )}
      </Fragment>
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
          type="button"
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
      <IconBadge valid style={styles.iconBadge}>
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
                  <Text color="font1" size="tiny" weight="regular">
                    {myContribution}
                    <br />
                    <Text
                      tag={!isDisabled ? 'a' : 'span'}
                      href={!isDisabled ? manageContributionLink : null}
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
              <Text color="font1" size="tiny" weight="regular">
                {myContribution}
                <br />
                <Text
                  tag={!isDisabled ? 'a' : 'span'}
                  href={!isDisabled ? manageContributionLink : null}
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
  textColor: {
    color: COLORS.font1,
  },

  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    addPadding: {
      paddingLeft: 20,
      paddingRight: 20,

      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: 50,
        paddingRight: 50,
      },
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingLeft: 40,
        paddingRight: 0,
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        paddingLeft: 115,
        paddingRight: 0,
      },
    },

    image: {
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingRight: 50,
      },
    },

    isDisabled: {
      filter: 'grayscale(1) opacity(.4)',
      cursor: 'not-allowed',
    },
  },

  textMargin: {
    margin: 0,
  },

  infos: {
    lists: {
      fontSize: 14,
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        fontSize: 16,
        marginRight: 30,
      },
    },
  },

  choiceButton: {
    addPadding: {
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: 50,
        paddingRight: 50,
      },
      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        paddingLeft: 20,
        paddingRight: 20,
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
    marginRight: 10,
  },

  image: {
    width: '100%',
  },
}

export const ContributionCard = mediaQueries(
  Radium(ContributionCardComponent),
  {
    viewportIsTabletOrLess: true,
    viewportIsSOrLess: true,
  },
)
