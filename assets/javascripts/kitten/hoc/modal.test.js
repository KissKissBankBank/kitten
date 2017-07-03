import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { modal } from 'kitten/hoc/modal'
import { Button } from 'kitten/components/buttons/button'


const ExampleContentComponent = props => {
  const exampleClassName = classNames(
    'test-ExampleContent',
    props.className,
  )
  return (
    <div { ...props } className={ exampleClassName }>
      <div> coucou </div>
    </div>
  )
}

const ExampleTriggerComponent = props => (
  <Button { ...props } />
)

const ExampleModal = modal(ExampleContentComponent, ExampleTriggerComponent)

describe('modal()', () => {
  describe('with TriggerComponent', () => {
    const component = mount(
      <ExampleModal>
        <Button />
      </ExampleModal>)

    it('has a trigger class', () => {
      expect(component).to.have.descendants('.k-Button')
    })
  })
})
