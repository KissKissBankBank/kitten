import React, { useEffect } from 'react'
import flow from 'lodash/fp/flow'
import keys from 'lodash/fp/keys'
import intersection from 'lodash/fp/intersection'

export const Deprecated = ({ children, warningMessage }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const owner = React.Children.only(children)._owner

      if (!owner) return

      const componentName = owner.type.name

      console.warn(`Warning: ${componentName} is deprecated.`, warningMessage)
    }
  }, [])

  return children
}

export const hasDeprecatedProps = deprecatedKeys => props =>
  flow(keys, intersection(deprecatedKeys))(props).length > 0
