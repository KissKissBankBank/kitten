import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { withMediaQueries } from 'kitten/hoc/media-queries'

const Text = Radium(TextBase)
const Title = Radium(TitleBase)

class CounterBlockBase extends Component {
  render() {
    const {
      title,
      titleTag,
      subTitle,
      subTitleTag,
      counter,
      viewportIsSOrLess,
      titleProps,
    } = this.props
    const titleSize = viewportIsSOrLess ? 'senary' : 'tertiary'
    const margin = viewportIsSOrLess ? 2 : 4

    return (
      <StyleRoot style={styles.counterBlock}>
        <Marger bottom={margin}>
          <Title modifier={titleSize} {...titleProps}>
            {title}
          </Title>
        </Marger>
        <Text
          style={styles.counterText}
          fontStyle="italic"
          weight="bold"
          tag={titleTag}
        >
          {counter}
        </Text>
        <Marger top={margin}>
          <Title
            style={styles.subTitle}
            modifier="senary"
            margin={false}
            tag={subTitleTag}
            italic
          >
            {subTitle}
          </Title>
        </Marger>
      </StyleRoot>
    )
  }
}

CounterBlockBase.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0',
}

const styles = {
  counterBlock: {
    textAlign: 'center',
  },

  counterText: {
    fontSize: '4.125rem',
    lineHeight: 0.7,
    whiteSpace: 'nowrap',
    display: 'block',
    paddingBottom: 4,
    margin: 0,

    [`@media (min-width: ${ScreenConfig.M.min}px)`]: {
      fontSize: '8.25rem',
      paddingBottom: 7,
    },

    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      fontSize: '9.9rem',
      paddingBottom: 10,
    },
  },

  subTitle: {
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      fontSize: '.875rem',
    },
  },
}

export const CounterBlock = withMediaQueries({
  viewportIsSOrLess: true,
})(CounterBlockBase)
