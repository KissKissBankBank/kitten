import React, { Component } from 'react'
import { CounterBlock } from '../../components/meters/counter-block'

export class KarlCounterBlock extends Component {
  render() {
    return (
      <CounterBlock
        title="A counter title"
        subTitle="A counter sub title"
        counter="13 106 700"
      />
    )
  }
}
