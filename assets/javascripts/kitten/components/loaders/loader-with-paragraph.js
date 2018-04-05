import React, { Component } from 'react'
import classNames from 'classnames'
import { Loader } from 'kitten/components/loaders/loader'
import { Paragraph } from 'kitten/components/typography/paragraph'

export class LoaderWithParagraph extends Component {
  render() {
    const {
      text,
      className,
      loaderPosition,
      loaderProps,
      paragraphProps,
      ...others
    } = this.props

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
          {this.props.children}
        </Paragraph>

        {loaderBefore ? null : loader}
      </div>
    )
  }
}

LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left', // Available options: top, right, bottom, left.
  loaderProps: {}, // Show Loader component.
  paragraphProps: {}, // Show Paragraph component.
}
