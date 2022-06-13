import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

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
        'k-RewardCard__descriptionWrapper',
        'k-RewardCard__drawer',
        'k-RewardCard__drawer--extensible',
        className,
      )}
      {...props}
    >
      <div
        ref={descriptionElementRef}
        className={classNames('k-RewardCard__description', {
          'k-RewardCard__description--hasMore': displayMoreButton,
          'k-RewardCard__description--truncateText': truncateText,
        })}
      >
        <div>{children}</div>
      </div>

      {displayMoreButton && (
        <Text
          className="k-RewardCard__description__moreButton"
          color="primary1"
          weight="500"
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
