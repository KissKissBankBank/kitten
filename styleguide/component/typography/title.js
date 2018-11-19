import React from 'react'
import { Title } from 'kitten/components/typography/title'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Title 1" col="8">
        <Title />
      </Example>
      <Example title="Title 2" col="8">
        <Title modifier="secondary" tag="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
      </Example>
      <Example title="Title 3" col="8">
        <Title modifier="tertiary" tag="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
      </Example>
      <Example title="Title 4" col="8">
        <Title modifier="quaternary" tag="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Title>
      </Example>
      <Example title="Title 5" col="6">
        <Title modifier="quinary" tag="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Title>
      </Example>
      <Example title="Title 6" col="7">
        <Title modifier="senary" tag="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Title>
      </Example>
      <Example title="Title with italic typo" col="7">
        <Title modifier="tertiary" tag="h3" italic>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Title>
      </Example>
    </div>
  )
}
