import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithCounter extends React.Component {
  render() {
    return (
      <div className="k-TextInputCounter">
        <div className="k-TextInput__counter">42</div>
        <TextInput />
      </div>
    )
  }
}
