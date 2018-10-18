import React, { Component } from 'react'
import { CounterBlock } from 'kitten/components/meters/counter-block'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'

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
