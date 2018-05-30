import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button } from 'kitten/components/buttons/button'
import { Text } from 'kitten/components/typography/text'
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)

class CommentComponent extends Component {
  static PropTypes = {
    ownerName: PropTypes.string.isRequired,
    ownerImgProps: PropTypes.object.isRequired,
    ownerTime: PropTypes.string.isRequired,

    inputName: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
  }

  static defaultProps = {
    isDisabled: false,
  }

  render() {
    const {
      ownerImgProps,
      ownerName,
      ownerTime,
      inputName,
      isDisabled,
      isValid,
      placeholder,
      viewportIsMobile,
      viewportIsTabletOrLess,
      ...others
    } = this.props

    return (
      <StyleRoot>
        <Grid>
          <GridCol col="2">{this.renderOwner()}</GridCol>
          <GridCol col="10">{this.renderInput()}</GridCol>
        </Grid>
      </StyleRoot>
    )
  }

  renderOwner() {
    const {
      ownerImgProps,
      ownerName,
      ownerTime,
      viewportIsTabletOrLess,
      viewportIsMobile,
    } = this.props

    return (
      <Fragment>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge
            withoutPointerEvents
            img={ownerImgProps}
          />
        </Marger>

        {!viewportIsTabletOrLess && (
          <Marger top="1">
            <Text size="tiny" weight="regular">
              {ownerName}
            </Text>
          </Marger>
        )}

        <Text size="nano" weight="light">
          {ownerTime}
        </Text>
      </Fragment>
    )
  }

  renderInput() {
    const { inputName, isDisabled, isValid, placeholder } = this.props

    const styleInput = [
      styles.input.textarea,
      isDisabled && styles.input.textarea.isDisabled,
      isValid && styles.input.textarea.isValid,
    ]

    return (
      <div style={styles.input}>
        <textarea
          style={styleInput}
          name={inputName}
          disabled={isDisabled}
          placeholder={placeholder}
          isValid={isValid}
        />
      </div>
    )
  }
}

const inputHoveredAndFocused = {
  outline: 'none',
  borderColor: COLORS.line2,
}
// const placeholderPseudoClass = {
//   color: COLORS.error,
// }

const styles = {
  input: {
    position: 'relative',
    display: 'flex',

    textarea: {
      width: '100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      color: COLORS.font1,
      padding: '30px',
      fontSize: '16px',

      ':hover': inputHoveredAndFocused,
      ':focus': inputHoveredAndFocused,

      isDisabled: {
        borderColor: COLORS.line1,
        color: COLORS.font2,
        backgroundColor: COLORS.line1,
      },

      isValid: {
        backgroundColor: COLORS.background3,
        borderColor: COLORS.background3,
      },

      // '::-webkit-input-placeholder': placeholderPseudoClass,
      // '::placeholder': placeholderPseudoClass,
    },
    // ':-moz-placeholder': placeholderPseudoClass,
    // '::-moz-placeholder': placeholderPseudoClass,
  },
}

export const Comment = mediaQueries(Radium(CommentComponent), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true,
})
