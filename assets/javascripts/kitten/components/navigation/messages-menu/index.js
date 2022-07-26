import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/action/button'
import { CrossIconNext } from '../../../components/graphics/icons-next/cross-icon-next'

const StyledMessagesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(5)};
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: scroll;
  height: 100%;
  margin-left: ${pxToRem(-3)};
  padding-left: ${pxToRem(3)};

  .k-MessagesMenu__message {
    overflow: hidden;
    position: relative;
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    display: flex;
    gap: ${pxToRem(10)};
    align-items: center;
    margin-left: ${pxToRem(-3)};
    padding-left: ${pxToRem(3)};
    transition: width var(--transition);
  }

  .k-MessagesMenu__message--unread .k-MessagesMenu__message__button {
    background-color: var(--color-primary-100);
  }

  .k-MessagesMenu__message--active .k-MessagesMenu__message__button {
    background-color: var(--color-grey-300);
  }

  .k-MessagesMenu__message__button:hover,
  .k-MessagesMenu__message__button:active {
    background-color: var(--color-grey-200);
  }

  .k-MessagesMenu__message__button {
    display: flex;
    flex: 1 0 calc(100% - ${pxToRem(15 + 10 + 30 + 10)});
    gap: ${pxToRem(10)};
    align-items: center;
    height: ${pxToRem(55)};
    padding-block: ${pxToRem(10)};
    padding-inline: ${pxToRem(15)} ${pxToRem(10)};
    transition: background-color var(--transition);
    border-radius: var(--border-radius-m);
    outline-offset: ${pxToRem(-2)};
  }

  .k-MessagesMenu__message__avatar {
    flex: 0 0 ${pxToRem(30)};
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    border-radius: var(--border-radius-rounded);
    object-fit: cover;
    object-position: center;
    border: var(--border-width) solid var(--color-grey-300);
  }

  .k-MessagesMenu__message__content {
    flex: 1 0 calc(100% - pxToRem(15 + 30 + 2 + 10));
  }

  .k-MessagesMenu__message--unread {
    &::before {
      content: '';
      position: absolute;
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      border-radius: var(--border-radius-rounded);
      background-color: var(--color-primary-500);
      top: calc(50% - ${pxToRem(3)});
      left: 0;
    }
  }

  .k-MessagesMenu__message__closeButton {
    flex: 0 0 ${pxToRem(30)};
    transition: opacity var(--transition), margin-right var(--transition);
    margin-right: ${pxToRem(-30 - 10)};
    opacity: 0;
  }

  @media (hover: hover) {
    .k-MessagesMenu__message:hover,
    .k-MessagesMenu__message:focus-within {
      .k-MessagesMenu__message__closeButton {
        margin-right: ${pxToRem(10)};
        opacity: 1;
      }
    }
  }
`

export const MessagesMenu = ({ className, children, ...props }) => {
  return (
    <StyledMessagesMenu
      className={classNames('k-MessagesMenu', className)}
      {...props}
    >
      {children}
    </StyledMessagesMenu>
  )
}

MessagesMenu.Message = ({
  className,
  children,
  status = 'read',
  active,
  onClick,
  avatarProps = {},
  closeButtonProps = {},
  ...props
}) => {
  return (
    <li
      className={classNames(
        'k-MessagesMenu__message',
        className,
        `k-MessagesMenu__message--${status}`,
        {
          'k-MessagesMenu__message--active': active,
        },
      )}
      {...props}
    >
      <button
        type="button"
        className="k-u-reset-button k-MessagesMenu__message__button"
        onClick={onClick}
      >
        <img
          alt=""
          {...avatarProps}
          className={classNames(
            'k-MessagesMenu__message__avatar',
            avatarProps.className,
          )}
        />
        <div className="k-MessagesMenu__message__content">{children}</div>
      </button>

      {Object.keys(closeButtonProps).length > 0 && (
        <Button
          rounded
          fit="icon"
          size="micro"
          className={classNames(
            'k-MessagesMenu__message__closeButton',
            avatarProps.className,
          )}
          {...closeButtonProps}
        >
          {closeButtonProps.children || <CrossIconNext />}
        </Button>
      )}
    </li>
  )
}

MessagesMenu.Message.propTypes = {
  status: PropTypes.oneOf(['active', 'read', 'unread']),
  avatarProps: PropTypes.object,
  closeButtonProps: PropTypes.object,
}
