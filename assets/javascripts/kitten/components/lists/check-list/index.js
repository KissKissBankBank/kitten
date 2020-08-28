import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from './../../../constants/colors-config'
import classNames from 'classnames'
import { pxToRem, stepToRem } from './../../../helpers/utils/typography'

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  .k-CheckList__item {
    list-style-type: none;
    display: flex;
    align-items: stretch;
    margin-bottom: ${pxToRem(10)};
    color: ${COLORS.font1};
    font-size: ${stepToRem(-1)};
    line-height: 1.2;

    .strike {
      text-decoration: line-through;
    }

    &:before {
      content: '●';
      color: ${COLORS.line2};
      padding-right: ${pxToRem(10)};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .k-CheckList__item--done {
    &:before {
      color: ${COLORS.valid};
    }
  }
`

const a11yProps = (a11yText, done) => {
  return {
    'aria-label': done ? a11yText.done : a11yText.default,
  }
}

export const CheckList = ({ children, ...props }) => {
  return <List {...props}>{children}</List>
}

CheckList.Item = ({ done, children, a11yText, className, ...props }) => {
  return (
    <li
      className={classNames('k-CheckList__item', className, {
        'k-CheckList__item--done': done,
      })}
      {...props}
      {...a11yProps(a11yText, done)}
    >
      {done ? <span className="strike">{children}</span> : children}
    </li>
  )
}

CheckList.Item.PropTypes = {
  done: PropTypes.bool,
  a11yText: PropTypes.shape({
    default: PropTypes.string,
    done: PropTypes.string,
  }),
}

CheckList.defaultProps = {
  done: false,
  a11yText: {
    default: 'Élément non validé',
    done: 'Élément validé',
  },
}
