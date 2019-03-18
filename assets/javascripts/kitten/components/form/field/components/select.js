import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { SelectWithState } from '../../../form/select-with-state'
import PropTypes from 'prop-types'

export class FieldSelect extends Component {
  static propTypes = {
    withoutMargin: PropTypes.bool,
  }

  static defaultProps = {
    withoutMargin: false,
  }

  render() {
    if (this.props.withoutMargin) {
      return <SelectWithState {...this.props} />
    }

    return (
      <Marger top="1.5">
        <SelectWithState {...this.props} />
      </Marger>
    )
  }
}
