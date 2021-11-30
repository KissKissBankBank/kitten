import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import TextareaAutosize from 'react-textarea-autosize'

import { Button } from '../../../../components/molecules/buttons/button'
import { Text } from '../../../../components/atoms/typography/text'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const CommentFormWrapper = styled.div`
  --commentForm-arrow-size: ${pxToRem(7)};

  display: flex;
  gap: ${pxToRem(10)};

  .k-CommentForm__image {
    width: ${pxToRem(30)};
    flex: 0 0 ${pxToRem(30)};
    padding-top: ${pxToRem(10)};

    img {
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
      overflow: hidden;
      object-fit: cover;
      object-position: center center;
      border-radius: ${pxToRem(30)};
    }
  }

  .k-CommentForm__form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
    margin-left: var(--commentForm-arrow-size);
    position: relative;
  }
  .k-CommentForm__textarea {
    ${TYPOGRAPHY.fontStyles.light}
    background-color: var(--color-grey-000);
    font-size: ${pxToRem(16)};
    color: ${COLORS.font1};
    padding: ${pxToRem(15)};
    border-radius: ${pxToRem(6)};
    border: var(--border);
    resize: vertical;
    line-height: ${pxToRem(20)};
    min-height: ${pxToRem(50 - 30)};
    max-height: ${pxToRem(20 * 5)};

    ::placeholder {
      color: var(--color-grey-600);
    }

    :hover {
      border-color: var(--color-grey-500);

      & + .k-CommentForm__arrow {
        border-right-color: var(--color-grey-500);
      }
    }
    :active {
      border-color: var(--color-grey-600);

      & + .k-CommentForm__arrow {
        border-right-color: var(--color-grey-600);
      }
    }
    :focus {
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);

      & + .k-CommentForm__arrow {
        border-right-color: var(--color-grey-900);

        &::before {
          left: ${pxToRem(2)};
        }
      }
    }
    :disabled {
      cursor: not-allowed;
      color: var(--color-grey-900);
      border-color: var(--color-grey-500);
      background-color: var(--color-grey-300);

      ::placeholder {
        color: var(--color-grey-600);
      }

      & + .k-CommentForm__arrow {
        border-right-color: var(--color-grey-500);

        &::before {
          border-right-color: var(--color-grey-300);
        }
      }
    }
  }

  .k-CommentForm__arrow {
    width: 0;
    height: 0;

    position: absolute;
    left: calc(-1 * var(--commentForm-arrow-size));
    top: calc(${pxToRem(50 / 2)} - var(--commentForm-arrow-size));
    border: var(--commentForm-arrow-size) solid transparent;
    border-left: 0;
    border-right-color: var(--color-grey-400);
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: ${pxToRem(1)};
      right: 0;
      top: calc(-1 * var(--commentForm-arrow-size));
      width: 0;
      height: 0;
      border: var(--commentForm-arrow-size) solid transparent;
      border-left: 0;
      border-right-color: var(--color-grey-000);
      z-index: 2;
    }
  }

  .k-CommentForm__submit {
    display: inline-block;
    min-height: 0;
    max-height: 0;
    padding: 0 ${pxToRem(20)};
    height: var(--Button-dimension);
    align-self: flex-end;
    overflow: hidden;
    transition: max-height var(--transition), padding var(--transition);
  }
  .k-CommentForm__submit--is-visible {
    max-height: ${pxToRem(40)};
    padding: ${pxToRem(7)} ${pxToRem(20)};
  }
  .k-CommentForm__error {
    margin-top: ${pxToRem(-5)};
  }
`

export const CommentForm = React.forwardRef(
  (
    {
      avatarImgProps,
      placeholder,
      onSubmit,
      error,
      errorMessage,
      disabled,
      buttonText,
      defaultValue,
      commentLabel,
      id,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue)

    const handleChange = event => {
      setValue(event.target.value.trim())
      onChange(event.target.value)
    }

    const handleSubmit = () => {
      onSubmit(value)
    }

    return (
      <CommentFormWrapper className={classNames('k-CommentForm', className)}>
        <div className="k-CommentForm__image">
          <img alt="" {...avatarImgProps} />
        </div>
        <div className="k-CommentForm__form">
          <TextareaAutosize
            ref={ref || null}
            className="k-CommentForm__textarea"
            id={id}
            defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            minRows={1}
            maxRows={5}
            aria-describedby={`${id}-description`}
            aria-label={props['aria-label'] || commentLabel}
          />
          <span className="k-CommentForm__arrow" />
          {error && (
            <Text
              id={`${id}-description`}
              color="error"
              size="micro"
              weight="regular"
              className="k-CommentForm__error"
            >
              {errorMessage}
            </Text>
          )}
          {(value.length > 0 || !!defaultValue) && (
            <Button
              type="button"
              modifier="beryllium"
              size="tiny"
              fit="content"
              disabled={disabled}
              className={classNames('k-CommentForm__submit', {
                'k-CommentForm__submit--is-visible': value.length > 0,
              })}
              onClick={handleSubmit}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </CommentFormWrapper>
    )
  },
)

CommentForm.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  'aria-label': PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  commentButton: deprecated(PropTypes.string, 'Please use buttonText instead.'),
  avatarBadge: deprecated(PropTypes.node, 'Not a feature anymore'),
  isDisabled: deprecated(PropTypes.bool, 'Please use disabled instead'),
  commentLabel: deprecated(PropTypes.string, 'Please use aria-label instead'),
  ariaId: deprecated(PropTypes.string, 'Please use id prop instead.'),
  textareaId: deprecated(PropTypes.string, 'Please use id prop instead.'),
}

CommentForm.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  placeholder: '',
  error: false,
  errorMessage: '',
  defaultValue: '',
  id: 'CommentForm',
  disabled: false,
  buttonText: 'Send',
}
