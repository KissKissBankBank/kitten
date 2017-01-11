import React from 'react'
import Button from './button'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export default class ButtonIconWords extends React.Component {
  render() {

    return (
      <Button { ...this.props } className='k-Button--icon' >
        <HeartIcon className="k-Button__icon" />
      </Button>
    )
  }
}

ButtonIconWords.defaultProps = {
  name: 'hydrogen',
  text: 'Button',
}
