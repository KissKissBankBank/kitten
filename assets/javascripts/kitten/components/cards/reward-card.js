import React, { Component } from 'react'
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
import { HorizontalStroke as HorizontalStrokeBase } from 'kitten/components/layout/horizontal-stroke'
import { ScreenConfig } from 'kitten/constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import COLORS from 'kitten/constants/colors-config'

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

    titleContributors: PropTypes.string.isRequired,
    titleDelivery: PropTypes.string.isRequired,
    titleAvailability: PropTypes.string.isRequired,
    valueContributors: PropTypes.string.isRequired,
    valueDelivery: PropTypes.string.isRequired,
    valueAvailability: PropTypes.string.isRequired,

    button: PropTypes.string.isRequired,
  }

  render() {
    return (
      <StyleRoot style={styles.card}>
        <Grid>
          {this.renderDescription()}
          {this.renderImage()}
        </Grid>
      </StyleRoot>
    )
  }

  renderDescription() {
    const { titleMount, titleDescription, textDescription } = this.props

    return (
      <Marger bottom="5">
        <GridCol col-l="8">
          <Marger top="5" bottom="2">
            <Marger bottom="2">
              <Title modifier="secondary" tag="h1" margin={false}>
                {titleMount}
              </Title>
            </Marger>
            <Marger top="2" bottom="4">
              <HorizontalStroke size="big" />
            </Marger>
            <Marger top="4" bottom="1">
              <Title modifier="senary" tag="h2" margin={false}>
                {titleDescription}
              </Title>
            </Marger>
            <Marger top="1" bottom="2">
              <Paragraph modifier="tertiary" margin={false}>
                {textDescription}
              </Paragraph>
            </Marger>
          </Marger>
          <Marger top="2" bottom="4">
            {this.renderInfos()}
          </Marger>
          <Marger top="4">{this.renderButton()}</Marger>
        </GridCol>
      </Marger>
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
    } = this.props

    return (
      <Grid>
        {this.renderInfo(titleContributors, valueContributors)}
        {this.renderInfo(titleDelivery, valueDelivery)}
        {this.renderInfo(titleAvailability, valueAvailability)}
      </Grid>
    )
  }

  renderInfo(title, value) {
    if (!title && !value) return

    return (
      <GridCol col-l="3" style={styles.infos}>
        <Text weight="bold">{title}</Text>
        <Text>{value}</Text>
      </GridCol>
    )
  }

  renderMyContribution() {
    const { myContribution } = this.props

    return (
      <div>
        <IconBadge />
        <Paragraph>{myContribution}</Paragraph>
      </div>
    )
  }

  renderButton() {
    return (
      <Button size="big" modifier="helium">
        {this.props.button}
      </Button>
    )
  }

  renderImage() {
    const imageStyles = [
      styles.image,
      { backgroundImage: `url(${this.props.imageSrc})` },
    ]

    return (
      <GridCol col-l="2">
        <div style={imageStyles} />
      </GridCol>
    )
  }
}

const COMPONENT_GUTTER = 10

const styles = {
  card: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    paddingLeft: '115px',
  },

  infos: {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${COMPONENT_GUTTER}px`,
  },

  image: {
    width: `calc(100% + ${CONTAINER_PADDING}px)`,
    height: '80%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
      width: `calc(100% + ${CONTAINER_PADDING * 2}px)`,
      height: '100vw',
      marginLeft: `-${CONTAINER_PADDING}px`,
    },

    [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
      width: `calc(100% + ${CONTAINER_PADDING_MOBILE * 2}px)`,
      marginLeft: `-${CONTAINER_PADDING_MOBILE}px`,
    },
  },
}

export const RewardCard = Radium(RewardCardBase)
