import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'

const StyledPeopleCard = styled.article`
  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background-color: var(--color-grey-000);
  padding: ${pxToRem(15)}};

  transition: background-color var(--transition), border-color var(--transition);

  border: var(--border);
  border-radius: var(--border-radius-m);

  display: flex;
  gap: 0 ${pxToRem(15)};
  height: ${pxToRem(63)};

  &.k-PeopleCard--hasAction {
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
    flex-direction: row;
  }

  .k-PeopleCard__action {
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

  .k-PeopleCard__avatar {
    display: flex;

    .k-Avatar__imageWrapper {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
      box-sizing: content-box;
    }
  }

  .k-PeopleCard__cell {
    flex: 1 1 auto;
  }

  .k-PeopleCard__lastCell {
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

export const PeopleCard = ({
  className = '',
  children,
  ...props
}) => {

  return (
    <StyledPeopleCard
      className={classNames('k-PeopleCard', className)}
      {...props}
    >
      {children}
    </StyledPeopleCard>
  )
}

PeopleCard.Avatar = ({ className, style, ...props }) => {
  return (
    <div {...props} className={classNames('k-PeopleCard__avatar', className)} />
  )
}

PeopleCard.Cell = ({ className, style, ...props }) => {
  return (
    <div {...props} className={classNames('k-PeopleCard__cell', className)} />
  )
}

PeopleCard.LastCell = ({ className, style, ...props }) => {
  return (
    <div
      {...props}
      className={classNames('k-PeopleCard__lastCell', className)}
    />
  )
}
