import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const StyledInfoLines = styled.dl`
  &.k-InfoLines--withBorderRadius {
    border-radius: ${pxToRem(8)};
  }

  &.k-InfoLines--withLeftRightBorder {
    border-left: ${pxToRem(1)} solid var(--InfoLines-borderColor);
    border-right: ${pxToRem(1)} solid var(--InfoLines-borderColor);

    .k-InfoLines__line {
      padding: ${pxToRem(10)} ${pxToRem(15)};
    }
  }

  &:not(.k-InfoLines--withoutTopBottomBorder) {
    border-top: ${pxToRem(1)} solid var(--InfoLines-borderColor);
    border-bottom: ${pxToRem(1)} solid var(--InfoLines-borderColor);
  }

  .k-InfoLines__line {
    box-sizing: border-box;
    display: flex;
    padding: ${pxToRem(10)} 0;
    min-height: ${pxToRem(60)};
    gap: ${pxToRem(5)} ${pxToRem(15)};
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    &:not(:first-child) {
      border-top: ${pxToRem(1)} solid var(--InfoLines-borderColor);
    }
  }

  .k-InfoLines__key,
  .k-InfoLines__value {
    margin: 0;
  }

  &:not(.k-InfoLines--withoutResponsive) {
    @media (max-width: ${ScreenConfig.S.max}px) {
      .k-InfoLines__line {
        align-items: flex-start;
        flex-direction: column;
      }
      .k-InfoLines__key {
        flex: 0;
      }
    }
  }
`

export const InfoLines = ({
  className,
  style,
  infos,
  withBorderRadius,
  withLeftRightBorder,
  withoutTopBottomBorder,
  withoutResponsive,
  borderColor,
  descriptionTagList,
  titleTagList,
  itemTagList,
  ...others
}) => {
  const TitleElement = titleTagList
  const ItemElement = itemTagList

  return (
    <StyledInfoLines
      className={classNames('k-Infolines', className, {
        'k-InfoLines--withBorderRadius': withBorderRadius,
        'k-InfoLines--withLeftRightBorder': withLeftRightBorder,
        'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder,
        'k-InfoLines--withoutResponsive': withoutResponsive,
      })}
      style={{ ...style, '--InfoLines-borderColor': borderColor }}
      as={descriptionTagList}
      {...others}
    >
      {infos.map(info => (
        <div className="k-InfoLines__line" key={info.id || info.key}>
          <TitleElement className="k-InfoLines__key">{info.key}</TitleElement>
          <ItemElement className="k-InfoLines__value">{info.value}</ItemElement>
        </div>
      ))}
    </StyledInfoLines>
  )
}

InfoLines.propTypes = {
  infos: PropTypes.array.isRequired,
  borderColor: PropTypes.string,
  withBorderRadius: PropTypes.bool,
  withLeftRightBorder: PropTypes.bool,
  withoutTopBottomBorder: PropTypes.bool,
  withoutResponsive: PropTypes.bool,
  descriptionTagList: PropTypes.string,
  titleTagList: PropTypes.string,
  itemTagList: PropTypes.string,
}

InfoLines.defaultProps = {
  borderColor: COLORS.line2,
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd',
}
