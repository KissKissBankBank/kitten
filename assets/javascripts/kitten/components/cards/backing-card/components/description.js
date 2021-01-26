import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'

export const Description = ({
  children,
  className,
  moreButtonText,
  ...props
}) => {
  const descriptionElementRef = useRef(null)
  const [displayMoreButton, setMoreButtonDisplay] = useState(false)

  useEffect(() => {
    if (!descriptionElementRef) {
      return null
    }

    const parent = descriptionElementRef.current
    const child = descriptionElementRef.current.children[0]

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
