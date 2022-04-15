import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import { pxToRem } from '../../../../helpers/utils/typography'

const StyledProfileCard = styled.article`
  --profileCard-padding: ${pxToRem(20)};
  --profileCard-image-size: ${pxToRem(100)};

  &.k-DeskMenuWrapper--hasImage {
    padding-top: calc(var(--profileCard-image-size) / 2);
  }

  .k-ProfileCard {
    border: var(--border);
    border-radius: var(--border-radius-m);
    padding: var(--profileCard-padding);
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-000);
  }

  .k-ProfileCard__header {
    .k-ProfileCard__header__image {
      margin-top: calc(
        -1 * (var(--ProfileCard-padding) + (var(--ProfileCard-image-size) / 2))
      );
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${pxToRem(15)};
      width: var(--ProfileCard-image-size);
      height: var(--ProfileCard-image-size);
      object-fit: cover;
      object-position: center;
      display: block;
      border-radius: var(--border-radius-rounded);
      border: var(--border-width) solid var(--color-grey-300);
    }
  }

  .k-ProfileCard__content {
    text-align: center;
  }
`

export const ProfileCard = ({
  className = '',
  children,
  imageProps,
  ...props
}) => {
  return (
    <StyledProfileCard
      className={classNames('k-ProfileCardWrapper', className,
      {
        'k-DeskMenuWrapper--hasImage': imageProps.length > 0,
      })}
      {...props}
    >
      <div className="k-ProfileCard">{children}</div>
    </StyledProfileCard>
  )
}

ProfileCard.Header = ({ className, imageProps, ...props }) => (
  <div className={classNames('k-ProfileCard__header', className)} {...props}>
    <img
      alt=""
      {...imageProps}
      className={classNames(
        'k-ProfileCard__header__image',
        imageProps.className,
      )}
    />
    <div className="k-ProfileCard__header__content" />
  </div>
)

ProfileCard.Content = ({ className, ...props }) => (
  <div className={classNames('k-ProfileCard__content', className)} {...props} />
)

ProfileCard.Action = ({ className, ...props }) => (
  <div className={classNames('k-ProfileCard__action', className)} {...props} />
)
