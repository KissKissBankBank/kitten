import React from 'react'
import classNames from 'classnames'

export
  const StrokeSmall = ({ tiny, normal, medium, big, className, ... props }) => {

  const strokeSmallClassName = classNames(
    'k-SkrokeSmall',
    {'k-SkrokeSmall--tiny': tiny },
    {'k-SkrokeSmall': normal },
    {'k-SkrokeSmall--medium': medium },
    {'k-SkrokeSmall--big': big },
    className
  )


}
