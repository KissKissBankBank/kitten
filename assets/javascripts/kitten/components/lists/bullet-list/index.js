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

  .k-BulletList__item--tiny {
    font-size: ${stepToRem(-2)};
    &:before {
      width: ${pxToRem(4)};
      height: ${pxToRem(4)};
    }
  }

  .k-BulletList__item--regular {
    font-size: ${stepToRem(-1)};
  }

  .k-BulletList__item--large {
    font-size: ${stepToRem(0)};
  }

  .k-BulletList__item--big {
    font-size: ${stepToRem(1)};
    margin: ${pxToRem(10)} 0;
  }

  .k-BulletList__item--huge {
    font-size: ${stepToRem(2)};
    margin: ${pxToRem(10)} 0;
  }
`

export const BulletList = ({ items, size, className, ...others }) => {
  return (
    <StyledBulletList className="k-BulletList" {...others}>
      {items.map(({ item, key, ...itemOthers }) => (
        <li
          className={classNames(
            'k-BulletList__item',
            `k-BulletList__item--${size}`,
            className,
          )}
          key={key}
          {...itemOthers}
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
  size: null,
  items: [],
}
