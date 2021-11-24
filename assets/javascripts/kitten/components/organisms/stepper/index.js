import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import styled, { css } from 'styled-components'
import classNames from 'classnames'

import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { Text } from '../../../components/atoms/typography/text'
import { StepperIcon } from '../../../components/atoms/stepper-icon'

import { Stepper as DeprecatedStepper } from './deprecated'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: thin;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(65)};
  flex-wrap: nowrap;
  box-sizing: border-box;
  min-width: min-content;
  padding-right: 40px;
  background-color: ${COLORS.primary6};
  margin: 0;
  gap: ${pxToRem(25)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    height: ${pxToRem(80)};
    gap: ${pxToRem(50)};
  }
`

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;

  .k-Stepper__icon {
    margin-right: ${pxToRem(10)};
  }

  ${props =>
    props.state === 'progress' &&
    css`
      color: ${COLORS.primary1};
    `}

  ${props =>
    props.pointer &&
    css`
      cursor: pointer;
    `}
`

const StepperText = styled(Text)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: color 0.2s ease;
`

export const StepperItem = ({ children, state, ...props }) => {
  return (
    <ItemWrapper state={state} {...props}>
      <StepperText weight="regular" size="tiny" tabIndex="0">
        <StepperIcon className="k-Stepper__icon" state={state} />
        {children}
      </StepperText>
    </ItemWrapper>
  )
}

StepperItem.propTypes = {
  state: PropTypes.oneOf(['default', 'progress', 'validated']),
  pointer: PropTypes.bool,
}

StepperItem.defaultProps = {
  state: 'default',
  pointer: false,
}

export const StepperLink = ({
  children,
  state,
  href,
  external,
  linkProps,
  ...props
}) => {
  return (
    <ItemWrapper state={state} {...props}>
      <StepperText
        weight="regular"
        size="tiny"
        tag="a"
        className={classNames('k-u-link', {
          'k-u-link-font1': state !== 'progress',
          'k-u-link-primary1': state === 'progress',
        })}
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'nofollow noopener noreferrer' : ''}
        {...linkProps}
      >
        <StepperIcon className="k-Stepper__icon" state={state} />
        {children}
      </StepperText>
    </ItemWrapper>
  )
}

StepperLink.propTypes = {
  href: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['default', 'progress', 'validated']),
  external: PropTypes.bool,
  linkProps: PropTypes.object,
}

StepperLink.defaultProps = {
  state: 'default',
  external: false,
  linkProps: {},
}

export const Stepper = ({ children, items, ...others }) => {
  if (!!items) {
    return <DeprecatedStepper items={items} {...others} />
  }

  return (
    <Wrapper>
      <List {...others}>{children}</List>
    </Wrapper>
  )
}

Stepper.propTypes = {
  items: deprecated(PropTypes.array, 'Use subcomponents instead of items prop'),
}

Stepper.Item = StepperItem
Stepper.Link = StepperLink
