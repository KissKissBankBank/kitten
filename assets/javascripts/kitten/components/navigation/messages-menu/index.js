import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

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
    position: relative;
    margin: 0;
    padding: 0;
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

  .k-MessagesMenu__message--unread {
    &::before {
      content: '';
      position: absolute;
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      border-radius: var(--border-radius-rounded);
      background-color: var(--color-primary-500);
      top: calc(50% - ${pxToRem(3)});
      left: ${pxToRem(-3)};
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
  avatarProps,
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
        <div>{children}</div>
      </button>
    </li>
  )
}

MessagesMenu.Message.propTypes = {
  status: PropTypes.oneOf(['active', 'read', 'unread']),
}
