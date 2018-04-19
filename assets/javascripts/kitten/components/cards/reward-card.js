import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Row as RowBase } from 'kitten/components/grid/row'
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

const Row = Radium(RowBase)
const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Button = Radium(ButtonBase)
const Title = Radium(TitleBase)
const Text = Radium(TextBase)
const Paragraph = Radium(ParagraphBase)
const IconBadge = Radium(IconBadgeBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class RewardCardBase extends Component {
  static propTypes = {
    titleMount: PropTypes.string.isRequired,
    titleDescription: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,

    titleContributors: PropTypes.string,
    titleSmallContributors: PropTypes.string,
    titleDelivery: PropTypes.string,
    titleSmallDelivery: PropTypes.string,
    titleAvailability: PropTypes.string,
    titleSmallAvailability: PropTypes.string,
    valueContributors: PropTypes.string.isRequired,
    valueDelivery: PropTypes.string.isRequired,
    valueAvailability: PropTypes.string.isRequired,

    button: PropTypes.string.isRequired,

    myContribution: PropTypes.string.isRequired,
    manageContribution: PropTypes.string.isRequired,

    imageSrc: PropTypes.string.isRequired,
  }

  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  render() {
    const Tag = this.props.href ? 'a' : 'div'
    const href = this.props.isDisabled ? null : this.props.href

    const styleCard = [
      styles.card,
      this.props.href && styles.card.href,
      this.props.isDisabled && styles.card.isDisabled,
    ]

    return (
      <StyleRoot>
        <Row>
          <Grid>
            <GridCol>
              <Tag
                style={styleCard}
                href={href}
                onClick={this.removeCurrentFocus}
                disabled={this.props.isDisabled}
              >
                <Marger bottom={this.props.viewportIsSOrLess ? 0 : 5}>
                  <Grid style={styles.card.addPadding}>
                    <GridCol col-m="8">{this.renderDescription()}</GridCol>
                    <GridCol col-m="4">{this.renderImage()}</GridCol>
                  </Grid>
                  {this.props.viewportIsSOrLess && (
                    <Fragment>{this.renderChoiceButton()}</Fragment>
                  )}
                </Marger>
              </Tag>
            </GridCol>
          </Grid>
        </Row>
      </StyleRoot>
    )
  }

  renderDescription() {
    const { titleMount, titleDescription, textDescription } = this.props

    return (
      <Fragment>
        <Marger top={this.props.viewportIsSOrLess ? 4 : 5} bottom="2">
          <Marger bottom="2">
            <Title modifier="secondary" tag="h1" margin={false}>
              {parseHtml(titleMount)}
            </Title>
          </Marger>
          <Marger top="2" bottom={this.props.viewportIsMobile ? 3 : 4}>
            <HorizontalStroke size="big" />
          </Marger>
          <Marger top="4" bottom="1">
            <Title modifier="senary" tag="h2" margin={false}>
              {parseHtml(titleDescription)}
            </Title>
          </Marger>
          <Marger top="1" bottom="2">
            <Paragraph modifier="tertiary" margin={false}>
              {parseHtml(textDescription)}
            </Paragraph>
          </Marger>
        </Marger>
        <Marger top="2" bottom={this.props.viewportIsMobile ? 3 : 4}>
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
      <GridCol style={styles.infos} col-m="4" col-l="3">
        {this.props.viewportIsSOrLess && (
          <Text size="tiny" weight="regular">
            {parseHtml(titleSmall)}
            <Text weight="light">{parseHtml(value)}</Text>
          </Text>
        )}

        {!this.props.viewportIsSOrLess && (
          <Fragment>
            <Text weight="bold">{parseHtml(title)}</Text>
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
            <Marger top="2" bottom="2">
              {this.renderMyContribution()}
            </Marger>
            <Marger bottom="0">{this.renderButton()}</Marger>
          </div>
        )}

        {!this.props.viewportIsSOrLess && (
          <div>
            <Marger bottom="2">{this.renderButton()}</Marger>
            <Marger top="2">{this.renderMyContribution()}</Marger>
          </div>
        )}
      </Fragment>
    )
  }

  renderButton() {
    if (!this.props.button || this.props.isCompleted) return

    return (
      <Button size="big" modifier="helium" style={styles.button}>
        {this.props.button}
      </Button>
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
                <IconBadge style={styles.iconBadge}>
                  <CheckedIcon className="k-IconBadge__svg" />
                </IconBadge>
                <div style={styles.myContribution.text}>
                  <Text size="tiny" weight="bold">
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
            <IconBadge style={styles.iconBadge}>
              <CheckedIcon className="k-IconBadge__svg" />
            </IconBadge>
            <div style={styles.myContribution.text}>
              <Text size="tiny" weight="bold">
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

  renderImage() {
    const imageStyles = [
      styles.image,
      { backgroundImage: `url(${this.props.imageSrc})` },
    ]

    return <div style={imageStyles} />
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

    href: {
      textDecoration: 'inherit',
      color: 'inherit',
    },

    isDisabled: {
      filter: 'grayscale(1) opacity(0.4)',
    },
  },

  infos: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 ${COMPONENT_GUTTER}px',
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
      flexWrap: 'wrap',

      link: {
        textDecoration: 'none',
        color: COLORS.primary1,
      },
    },
  },

  button: {
    // width: '0%',
    [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
      width: '100%',
    },
    // [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
    //   width: '100%',
    // },
  },

  iconBadge: {
    backgroundColor: COLORS.valid,
    marginRight: '10px',
  },

  image: {
    width: '100%',
    height: '500px',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}

export const RewardCard = mediaQueries(Radium(RewardCardBase), {
  viewportIsMobile: true,
  viewportIsSOrLess: true,
})
