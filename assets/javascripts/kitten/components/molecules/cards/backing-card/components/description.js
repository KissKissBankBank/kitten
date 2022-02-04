import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../../components/atoms/typography/text'

export const Description = ({
  children,
  className,
  moreButtonText,
  truncateText,
  ...props
}) => {
  const descriptionElementRef = useRef(null)
  const [displayMoreButton, setMoreButtonDisplay] = useState(false)

  useEffect(() => {
    setMoreButtonDisplay(false)
    if (!truncateText) return
    if (!descriptionElementRef) return

    const parent = descriptionElementRef.current
    const child = descriptionElementRef.current?.children[0]

    if (!child) return

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true)
    }
  }, [descriptionElementRef, truncateText])

  return (
    <div
      className={classNames(
        'k-BackingCard__descriptionWrapper',
        'k-BackingCard__drawer',
        'k-BackingCard__drawer--extensible',
        className,
        {
          'k-BackingCard__descriptionWrapper--hasMore': displayMoreButton,
        },
      )}
      {...props}
    >
      <div
        ref={descriptionElementRef}
        className={classNames('k-BackingCard__description', {
          'k-BackingCard__description--truncateText': truncateText,
        })}
      >
        <div>{children}</div>
      </div>

      {displayMoreButton && (
        <Text
          className="k-BackingCard__description__moreButton"
          color="primary1"
          weight="regular"
          size="micro"
        >
          {moreButtonText}
        </Text>
      )}
    </div>
  )
}

Description.defaultProps = {
  moreButtonText: 'More…',
  truncateText: false,
}

Description.propTypes = {
  moreButtonText: PropTypes.node,
  truncateText: PropTypes.bool,
}
