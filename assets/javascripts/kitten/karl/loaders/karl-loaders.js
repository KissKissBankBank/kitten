import React from 'react'
import { Loader } from 'kitten/components/loaders/loader'
import { Button } from 'kitten/components/buttons/button'
import { Marger } from 'kitten/components/layout/marger'

export const KarlLoaderInButton = props => {
  return (
    <Marger
      top="1"
      bottom="1"
    >
      <Button
        icon
        iconWithMinWidth
        aria-label="Loader button"
        title="Loader button"
        { ...props }
      >
        <Loader className="k-Button__icon" />
      </Button>
    </Marger>
  )
}
