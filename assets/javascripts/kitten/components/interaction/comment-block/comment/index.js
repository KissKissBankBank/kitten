import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'

import { Text } from '../../../typography/text'
import { mq } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { HeartIconNext } from '../../../graphics/icons-next/heart-icon-next'

const CommentWrapper = styled.div`
  --comment-background-color: var(--color-grey-200);

  display: flex;
  gap: ${pxToRem(7)};

  &.k-Comment--isSecondary {
    margin-left: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      margin-left: ${pxToRem(50)};
    }

    .k-Comment__image {
      width: ${pxToRem(20)};
      height: ${pxToRem(20)};
    }
  }
  &.k-Comment--isHighlighted {
    --comment-background-color: var(--color-grey-400);

    .k-Comment__header__meta {
      color: var(--color-grey-700);
    }
  }

  .k-Comment__image {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    object-fit: cover;
    object-position: center center;
    border-radius: var(--border-radius-rounded);
  }

  .k-Comment__block {
    display: flex;
    padding: ${pxToRem(15)};
    border-radius: ${pxToRem(8)};
    flex-direction: column;
    position: relative;
    background-color: var(--comment-background-color);
    transition: background-color var(--transition);
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
    color: var(--color-grey-600);
  }

  .k-Comment__header__actions {
    display: flex;
    gap: ${pxToRem(10)};
  }
  .k-Comment__content {
    ${TYPOGRAPHY.fontStyles['400']}
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
    color: var(--color-grey-900);
    transition: color var(--transition);

    :disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &[aria-pressed] {
      svg {
        color: var(--color-danger-500);
      }
    }

    svg {
      max-width: ${pxToRem(14)};
      max-height: ${pxToRem(14)};
      transition: inherit;
    }

    :not(:disabled):hover {
      color: var(--color-primary-700);
    }
  }
`

export const Comment = React.forwardRef(
  (
    {
      text,
      ownerName,
      avatarImgProps,
      commentDate,
      footer,
      headerActions,
      id,
      children,
      className,
      isSecondary,
      isHighlighted,
      ...props
    },
    ref,
  ) => (
    <CommentWrapper
      ref={ref || null}
      id={id}
      className={classNames('k-Comment', className, {
        'k-Comment--isSecondary': isSecondary,
        'k-Comment--isHighlighted': isHighlighted,
      })}
      {...props}
    >
      <img
        alt=""
        {...avatarImgProps}
        className="k-Comment__image"
      />
      <div className="k-Comment__block">
        <div className="k-Comment__header">
          <div className="k-Comment__header__meta">
            <Text weight="500" color="font1" size="small" className="k-u-ellipsis">
              {ownerName}
            </Text>
            <Text size="micro" aria-hidden>
              •
            </Text>
            <Text size="micro" weight="400">
              {commentDate}
            </Text>
          </div>
          <div className="k-Comment__header__actions">{headerActions}</div>
        </div>

        <div className="k-Comment__content">
          {!!text && (
            <Text color="font1" weight="400" size="small">
              {text}
            </Text>
          )}

          {children}
        </div>

        {footer && <div className="k-Comment__footer">{footer}</div>}
      </div>
    </CommentWrapper>
  ),
)

Comment.LikeButton = ({
  children,
  accessibilityLabel,
  hasLiked,
  className,
  disabled,
  ...props
}) => (
  <button
    role="button"
    aria-pressed={!!hasLiked || null}
    className={classNames(
      'k-Comment-LikeButton',
      'k-u-reset-button',
      'k-u-link',
      className,
    )}
    disabled={disabled}
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
  avatarImgProps: PropTypes.object,
  commentDate: PropTypes.string,
  headerActions: PropTypes.node,
  footer: PropTypes.node,
  isSecondary: PropTypes.bool,
  isHighlighted: PropTypes.bool,
}

Comment.defaultProps = {
  footer: null,
  ownerName: '',
  headerActions: null,
  avatarImgProps: {},
  commentDate: '',
  isSecondary: false,
  isHighlighted: false,
}

Comment.LikeButton.defaultProps = {
  hasLiked: false,
}

Comment.LikeButton.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  hasLiked: PropTypes.bool,
}
