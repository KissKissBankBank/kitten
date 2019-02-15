import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { TextInput } from '../../../form/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'

export class FieldInput extends Component {
  static propTypes = {
    limit: PropTypes.number,
  }

  static defaultProps = {
    limit: null,
  }

  render() {
    const Input = this.props.limit ? TextInputWithLimit : TextInput

    return (
      <Marger top="1.5">
        <Input {...this.props} />
      </Marger>
    )
  }
}
