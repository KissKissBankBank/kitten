import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { ArrowIcon } from '../../graphics/icons/arrow-icon'
import { Details } from '../../structure/expand/details'
import { Button } from '../../action/button'
import { pxToRem } from '../../../helpers/utils/typography'
import { mq } from '../../../constants/screen-config'

const StyledEditorBar = styled.div`
  --editorBar-spacing: ${pxToRem(10)};
  display: flex;
  gap: var(--editorBar-spacing);
  justify-content: var(--editorBar-align, flex-start);

  @media ${mq.tabletAndDesktop} {
    --editorBar-spacing: ${pxToRem(20)};
  }

  &.k-EditorBar--theme-grey {
    padding: ${pxToRem(15)} var(--editorBar-spacing);
    background-color: var(--color-grey-200);
  }

  .k-EditorBar__group {
    flex-shrink: 0;

    display: flex;

    .k-EditorBar__button {
      &:not(:last-of-type) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(:first-of-type) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      :hover:not(:disabled),
      :focus:not(:disabled) {
        z-index: 1;
      }

      &[aria-pressed='true'],
      &[aria-checked='true'] {
        z-index: 2;
        position: relative;
      }
    }

    .k-EditorBar__button + .k-EditorBar__button {
      margin-left: calc(-1 * var(--border-width, 1px));
    }
  }

  .k-EditorBar__button {
    flex-shrink: 0;

    &.k-EditorBar__button--wide {
      width: ${pxToRem(80)};
    }
  }

  .k-EditorBar__list {
    position: relative;

    summary {
      border-radius: var(--border-radius-s);

      &:focus {
        z-index: 3;
      }
    }

    &[open] summary::after {
      content: '';
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 4;
      cursor: initial;
    }

    &[open] summary .k-EditorBar__button {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.k-EditorBar__list--disabled {
      pointer-events: none;
      cursor: not-allowed;
    }

    .k-EditorBar__list_items {
      position: absolute;
      z-index: 5;
      display: flex;
      flex-direction: column;
      left: 0;
      right: 0;
    }

    .k-EditorBar__item {
      height: ${pxToRem(40)};
      position: relative;
      background-color: var(--color-grey-000);
      border: ${pxToRem(1)} solid transparent;
      border-inline: var(--border, ${pxToRem(1)} solid var(--color-grey-400));
      text-align: center;
      transition: border var(--transition), background-color var(--transition);
      box-sizing: border-box;

      &:hover,
      &:focus {
        background-color: var(--color-primary-100);
        border-color: var(--color-primary-700) !important;
      }

      &:focus {
        z-index: 3;
      }

      &:first-child {
        border-top: none;
      }

      &:last-child {
        border-block-end: var(
          --border,
          ${pxToRem(1)} solid var(--color-grey-400)
        );
        border-bottom-left-radius: var(--border-radius-s);
        border-bottom-right-radius: var(--border-radius-s);
      }

      &[aria-pressed='true'] {
        svg,
        path {
          fill: var(--color-primary-500);
        }
      }
    }
  }
`

export const EditorBar = ({
  className,
  align = 'flex-start',
  style,
  theme = 'white',
  ...props
}) => {
  return (
    <StyledEditorBar
      className={classNames(
        'k-EditorBar',
        className,
        `k-EditorBar--theme-${theme}`,
      )}
      style={{
        ...style,
        '--editorBar-align': align,
      }}
      {...props}
    />
  )
}

EditorBar.Group = ({ className, ...props }) => {
  return (
    <div className={classNames('k-EditorBar__group', className)} {...props} />
  )
}

EditorBar.Button = ({ className, active, wide = false, ...props }) => (
  <Button
    className={classNames('k-EditorBar__button', className, {
      'k-EditorBar__button--wide': wide,
    })}
    {...props}
    fit="icon"
    type="button"
    aria-pressed={active}
    active={active}
  />
)

EditorBar.List = ({
  currentIcon = null,
  children,
  className,
  disabled = false,
  ...props
}) => (
  <Details
    summaryRender={({ open }) => (
      <Button
        active={open}
        tag="span"
        className="k-EditorBar__button k-EditorBar__button--wide"
        fit="icon"
      >
        {currentIcon}
        <ArrowIcon width="6" direction={open ? 'top' : 'bottom'} />
      </Button>
    )}
    className={classNames('k-EditorBar__list', className, {
      'k-EditorBar__list--disabled': disabled,
    })}
    {...props}
  >
    <div className="k-EditorBar__list_items">{children}</div>
  </Details>
)

EditorBar.Item = ({ className, active, ...props }) => (
  <button
    className={classNames('k-EditorBar__item', 'k-u-reset-button', className, {
      'k-EditorBar__item': active,
    })}
    type="button"
    aria-pressed={active}
    {...props}
  />
)
