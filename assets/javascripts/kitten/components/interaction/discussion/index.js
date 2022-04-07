import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { Text } from '../../../components/typography/text'
import { TextInput } from '../../../components/form/input/text-input'
import { Button } from '../../../components/action/button'
import { pxToRem } from '../../../helpers/utils/typography'
import { LargeArrowIconNext } from '../../../components/graphics/icons-next/large-arrow-icon-next'

const DiscussionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  justify-content: space-between;

  .k-Discussion__list {
    flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    overflow: scroll;
  }

  .k-Discussion__message {
    display: flex;
    gap: 0 ${pxToRem(10)};
    flex-wrap: wrap;
    align-items: center;

    .k-Discussion__message__avatar {
      flex: 0 0 auto;
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
      border-radius: ${pxToRem(30)};
      object-fit: cover;
      object-position: center;
      border: var(--border-width) solid var(--color-grey-300);
    }
    .k-Discussion__message__header {
      flex: 1 0 auto;
    }
    .k-Discussion__message__content {
      box-sizing: border-box;
      width: 100%;
      flex: 1 0 100%;
      padding-left: ${pxToRem(40)};
    }
  }

  .k-Discussion__form {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-end;
    gap: ${pxToRem(10)};

    .k-Form-TextInput__textareaContainer {
      /* .k-Discussion__form__input { */
      flex: 1 0 auto;
    }

    .k-Discussion__form__button {
      flex: 0 0 auto;
    }
  }

  .k-Discussion__list,
  .k-Discussion__message {
    @supports selector(:focus-visible) {
      &:focus {
        outline-style: auto;
      }
      &:focus:not(:focus-visible) {
        outline: transparent;
      }
      &:focus-visible {
        outline-style: auto;
      }
    }
    @supports not (selector(:focus-visible)) {
      &:focus {
        outline: transparent;
      }
    }
  }
`

export const Discussion = ({ className, children, ...props }) => {
  return (
    <DiscussionWrapper
      className={classNames('k-Discussion', className)}
      {...props}
    >
      {children}
    </DiscussionWrapper>
  )
}

Discussion.List = ({ className, children, ...props }) => {
  return (
    <div
      tabIndex="0"
      className={classNames('k-Discussion__list', className)}
      {...props}
    >
      {children}
    </div>
  )
}

Discussion.Message = ({ className, children, ...props }) => {
  return (
    <div className={classNames('k-Discussion__message', className)} {...props}>
      {children}
    </div>
  )
}

Discussion.Message.Avatar = ({ className, ...props }) => {
  return (
    <img
      alt=""
      className={classNames('k-Discussion__message__avatar', className)}
      {...props}
    />
  )
}

Discussion.Message.Header = ({ className, children, ...props }) => {
  return (
    <div
      className={classNames('k-Discussion__message__header', className)}
      {...props}
    >
      {children}
    </div>
  )
}

Discussion.Message.Content = ({ className, children, ...props }) => {
  return (
    <Text
      as="div"
      weight="light"
      className={classNames('k-Discussion__message__content', className)}
      {...props}
    >
      {children}
    </Text>
  )
}

Discussion.Form = ({ className, inputProps, buttonProps, ...props }) => {
  return (
    <form className={classNames('k-Discussion__form', className)} {...props}>
      <TextInput
        tag="autoresize"
        aria-label="Votre message"
        size="small"
        maxRows={3}
        {...inputProps}
        className={classNames(
          'k-Discussion__form__input',
          inputProps?.className,
        )}
      />
      <Button
        fit="icon"
        aria-label="Envoyer"
        modifier="beryllium"
        size="small"
        type="submit"
        {...buttonProps}
        className={classNames(
          'k-Discussion__form__button',
          buttonProps?.className,
        )}
      >
        <LargeArrowIconNext aria-hidden direction="up" height={20} width={20} />
      </Button>
    </form>
  )
}

Discussion.Form.defaultProps = {
  inputProps: {},
  buttonProps: {},
}

Discussion.Form.propTypes = {
  inputProps: PropTypes.object,
  buttonProps: PropTypes.object,
}
