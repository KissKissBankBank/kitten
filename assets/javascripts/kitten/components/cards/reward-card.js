import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
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
import { parseHtml } from 'kitten/helpers/utils/parser'
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

class RewardCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    titleDescription: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,

    titleContributors: PropTypes.string,
    titleSmallContributors: PropTypes.string,
    titleDelivery: PropTypes.string,
    titleSmallDelivery: PropTypes.string,
    titleAvailability: PropTypes.string,
    titleSmallAvailability: PropTypes.string,
    valueContributors: PropTypes.string,
    valueDelivery: PropTypes.string,
    valueAvailability: PropTypes.string,

    button: PropTypes.string,

    myContribution: PropTypes.string,
    manageContribution: PropTypes.string,

    imageSrc: PropTypes.string,
    imageSrcSmall: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      src: 'https://placehold.it/350x200/caf4fe/caf4fe',
      alt: '',
    },
  }

  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  render() {
    const styleCard = [
      styles.card,
      this.props.isDisabled && styles.card.isDisabled,
    ]

    return (
      <StyleRoot>
        <Grid>
          <GridCol>
            <div style={styleCard} disabled={this.props.isDisabled}>
              <Marger bottom={this.props.viewportIsSOrLess ? 0 : 5}>
                <Grid style={styles.card.addPadding}>
                  <GridCol col-m="7">{this.renderDescription()}</GridCol>
                  <GridCol col-m="4" offset-m="1">
                    {this.renderImage()}
                  </GridCol>
                </Grid>
                {this.props.viewportIsSOrLess && (
                  <Fragment>{this.renderChoiceButton()}</Fragment>
                )}
              </Marger>
            </div>
          </GridCol>
        </Grid>
      </StyleRoot>
    )
  }

  renderDescription() {
    const { titleAmount, titleDescription, textDescription } = this.props

    return (
      <Fragment>
        <Marger top={this.props.viewportIsSOrLess ? 4 : 5} bottom="2">
          <Marger bottom="2">
            <Title
              modifier={this.props.viewportIsSOrLess ? 'tertiary' : 'secondary'}
              italic
              margin={false}
            >
              {parseHtml(titleAmount)}
            </Title>
          </Marger>
          <Marger top="2" bottom={this.props.viewportIsMobile ? 3 : 4}>
            <HorizontalStroke size="big" />
          </Marger>
          <Marger top="4" bottom="1">
            <Text
              size={this.viewportIsSOrLess ? 'big' : 'huge'}
              tag="h2"
              weight="bold"
            >
              {parseHtml(titleDescription)}
            </Text>
          </Marger>
          <Marger top="1" bottom="2">
            <Paragraph
              modifier={
                this.props.viewportIsSOrLess ? 'quaternary' : 'tertiary'
              }
              margin={false}
            >
              {parseHtml(textDescription)}
            </Paragraph>
          </Marger>
        </Marger>
        <Marger top="2" bottom={this.props.viewportIsSOrLess ? 3 : 4}>
          {this.renderInfos()}
        </Marger>
        {!this.props.viewportIsSOrLess && (
          <Marger top="4">{this.renderChoiceButton()}</Marger>
        )}
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
    } = this.props

    return (
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
    )
  }

  renderInfo(title, titleSmall, value) {
    return (
      <GridCol style={styles.infos} col-l="4" col-xl="3">
        {this.props.viewportIsTabletOrLess && (
          <Text weight="regular" style={styles.infos.lists}>
            {parseHtml(titleSmall)}
            <Text weight="light">{parseHtml(value)}</Text>
          </Text>
        )}

        {!this.props.viewportIsTabletOrLess && (
          <Fragment>
            <Text weight="regular">{parseHtml(title)}</Text>
            <Text>{parseHtml(value)}</Text>
          </Fragment>
        )}
      </GridCol>
    )
  }

  renderChoiceButton() {
    return (
      <Fragment>
        {this.props.viewportIsSOrLess && (
          <div>
            <Marger
              top={!this.props.imageSrc && !this.props.imageSrcSmall ? 0 : 2}
              bottom="2"
            >
              {this.renderMyContribution()}
            </Marger>
            {this.renderButton()}
          </div>
        )}

        {!this.props.viewportIsSOrLess && (
          <Fragment>
            <Marger bottom="2">{this.renderButton()}</Marger>
            <Marger top="2">{this.renderMyContribution()}</Marger>
          </Fragment>
        )}
      </Fragment>
    )
  }

  renderButton() {
    if (!this.props.button || this.props.isCompleted) return

    return (
      <Button
        size="big"
        modifier="helium"
        aria-label={this.props.button}
        style={styles.button}
      >
        {this.props.button}
      </Button>
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
    const { myContribution, manageContribution } = this.props

    if (this.props.viewportIsSOrLess && this.props.isDisabled) return

    return (
      <Fragment>
        {this.props.viewportIsSOrLess && (
          <Grid style={styles.choiceButton.addPadding}>
            <GridCol>
              <div style={styles.myContribution}>
                {this.renderIconBadge()}
                <div style={styles.myContribution.text}>
                  <Text size="tiny" weight="regular">
                    {parseHtml(myContribution)}
                    <br />
                    <a href="#" style={styles.myContribution.text.link}>
                      {parseHtml(manageContribution)}
                    </a>
                  </Text>
                </div>
              </div>
            </GridCol>
          </Grid>
        )}

        {!this.props.viewportIsSOrLess && (
          <div style={styles.myContribution}>
            {this.renderIconBadge()}
            <div style={styles.myContribution.text}>
              <Text size="tiny" weight="regular">
                {parseHtml(myContribution)}
                <br />
                <a href="#" style={styles.myContribution.text.link}>
                  {parseHtml(manageContribution)}
                </a>
              </Text>
            </div>
          </div>
        )}
      </Fragment>
    )
  }

  renderImage(size) {
    const imageStyles = [
      styles.image.default,
      this.props.imageSrcSmall && styles.image.small,
      size === 'default' && styles.image.default,
      size === 'small' && styles.image.small,
    ]

    if (!this.props.imageSrc && !this.props.imageSrcSmall) return

    return <img {...this.props.imageProps} style={imageStyles} />
  }
}

const COMPONENT_GUTTER = 10

const styles = {
  card: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    display: 'flex',

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
    padding: '0 ${COMPONENT_GUTTER}px',

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

      link: {
        textDecoration: 'none',
        color: COLORS.primary1,
      },
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
    default: {
      width: '100%',
      height: '500px',
    },

    small: {
      width: '100%',
      height: '325px',
    },
  },
}

export const RewardCard = mediaQueries(Radium(RewardCardComponent), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
})
