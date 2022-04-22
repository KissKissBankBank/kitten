import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import { pxToRem } from '../../../../helpers/utils/typography'
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements'

const StyledProfileCard = styled.article`
  --profileCard-padding: ${pxToRem(20)};
  --profileCard-image-size: ${pxToRem(100)};

  &.k-ProfileCardWrapper--hasImage {
    padding-top: calc(var(--profileCard-image-size) / 2);
  }

  .k-ProfileCard {
    border: var(--border-width) solid var(--color-grey-300);
    box-shadow: var(--shadow-s);
    border-radius: var(--border-radius-m);
    padding: var(--profileCard-padding);
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-000);
    gap: ${pxToRem(20)};
  }

  .k-ProfileCard__avatar {
    .k-ProfileCard__avatar__image {
      margin-top: calc(
        -1 * (var(--profileCard-padding) + (var(--profileCard-image-size) / 2))
      );
      margin-left: auto;
      margin-right: auto;
      width: var(--profileCard-image-size);
      height: var(--profileCard-image-size);
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

  .k-ProfileCard__action {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${pxToRem(10)};
  }
`

export const ProfileCard = ({ className, children, ...props }) => {
  const AvatarChild = getReactElementsByType({ children, type: Avatar })[0]
  const imageProps = Object.keys(AvatarChild?.props?.imageProps || {}) || []

  return (
    <StyledProfileCard
      className={classNames('k-ProfileCardWrapper', className, {
        'k-ProfileCardWrapper--hasImage': imageProps.length > 0,
      })}
      {...props}
    >
      <div className="k-ProfileCard">
        {children}
      </div>
    </StyledProfileCard>
  )
}

const Avatar = ({ className, imageProps, ...props }) => (
  <div className={classNames('k-ProfileCard__avatar', className)} {...props}>
    {Object.keys(imageProps).length > 0 && (
      <img
        alt=""
        {...imageProps}
        className={classNames(
          'k-ProfileCard__avatar__image',
          imageProps.className,
        )}
      />
    )}
  </div>
)

Avatar.defaultProps = {
  imageProps: {},
}

Avatar.protoTypes = {
  imageProps: PropTypes.object,
}

const Content = ({ className, ...props }) => (
  <div className={classNames('k-ProfileCard__content', className)} {...props} />
)

const Action = ({ className, ...props }) => (
  <div className={classNames('k-ProfileCard__action', className)} {...props} />
)

ProfileCard.Avatar = Avatar
ProfileCard.Content = Content
ProfileCard.Action = Action
