import React from 'react'
import { Button } from 'kitten/components/buttons/button'

export class StaticTooltip extends React.Component {
  renderButton() {
    return (
      <Button className="k-Button k-Button--helium">
        Button
      </Button>
    )
  }

  render() {
    const { id,
            children,
    } = this.props

    return (
      <div className="k-StaticTooltip"
           id={ id }>
        { this.renderButton() }
        <div className="k-StaticTooltip__content"
             id={ id }>
          { children }
        </div>
      </div>
    )
  }
}

StaticTooltip.defaultProps = {
  id: 'Toto',
}
