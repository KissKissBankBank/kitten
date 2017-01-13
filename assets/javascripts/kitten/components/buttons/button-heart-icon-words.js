import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export class ButtonHeartIconWords extends React.Component {
  render() {
    return (
      <Button { ...this.props } className='k-Button--icon'>
        <HeartIcon className="k-Button__icon" />
      </Button>
    )
  }
}

ButtonHeartIconWords.defaultProps = {
  name: 'hydrogen',
  text: 'Button',
}
