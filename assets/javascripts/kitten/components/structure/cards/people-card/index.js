import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'
import { AvatarWithTextAndBadge } from '../../../information/avatar-with-text-and-badge'
import { PeopleCircleIconNext } from '../../../graphics/icons-next/people-circle-icon-next'

const StyledPeopleCard = styled.article`
  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background-color: var(--color-grey-000);
  padding: ${pxToRem(15)}};

  border: var(--border);
  border-radius: var(--border-radius-s);

  display: flex;
  gap: 0 ${pxToRem(15)};
  height: ${pxToRem(63)};

  @media ${mq.mobile} {
    flex-direction: row;
  }

  .k-PeopleCard__image {
    display: flex;
    align-items: center;
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

PeopleCard.Image = ({
  className,
  style,
  peopleAvatar = true,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames('k-PeopleCard__image', className)}
    >
      {peopleAvatar ? (
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image
            alt=""
            size="small"
            src="/kitten-0.jpg"
          />
        </AvatarWithTextAndBadge>
      ) : (
        <PeopleCircleIconNext />   
      )}
    </div>
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
