import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'

const StyledManagerCard = styled.article`
  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background-color: var(--color-grey-000);
  padding: ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(20)} ${pxToRem(20)};

  transition: background-color var(--transition), border-color var(--transition);

  border: var(--border);
  border-radius: var(--border-radius-m);

  display: flex;
  gap: 0 ${pxToRem(10)};

  &.k-ManagerCard--hasAction {
    &:hover {
      background-color: var(--color-grey-100);
      border-color: var(--color-grey-500);
    }

    &:active {
      background-color: var(--color-grey-200);
      border-color: var(--color-grey-600);
    }
  }

  @media ${mq.mobile} {
    flex-direction: column;
  }

  .k-ManagerCard__action {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-m);
    cursor: pointer;
    z-index: 1;

    :focus-visible {
      outline: auto;
    }
  }

  .k-ManagerCard__cell {
    flex: 1 1 auto;
  }

  .k-ManagerCard__lastCell {
    flex: 0 0 auto;
    z-index: 2;
    display: flex;
    align-items: stretch;

    @media ${mq.mq} {
      justify-content: flex-end;
      margin-bottom: ${pxToRem(-20)};
      margin-right: ${pxToRem(-30)};
    }

    @media ${mq.tabletAndDesktop} {
      justify-content: stretch;
      margin: ${pxToRem(-20)} ${pxToRem(-30)};
    }

    .k-DropdownMenu .k-DropdownMenu__button {
      box-sizing: border-box;
      display: flex;
      justify-content: center;

      @media ${mq.mobile} {
        align-items: flex-end;
        padding: ${pxToRem(20)} ${pxToRem(30)};
      }

      @media ${mq.tabletAndDesktop} {
        align-items: center;
        height: 100%;
        padding: 0 ${pxToRem(30)};
      }

      &:focus-visible .k-DropdownMenu__button__inside {
        outline: auto;
        outline-offset: ${pxToRem(-2)};
      }
    }
  }
`

export const ManagerCard = ({
  className = '',
  children,
  actionProps = {},
  ...props
}) => {
  const {
    className: actionClassName,
    as: actionAs = 'a',
    ...action
  } = actionProps
  const ActionElement = actionAs
  const hasAction = Object.keys(actionProps).length > 0

  return (
    <StyledManagerCard
      className={classNames('k-ManagerCard', className, {
        'k-ManagerCard--hasAction': hasAction,
      })}
      {...props}
    >
      {hasAction && (
        <ActionElement
          className={classNames('k-ManagerCard__action', actionClassName)}
          {...action}
        />
      )}

      {children}
    </StyledManagerCard>
  )
}

ManagerCard.Cell = ({ className, style, ...props }) => {
  return (
    <div {...props} className={classNames('k-ManagerCard__cell', className)} />
  )
}

ManagerCard.LastCell = ({ className, style, ...props }) => {
  return (
    <div
      {...props}
      className={classNames('k-ManagerCard__lastCell', className)}
    />
  )
}
