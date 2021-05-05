import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

const StyledBulletList = styled.ul`
  margin: ${pxToRem(0)};
  padding: ${pxToRem(0)};
  list-style: none;
  text-align: left;

  .k-BulletList__item {
    margin: ${pxToRem(5)} ${pxToRem(16)};
    display: block;
    ${TYPOGRAPHY.fontStyles.light};
    line-height: 1.5;
    color: ${COLORS.font1};

    &:before {
      margin-left: -${pxToRem(16)};
      margin-right: ${pxToRem(10)};
      box-sizing: border-box;
      border-radius: 50%;
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      display: inline-block;
      vertical-align: middle;
      background-color: ${COLORS.font1};
      content: '';
    }
  }

  &.k-BulletList--tiny .k-BulletList__item {
    font-size: ${stepToRem(-2)};

    &:before {
      width: ${pxToRem(4)};
      height: ${pxToRem(4)};
    }
  }

  &.k-BulletList--regular .k-BulletList__item {
    font-size: ${stepToRem(-1)};
  }

  &.k-BulletList--large .k-BulletList__item {
    font-size: ${stepToRem(0)};
  }

  &.k-BulletList--big .k-BulletList__item {
    font-size: ${stepToRem(1)};
    margin: ${pxToRem(10)} 0;
  }

  &.k-BulletList--huge .k-BulletList__item {
    font-size: ${stepToRem(2)};
    margin: ${pxToRem(10)} 0;
  }
`

export const BulletList = ({ items, size, className, ...others }) => {
  return (
    <StyledBulletList
      className={classNames(
        'k-BulletList',
        `k-BulletList--${size}`,
        className,
      )}
      {...others}
    >
      {items.map(({ item, key, ...itemOthers }) => (
        <li
          key={key}
          {...itemOthers}
          className={classNames(
            'k-BulletList__item',
            itemOthers.className,
          )}
        >
          {item}
        </li>
      ))}
    </StyledBulletList>
  )
}

BulletList.propTypes = {
  size: PropTypes.oneOf(['tiny', 'regular', 'large', 'big', 'huge']),
  items: PropTypes.array,
}

BulletList.defaultProps = {
  size: 'regular',
  items: [],
}
