import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { Loader } from '../../../components/atoms/loader'
import { Paragraph } from '../../../components/typography/paragraph'

export const LoaderWithParagraph = styled(
  ({
    children,
    className,
    loaderPosition,
    loaderProps,
    paragraphProps,
    ...others
  }) => {
    const containerClassName = classNames(
      'k-LoaderWithParagraph',
      {
        'k-LoaderWithParagraph--column':
          loaderPosition == 'top' || loaderPosition == 'bottom',
      },
      className,
    )

    const loaderClassName = classNames(
      {
        'k-u-margin-bottom-single': loaderPosition == 'top',
        'k-u-margin-left-single': loaderPosition == 'right',
        'k-u-margin-top-single': loaderPosition == 'bottom',
        'k-u-margin-right-single': loaderPosition == 'left',
      },
      loaderProps.className,
    )

    const loader = <Loader {...loaderProps} className={loaderClassName} />

    const loaderBefore = loaderPosition == 'top' || loaderPosition == 'left'

    return (
      <div className={containerClassName} {...others}>
        {loaderBefore ? loader : null}

        <Paragraph modifier="secondary" margin={false} {...paragraphProps}>
          {children}
        </Paragraph>

        {loaderBefore ? null : loader}
      </div>
    )
  },
)`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.k-LoaderWithParagraph--column {
    flex-direction: column;
  }
`

LoaderWithParagraph.propTypes = {
  className: PropTypes.string,
  loaderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: PropTypes.object,
  paragraphProps: PropTypes.object,
}

LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left',
  loaderProps: {}, // Show Loader component.
  paragraphProps: {}, // Show Paragraph component.
}
