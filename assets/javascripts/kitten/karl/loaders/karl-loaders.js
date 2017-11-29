import React from 'react'
import { Loader } from 'kitten/components/loaders/loader'
import { Button } from 'kitten/components/buttons/button'
import { Marger } from 'kitten/components/layout/marger'

export const KarlLoaderInButton = props => {
  return (
    <div>
      <Marger top="1" bottom="1">
        <Button icon iconWithMinWidth>
          <Loader className="k-Button__icon" />
        </Button>
      </Marger>

      <Marger top="1" bottom="1">
        <Button modifier="helium" icon iconWithMinWidth>
          <Loader color="#fff" className="k-Button__icon" />
        </Button>
      </Marger>

      <Marger top="1" bottom="1">
        <Button icon iconWithMinWidth disabled>
          <Loader className="k-Button__icon" />
        </Button>
      </Marger>
    </div>
  )
}
