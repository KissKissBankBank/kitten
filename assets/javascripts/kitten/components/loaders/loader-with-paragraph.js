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
      ...others,
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

    const loader =
      <Loader
        key="loader"
        { ...loaderProps }
        className={ loaderClassName }
      />

    let elements = [
      <Paragraph
        key="paragraph"
        modifier="secondary"
        margin={ false }
        { ...paragraphProps }>
        { this.props.children }
      </Paragraph>
    ]

    if (loaderPosition == 'left' || loaderPosition == 'top') {
      elements.unshift(loader)
    }
    else {
      elements.push(loader)
    }

    return (
      <div className={ containerClassName } { ...others }>
        { elements }
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
