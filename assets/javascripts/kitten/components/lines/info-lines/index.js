import React, { PureComponent } from 'react'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledInfoLines = styled.div`
  border-top: ${pxToRem(1)} solid ${COLORS.line1};

  ${({ withBorderRadius }) =>
    withBorderRadius &&
    css`
      border-radius: ${pxToRem(8)};
    `}

  ${({ withLeftRightBorder }) =>
    withLeftRightBorder &&
    css`
      border-left: ${pxToRem(1)} solid ${COLORS.line1};
      border-right: ${pxToRem(1)} solid ${COLORS.line1};
    `}

/// checker le niveau class enfant
  ${({ withoutResponsive }) =>
    withoutResponsive &&
    css`
      @media (min-width: ${ScreenConfig.M.min}px) {
        flex-direction: row;
      }
    `}

  ${({ withoutTopBottomBorder }) =>
    withoutTopBottomBorder &&
    css`
      border-top: none;

      &:last-child {
        border-bottom: none;
      }
    `}
`

const StyledLine = styled.div`
  display: flex;
  padding: ${pxToRem(15)};
  border-bottom: ${pxToRem(1)} solid ${COLORS.line1};

  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-direction: column;
  }
`

const StyledValue = styled.div`
  @media (min-width: ${ScreenConfig.M.min}px) {
    margin-left: auto;
    text-align: right;
  }
`

export class InfoLines extends PureComponent {
  constructor(props) {
    super(props)

    this.renderInfo = this.renderInfo.bind(this)
  }

  renderInfos() {
    return this.props.infos.map(this.renderInfo)
  }

  renderInfo(element) {
    const { key, value, id, className, ...others } = element

    const infoClassName = classNames('k-InfoLines__line', className)

    return (
      <StyledLine {...others} borderColor={borderColor} key={id}>
        <div>{key}</div>

        <StyledValue>{value}</StyledValue>
      </StyledLine>
    )
  }

  render() {
    const {
      borderColor,
      className,
      infos,
      withBorderRadius,
      withLeftRightBorder,
      withoutResponsive,
      withoutTopBottomBorder,
      ...others
    } = this.props

    return (
      <StyledInfoLines
        {...others}
        borderColor={borderColor}
        withBorderRadius={withBorderRadius}
        withLeftRightBorder={withLeftRightBorder}
        withoutResponsive={withoutResponsive}
        withoutTopBottomBorder={withoutTopBottomBorder}
      >
        {this.renderInfos()}
      </StyledInfoLines>
    )
  }
}

InfoLines.defaultProps = {
  borderColor: null,
  className: null,
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutResponsive: false,
  withoutTopBottomBorder: false,
}
