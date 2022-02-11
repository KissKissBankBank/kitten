import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mq } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Title } from '../../../typography/title'

const StyledCard = styled.article`
  padding: ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(20)};
  border: var(--border);
  border-radius: var(--border-radius-m);
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};

  @media ${mq.tabletAndDesktop} {
    padding: ${pxToRem(50)} ${pxToRem(50)} ${pxToRem(30)};
  }

  .k-ContentCard__header {
    ${TYPOGRAPHY.fontStyles.light};
    font-size: ${pxToRem(14)};
  }
  .k-ContentCard__title {
  }
  .k-ContentCard__content {
    position: relative;

    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }

    font-size: ${pxToRem(16)};

    @media ${mq.tabletAndDesktop} {
      font-size: ${pxToRem(20)};
    }

    img {
      max-width: 100%;
    }
  }

  .k-ContentCard__content--fixedHeight {
    max-height: ${pxToRem(150)};
    overflow: hidden;

    .k-ContentCard__content__readMore {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: ${pxToRem(60)};
      text-align: left;

      display: flex;
      align-items: flex-end;

      background: linear-gradient(
        to top,
        var(--color-grey-000) 1em,
        rgba(255, 255, 255, 0) 100%
      );

      @media ${mq.tabletAndDesktop} {
        height: ${pxToRem(80)};
      }
    }
  }

  .k-ContentCard__footer {
    border-top: var(--border);
    padding-top: ${pxToRem(20)};
  }
`

export const ContentCard = ({ children, className, ...props }) => {
  return (
    <StyledCard className={classNames('k-ContentCard', className)} {...props}>
      {children}
    </StyledCard>
  )
}

ContentCard.Header = ({ className, ...props }) => (
  <aside
    className={classNames('k-ContentCard__header', className)}
    {...props}
  />
)

ContentCard.Title = ({ className, ...props }) => (
  <Title
    as="header"
    modifier="quaternary"
    noMargin
    className={classNames('k-ContentCard__title', className)}
    {...props}
  />
)

ContentCard.Content = ({
  children,
  className,
  fixedHeight,
  readMoreButtonText,
  ...props
}) => {
  const [innerFixedHeight, setInnerFixedHeight] = useState(fixedHeight)

  useEffect(() => {
    setInnerFixedHeight(fixedHeight)
  }, [fixedHeight])

  return (
    <div
      className={classNames('k-ContentCard__content', className, {
        'k-ContentCard__content--fixedHeight': innerFixedHeight,
      })}
      {...props}
    >
      {children}
      {innerFixedHeight && (
        <button
          type="button"
          className="k-u-reset-button k-u-link k-u-link-font1 k-ContentCard__content__readMore"
          onClick={() => setInnerFixedHeight(false)}
        >
          <span>{readMoreButtonText}</span>
        </button>
      )}
    </div>
  )
}

ContentCard.Footer = ({ className, ...props }) => (
  <footer
    className={classNames('k-ContentCard__footer', className)}
    {...props}
  />
)

ContentCard.defaultProps = {}

ContentCard.propTypes = {}

ContentCard.Content.defaultProps = {
  fixedHeight: false,
  readMoreButtonText: 'Read more…',
}

ContentCard.Content.propTypes = {
  fixedHeight: PropTypes.bool,
  readMoreButtonText: PropTypes.string,
}
