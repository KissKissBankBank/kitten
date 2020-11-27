import React from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import classNames from 'classnames'
import { Text } from '../../../typography/text'
import {
  StepperIconDefault,
  StepperIconInProgress,
  StepperIconValidated,
} from '../../../../components/steppers/stepper-icon'
import PropTypes from 'prop-types'

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
  flex-wrap: nowrap;
  height: ${pxToRem(80)};
  box-sizing: border-box;
  min-width: min-content;
  padding-right: 40px;
  background-color: ${COLORS.primary6};
  margin: 0;
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    height: ${pxToRem(65)};
  }
`

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    padding-right: ${pxToRem(50)};
  }
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    :not(:last-child) {
      padding-right: ${pxToRem(25)};
    }
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
  border-radius: ${pxToRem(6)};

  &:focus {
    outline: ${COLORS.primary3} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }
`

const StepperIcon = ({ state }) => {
  switch (state) {
    case 'progress':
      return <StepperIconInProgress />
    case 'validated':
      return <StepperIconValidated />
    default:
      return <StepperIconDefault />
  }
}

export const StepperItem = ({ children, state, ...props }) => {
  return (
    <ItemWrapper state={state} {...props}>
      <StepperText weight="regular" size="tiny" tabIndex="0">
        <StepperIcon state={state} />
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
        <StepperIcon state={state} />
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

export const Stepper = ({ children, ...others }) => {
  return (
    <Wrapper>
      <List {...others}>{children}</List>
    </Wrapper>
  )
}

Stepper.propTypes = {}

Stepper.Item = StepperItem
Stepper.Link = StepperLink
