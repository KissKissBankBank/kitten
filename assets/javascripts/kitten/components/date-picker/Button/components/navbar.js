import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../../components/icons/arrow-icon'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'

export class Navbar extends Component {
  render() {
    const {
      onPreviousClick,
      onNextClick,
      className,
      iconColor,
      labels,
    } = this.props

    return (
      <div className={className}>
        <Button
          aria-label={labels.previoustMonth}
          onClick={() => onPreviousClick()}
          icon
        >
          <ArrowIcon
            version="solid"
            fill={iconColor}
            direction="left"
            width="15"
            height="15"
          />
        </Button>

        <Button
          aria-label={labels.previoustMonth}
          onClick={() => onNextClick()}
          icon
        >
          <ArrowIcon
            version="solid"
            fill={iconColor}
            direction="right"
            width="15"
            height="15"
          />
        </Button>
      </div>
    )
  }
}
