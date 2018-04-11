import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Container } from 'kitten/components/grid/container'
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
import { ScreenConfig } from 'kitten/constants/screen-config'
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

    myContribution: PropTypes.string.isRequired,
    manageContribution: PropTypes.string.isRequired,

    imageSrc: PropTypes.string,
  }

  render() {
    return (
      <Container style={styles.card}>
        <Marger bottom="5">
          <Grid>
            <GridCol col-l="12">
              <Grid>
                <GridCol col-l="8">{this.renderDescription()}</GridCol>
                <GridCol col-l="4">{this.renderImage()}</GridCol>
              </Grid>
            </GridCol>
          </Grid>
        </Marger>
      </Container>
    )
  }

  renderDescription() {
    const { titleMount, titleDescription, textDescription } = this.props

    return (
      <Fragment>
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
        <Marger top="4">{this.renderChoiceButton()}</Marger>
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

  renderChoiceButton() {
    return (
      <div style={styles.choiceButton}>
        <Button size="big" modifier="helium" style={styles.choiceButton.button}>
          {this.props.button}
        </Button>
        {this.renderMyContribution()}
      </div>
    )
  }

  renderMyContribution() {
    const { myContribution, manageContribution } = this.props

    return (
      <div style={styles.myContribution}>
        <IconBadge style={styles.iconBadge}>
          <CheckedIcon className="k-IconBadge__svg" />
        </IconBadge>
        <div style={styles.myContribution.text}>
          <Text size="tiny" weight="bold">
            {myContribution}
            <br />
            <a href="#" style={styles.myContribution.text.link}>
              {manageContribution}
            </a>
          </Text>
        </div>
      </div>
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
    paddingLeft: '115px',
    paddingRight: 0,
    display: 'flex',
  },

  infos: {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${COMPONENT_GUTTER}px`,
  },

  choiceButton: {
    display: 'flex',

    button: {
      marginRight: '20px',
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

  iconBadge: {
    backgroundColor: COLORS.valid,
    marginRight: '10px',
  },

  image: {
    width: '100%',
    height: '488px',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}

export const RewardCard = Radium(RewardCardBase)
