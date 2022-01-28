import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { Loader } from '../../../components/feedback/loader'
import { Paragraph } from '../../../components/typography/paragraph'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledLoaderWithParagraph = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};

  &.k-LoaderWithParagraph--top {
    flex-direction: column;
  }
  &.k-LoaderWithParagraph--bottom {
    flex-direction: column-reverse;
  }
  &.k-LoaderWithParagraph--left {
    flex-direction: row;
  }
  &.k-LoaderWithParagraph--right {
    flex-direction: row-reverse;
  }
`

export const LoaderWithParagraph = ({
  className,
  loaderPosition,
  loaderProps,
  paragraphProps,
  children,
  ...others
}) => {
  return (
    <StyledLoaderWithParagraph
      className={classNames(
        'k-LoaderWithParagraph',
        className,
        `k-LoaderWithParagraph--${loaderPosition}`,
      )}
      {...others}
    >
      <Loader
        aria-hidden
        {...loaderProps}
        className={classNames(
          'k-LoaderWithParagraph__loader',
          loaderProps.className,
        )}
      />

      <Paragraph
        modifier="secondary"
        noMargin
        {...paragraphProps}
        className={classNames(
          'k-LoaderWithParagraph__paragraph',
          paragraphProps.className,
        )}
      >
        {children}
      </Paragraph>
    </StyledLoaderWithParagraph>
  )
}

LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  loaderPosition: 'left',
  loaderProps: {},
  paragraphProps: {},
}

LoaderWithParagraph.propTypes = {
  loaderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: PropTypes.object,
  paragraphProps: PropTypes.object,
}
