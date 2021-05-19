import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { LongArrowIcon } from '../../../../components/icons/long-arrow-icon'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { HourglassIcon } from '../../../../components/icons/hourglass-icon'
import classNames from 'classnames'
import { Title } from './title'
import { STATUS_CLASSNAME } from '../index'

const STATUS_SIZE = 30

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;

  .k-VerticalProgress--status {
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${pxToRem(STATUS_SIZE)};
    height: ${pxToRem(STATUS_SIZE)};
    border-radius: ${pxToRem(STATUS_SIZE)};
    box-sizing: border-box;
    margin-right: ${pxToRem(20)};

    background-color: ${COLORS.background1};

    &.k-VerticalProgress--status__actions {
      background-color: ${COLORS.orange};
    }
    &.k-VerticalProgress--status__waiting {
      background-color: ${COLORS.font3};
    }
    &.k-VerticalProgress--status__publish {
      background-color: ${COLORS.line3};
    }
    &.k-VerticalProgress--status__valid {
      background-color: ${COLORS.primary1};
    }
  }
`

export class Status extends Component {
  render() {
    const {
      actions,
      waiting,
      publish,
      valid,
      title,
      titleProps,
      ...other
    } = this.props

    return (
      <StyledWrapper>
        <span
          {...other}
          className={classNames(
            STATUS_CLASSNAME,
            'k-VerticalProgress--status',
            {
              'k-VerticalProgress--status__actions': actions,
              'k-VerticalProgress--status__waiting': waiting,
              'k-VerticalProgress--status__publish': publish,
              'k-VerticalProgress--status__valid': valid,
            },
          )}
        >
          {this.iconByStatus() || children}
        </span>
        <Title 
          actions={actions}
          waiting={waiting}
          publish={publish}
          valid={valid}
          {...titleProps}
        >
          Toto
        </Title>
      </StyledWrapper>
    )
  }

  iconByStatus = () => {
    const { actions, waiting, publish, valid } = this.props

    if (actions) return <LongArrowIcon color={COLORS.background1} direction="right" />

    if (waiting) return <HourglassIcon color={COLORS.background1} width="10" title={null} />

    if (publish) return <CheckedIcon width="10" title={null} />

    if (valid) return <LongArrowIcon color={COLORS.background1} direction="right" />

    return null
  }
}

Status.propTypes = {
  actions: PropTypes.bool,
  waiting: PropTypes.bool,
  publish: PropTypes.bool,
  valid: PropTypes.bool,
  title: PropTypes.string,

}

Status.defaultProps = {
  actions: false,
  waiting: false,
  publish: false,
  valid: false,
}
