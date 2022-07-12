import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledRichText = styled.div`
  ::selection, * ::selection {
    color: var(--color-grey-000);
    background-color: var(--color-primary-500);
  }

  font: var(--font-weight-400) var(--richtext-font-size) / var(--richtext-line-height) var(--font-family-maax);

  /* Reset compensation */
  h1, h2, h3, h4, h5, h6, p, blockquote, ul, li, ol {
    font-family: inherit;
    font-size: inherit;
  }

  &.k-RichText--small {
    --richtext-font-size: var(--font-size-3);
    --richtext-line-height: var(--line-height-2);
    --richtext-block: var(--spacing-5);
    --richtext-h1: var(--font-size-9);
    --richtext-h2: var(--font-size-7);
    --richtext-h3: var(--font-size-5);
    --richtext-h4: var(--font-size-3);
  }
  &.k-RichText--medium {
    --richtext-font-size: var(--font-size-4);
    --richtext-line-height: var(--line-height-3);
    --richtext-block: var(--spacing-6);
    --richtext-h1: var(--font-size-10);
    --richtext-h2: var(--font-size-8);
    --richtext-h3: var(--font-size-6);
    --richtext-h4: var(--font-size-4);
  }
  &.k-RichText--large {
    --richtext-font-size: var(--font-size-6);
    --richtext-line-height: var(--line-height-5);
    --richtext-block: var(--spacing-7);
    --richtext-h1: var(--font-size-11);
    --richtext-h2: var(--font-size-9);
    --richtext-h3: var(--font-size-8);
    --richtext-h4: var(--font-size-6);
  }

  p, ul, ol, blockquote {
    margin-block: var(--richtext-block);

    &:first-child {
      margin-block-start: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 1.5em;
    margin-block-end: 1em;
    line-height: 1.125;
    font-weight: var(--font-weight-700);
    letter-spacing: -0.02em;

    &:first-child {
      margin-block-start: 0;
    }
  }

  h1 {
    font-size: var(--richtext-h1);
  }

  h2 {
    font-size: var(--richtext-h2);
  }

  h3 {
    font-size: var(--richtext-h3);
  }

  h4 {
    font-size: var(--richtext-h4);
  }

  h5 {
    font-size: var(--richtext-h5);
  }

  h6 {
    font-size: var(--richtext-h6);
  }

  p {
    font-weight: var(--font-weight-400);
  }

  ul {
    margin-inline-start: var(--spacing-9);
    list-style-type: disc;
  }

  ol {
    margin-inline-start: var(--spacing-9);
    list-style-type: decimal;
  }

  blockquote {
    position: relative;
    margin-inline: var(--spacing-6);
    padding-inline-start: var(--spacing-6);

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${pxToRem(4)};
      background-color: var(--color-primary-100);
      border-radius: var(--border-radius-rounded);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  a {
    font-weight: var(--font-weight-500);
    text-decoration: none;
    color: var(--color-primary-500);
    transition: color var(--transition);

    &:focus-visible {
      outline: auto;
    }

    &:hover,
    &:focus {
      color: var(--color-primary-700);
    }
  }

  strong, b {
    font-weight: var(--font-weight-500);
  }

  em, i {
    font-style: italic;
  }
`

export const RichText = ({className, size, ...props}) => (
  <StyledRichText className={classNames('k-RichText', className, `k-RichText--${size}`)} {...props} />
)

RichText.defaultProps = {
  size: 'medium',
}

RichText.propTypes = {
  size: PropTypes.oneOf['small', 'medium', 'large'],
}
