import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from './../../../constants/colors-config'
import classNames from 'classnames'
import { pxToRem, stepToRem } from './../../../helpers/utils/typography'

const strikeWidthKeyframes = keyframes`
  0%   { width : 0; }
  100% { width: 100%; }
`

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: gray;

  .k-CheckList__item {
    list-style-type: none;
    display: flex;
    align-items: stretch;
    margin-bottom: ${pxToRem(5)};
    color: ${COLORS.font1};
    background: lime;

    .strike {
      position: relative;
    }

    &::before {
      content: '●';
      color: ${COLORS.line2};
      font-size: ${stepToRem(6)};
      display: flex;
      align-content: center;
      background: blue;
    }

    &::last {
      margin-bottom: 0;
    }
  }

  .k-CheckList__item--done {
    &::before {
      color: ${COLORS.valid};
    }
  }

  .strike {
    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${COLORS.font1};
      animation: ${strikeWidthKeyframes} 1.3s linear forwards;
      animation-iteration-count: 1;
    }
  }
`

export const CheckList = ({ children, ...props }) => {
  return <List {...props}>{children}</List>
}

CheckList.Item = ({ done, children, className, ...props }) => {
  return (
    <li
      className={classNames('k-CheckList__item', className, {
        'k-CheckList__item--done': done,
      })}
      {...props}
    >
      {done ? <span className="strike">{children}</span> : children}
    </li>
  )
}

CheckList.Item.PropTypes = {
  done: PropTypes.bool,
}

LinkBox.defaultProps = {
  done: false,
}
