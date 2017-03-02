import React from 'react'
import { Button } from 'kitten/components/buttons/button'

export class StaticTooltip extends React.Component {
  render() {
    return (
      <div className="k-StaticTooltip">
        <Button className="k-Button k-Button--helium">
          Button
        </Button>
        <div className="k-StaticTooltip__content">
          Bonjour
        </div>
      </div>
    )
  }
}
