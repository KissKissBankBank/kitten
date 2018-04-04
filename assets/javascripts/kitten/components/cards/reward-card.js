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
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { HorizontalStroke as HorizontalStrokeBase }
  from 'kitten/components/layout/horizontal-stroke'
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
const Paragraph = Radium(ParagraphBase)
const IconBadge = Radium(IconBadgeBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class RewardCardBase extends Component {
  static propTypes = {
    titleMount: PropTypes.string.isRequired,
    titleDescription: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div style={ styles.card }>
        { this.renderDescription() }
        { this.renderImage() }
      </div>
    )
  }

  renderDescription() {
    const {
      titleMount,
      titleDescription,
      textDescription,
    } = this.props

    return (
      <Grid>
        <GridCol
          col-l="8"
        >
          <Marger top="5" bottom="5">
            <Title modifier="secondary" tag="h1">
              { titleMount }
            </Title>
            <HorizontalStroke size="big" />
            <Title modifier="senary" tag="h2">
              { titleDescription }
            </Title>
            <Paragraph modifier="tertiary">
              { textDescription }
            </Paragraph>
          </Marger>
        </GridCol>
      </Grid>
    )
  }

  renderImage() {
    return (
      <GridCol
        col-l="2"
      >
        <div style={ styles.image } />
      </GridCol>
    )
  }
}

const styles = {
  card: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    paddingLeft: '115px',
  },

  image: {
    width: `calc(100% + ${CONTAINER_PADDING}px)`,
    height: '100%',
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
