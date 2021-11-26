import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'

import { Text } from '../../../../components/atoms/typography/text'
import { mq } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { HeartIconNext } from '../../../../components/graphics/icons-next/heart-icon-next'

const CommentWrapper = styled.div`
  --comment-arrow-size: ${pxToRem(7)};
  display: flex;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(15)};
  border-radius: ${pxToRem(6)};
  flex-direction: column;
  background-color: var(--color-grey-200);
  position: relative;

  &.k-Comment--is-secondary {
    margin-left: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      margin-left: ${pxToRem(50)};
    }
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: calc(-1 * var(--comment-arrow-size));
    top: calc(50% - var(--comment-arrow-size));
    border: var(--comment-arrow-size) solid transparent;
    border-left: 0;
    border-right-color: var(--color-grey-200);
  }

  .k-Comment__header {
    display: flex;
    gap: ${pxToRem(10)};
    align-items: center;
    justify-content: space-between;
    font-size: ${pxToRem(12)};
  }
  .k-Comment__header__meta {
    display: flex;
    gap: ${pxToRem(5)};
    align-items: center;
  }
  .k-Comment__header__image {
    display: block;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    border-radius: ${pxToRem(20)};
  }
  .k-Comment__header__actions {
    display: flex;
    gap: ${pxToRem(10)};
  }
  .k-Comment__content {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${pxToRem(14)};
  }
  .k-Comment__footer {
    display: flex;
    gap: ${pxToRem(10)};
  }

  .k-Comment-LikeButton {
    display: flex;
    gap: ${pxToRem(5)};
    align-items: center;

    [aria-pressed] {
    }

    svg {
      max-width: ${pxToRem(14)};
      max-height: ${pxToRem(14)};
    }

    :hover {
    }
  }
`

export const Comment = ({
  text,
  ownerName,
  ownerUrl,
  avatarImgProps,
  commentDate,
  footer,
  headerActions,
  id,
  children,
  className,
  isSecondary,
  ...props
}) => {
  return (
    <CommentWrapper
      id={id}
      className={classNames('k-Comment', className, {
        'k-Comment--is-secondary': isSecondary,
      })}
      {...props}
    >
      <div className="k-Comment__header">
        <div className="k-Comment__header__meta">
          <a href={ownerUrl}>
            <img
              alt=""
              {...avatarImgProps}
              className="k-Comment__header__image"
            />
          </a>
          <a href={ownerUrl} className="k-u-link k-u-link-font1">
            {ownerName}
          </a>
          <Text cssColor="var(--color-grey-600)" size="micro" aria-hidden>
            •
          </Text>
          <Text cssColor="var(--color-grey-600)" size="micro" weight="light">
            {commentDate}
          </Text>
        </div>
        <div className="k-Comment__header__actions">{headerActions}</div>
      </div>

      <div className="k-Comment__content">
        {!!text && (
          <Text color="font1" weight="light" size="tiny">
            {text}
          </Text>
        )}

        {children}
      </div>

      {footer && <div className="k-Comment__footer">{footer}</div>}
    </CommentWrapper>
  )
}

Comment.LikeButton = ({
  children,
  accessibilityLabel,
  hasLiked,
  className,
  ...props
}) => (
  <button
    role="button"
    aria-pressed={!!hasLiked}
    className={classNames(
      'k-Comment-LikeButton',
      'k-u-reset-button',
      'k-u-link',
      'k-u-link-font1',
      className,
    )}
    {...props}
  >
    <span className="k-u-a11y-visuallyHidden">{accessibilityLabel}</span>
    {children}
    <HeartIconNext
      aria-hidden="true"
      focusable="false"
      color="currentColor"
      bgColor={hasLiked ? 'currentColor' : 'transparent'}
    />
  </button>
)

Comment.propTypes = {
  ownerName: PropTypes.string,
  ownerUrl: PropTypes.string,
  avatarImgProps: PropTypes.object,
  commentDate: PropTypes.string,
  headerActions: PropTypes.node,
  footer: PropTypes.node,
  bottomNotes: deprecated(PropTypes.node, 'Please use footer prop instead'),
  text: deprecated(PropTypes.node, 'Please use children prop instead'),
  likeButtonProps: deprecated(
    PropTypes.object,
    'Please use headerActions={<Comment.LikeButton />} instead',
  ),
}

Comment.defaultProps = {
  footer: null,
  ownerName: '',
  ownerUrl: '',
  headerActions: null,
  avatarImgProps: {},
  commentDate: '',
}

Comment.LikeButton.defaultProps = {
  hasLiked: false,
}

Comment.LikeButton.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  hasLiked: PropTypes.bool,
}
