import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'

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
    if (!truncateText) return
    if (!descriptionElementRef) return

    const parent = descriptionElementRef.current
    const child = descriptionElementRef.current?.children[0]

    if (!child) return

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true)
    }
  }, [descriptionElementRef])

  return (
    <div
      ref={descriptionElementRef}
      className={classNames(
        'k-BackingCard__descriptionWrapper',
        'k-BackingCard__drawer',
        'k-BackingCard__drawer--extensible',
        className,
        {
          'k-BackingCard__descriptionWrapper--hasMore': displayMoreButton,
          'k-BackingCard__descriptionWrapper--truncateText': truncateText,
        },
      )}
      {...props}
    >
      <div className="k-BackingCard__description">{children}</div>

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
