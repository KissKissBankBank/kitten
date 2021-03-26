import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'

import { StepperIcon } from '../../../components/atoms/stepper-icon'

const StyledStepper = styled.nav`
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  color: ${COLORS.font1};
  text-align: left;

  .k-Stepper__list {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: ${pxToRem(15)} 0;
    list-style: none;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .k-Stepper__list--alignStart {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .k-Stepper__item {
    margin: 0 ${pxToRem(20)};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      margin: ${pxToRem(20 / 3)} 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

  }
  .k-Stepper__list--alignStart .k-Stepper__item {
    margin: 0 ${pxToRem(20)} ${pxToRem((20 / 3) * 2)} 0;
  }

  .k-Stepper__item--tinySpacing {
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      margin-left: ${pxToRem(15)};
      margin-right: ${pxToRem(15)};
    }
  }

  // Link
  .k-Stepper__link {
    display: flex;
    align-items: center;
    color: ${COLORS.font1};
    text-decoration: none;
    cursor: pointer;

    transition: .2s color;

    &:hover {
      color: ${COLORS.primary1};
      text-decoration: none;
    }

    &:active {
      color: ${COLORS.primary1};
      text-decoration: none;
    }
  }

  .k-Stepper__link--inProgress {
    color: ${COLORS.primary1};

    &:hover {
      color: ${COLORS.primary2};
      text-decoration: none;
    }

    &:active {
      color: ${COLORS.primary3};
      text-decoration: none;
    }
  }

  .k-Stepper__link--inactive {
    color: ${COLORS.font2};
    cursor: not-allowed;

    &:hover,
    &:active {
      color: ${COLORS.font2};
    }
  }

  .k-Stepper__icon {
    margin-right: ${pxToRem(10)};
  }

  .k-Stepper__break {
    display: block;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      display: none;
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      display: none;
    }
  }
`

export const Stepper = ({ items, withAlignStart, withTinySpacing }) => {
  const insertLineBreaks = text => {
    const regex = /(\n)/i
    const brClassNames = classNames({
      'k-Stepper__break': !withAlignStart,
    })

    return text
      .split(regex)
      .map((line, index) =>
        line.match(regex) ? <br className={brClassNames} key={index} /> : line,
      )
  }

  const Link = ({ href, iconType, linkClassNames, text, ...other }) => {
    const Tag = href ? 'a' : 'span'
    const className = classNames('k-Stepper__link', linkClassNames)

    return (
      <Tag className={className} href={href} {...other}>
        <StepperIcon
          state={iconType}
          className={classNames(
            'k-Stepper__icon',
            `k-Stepper__icon--${iconType}`,
          )}
        />
        {insertLineBreaks(text)}
      </Tag>
    )
  }

  return (
    <StyledStepper className="k-Stepper" role="navigation">
      <ul
        className={classNames('k-Stepper__list', {
          'k-Stepper__list--alignStart': withAlignStart,
        })}
      >
        {items.map((item, index) => (
          <li
            className={classNames('k-Stepper__item', {
              'k-Stepper__item--tinySpacing': withTinySpacing,
            })}
            key={index}
          >
            <Link {...item} />
          </li>
        ))}
      </ul>
    </StyledStepper>
  )
}

Stepper.propTypes = {
  withAlignStart: PropTypes.bool,
  withTinySpacing: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      iconType: PropTypes.oneOf(['default', 'inProgress', 'validated']),
      linkClassNames: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: [],
}
