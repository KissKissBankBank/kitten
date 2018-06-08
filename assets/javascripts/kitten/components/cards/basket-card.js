import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { GarbageIcon } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Title = Radium(TitleBase)
const Text = Radium(TextBase)
const Paragraph = Radium(ParagraphBase)

class BasketCardComponent extends Component {
  static propTypes = {
    titleTag: PropTypes.string,
    titleAmount: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    textDescription: PropTypes.string.isRequired,
    titleBottom: PropTypes.string,
    valueBottom: PropTypes.string,
    manageLinkBottom: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
  }

  static defaultProps = {
    titleTag: 'h1',
    subtitle: '',
    titleBottom: '',
    valueBottom: '',
    manageLinkBottom: '',
  }

  handleDelete() {
    this.props.onDelete()
    console.log(this.props.onDelete())
  }

  render() {
    return (
      <StyleRoot style={styles.card}>
        {this.renderDescription()}
        {this.renderGarbage()}
      </StyleRoot>
    )
  }

  renderDescription() {
    const { titleTag, titleAmount, subtitle, textDescription } = this.props

    return (
      <Marger top="4" bottom="4">
        <Title italic modifier="quinary" margin={false} tag={titleTag}>
          {titleAmount}
        </Title>
        <Marger top="1" bottom=".5">
          <Text weight="bold" size="default">
            {subtitle}
          </Text>
        </Marger>
        <Marger top=".5">
          <Paragraph margin={false} modifier="quaternary">
            {textDescription}
          </Paragraph>
        </Marger>
        <Marger top="2">{this.renderBottomContent()}</Marger>
      </Marger>
    )
  }

  renderGarbage() {
    const { onDelete } = this.props

    return (
      <div style={styles.basket}>
        <ButtonIcon
          type="button"
          title="Garbage Button"
          aria-label="Garbage Button"
          modifier="beryllium"
          size="tiny"
          onDelete={() => {
            alert('toto')
          }}
          onClick={this.handleDelete}
        >
          <GarbageIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>
      </div>
    )
  }

  renderBottomContent() {
    const { titleBottom, valueBottom, manageLinkBottom } = this.props

    return (
      <Fragment>
        {titleBottom && (
          <Text weight="regular" size="tiny">
            {titleBottom}
            <Text weight="light" size="tiny">
              {valueBottom}
            </Text>
          </Text>
        )}

        {manageLinkBottom && (
          <Text
            tag="a"
            href="#"
            color="primary1"
            decoration="none"
            weight="regular"
            size="tiny"
          >
            {manageLinkBottom}
          </Text>
        )}
      </Fragment>
    )
  }
}

const styles = {
  card: {
    display: 'flex',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    paddingLeft: 40,
  },
}

export const BasketCard = Radium(BasketCardComponent)
