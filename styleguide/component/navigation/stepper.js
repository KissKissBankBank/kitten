import React from 'react'
import { Stepper } from '../../../assets/javascripts/kitten/components/steppers/stepper'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Beginning">
        <Stepper
          items={[
            {
              text: 'Catopuma\n Temminckii',
              href: '#',
              linkClassNames: 'k-Stepper__link--inProgress',
              iconType: 'inProgress',
            },
            {
              text: 'Prionaelurus\n planiceps',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
            {
              text: 'Serval',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
            {
              text: 'Lynx\n pardinus',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
          ]}
        />
      </Example>
      <Example title="In progress">
        <Stepper
          items={[
            {
              text: 'Catopuma\n Temminckii',
              href: '#',
              iconType: 'validated',
            },
            {
              text: 'Prionaelurus\n planiceps',
              href: '#',
              linkClassNames: 'k-Stepper__link--inProgress',
              iconType: 'inProgress',
            },
            {
              text: 'Serval',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
            {
              text: 'Lynx\n pardinus',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
          ]}
        />
      </Example>
      <Example title="Draft">
        <Stepper
          items={[
            {
              text: 'Catopuma\n Temminckii',
              href: '#',
              iconType: 'validated',
            },
            {
              text: 'Serval',
              href: '#',
              iconType: 'default',
            },
            {
              text: 'Prionaelurus\n planiceps',
              href: '#',
              linkClassNames: 'k-Stepper__link--inProgress',
              iconType: 'inProgress',
            },
            {
              text: 'Lynx\n pardinus',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
          ]}
        />
      </Example>
      <Example title="Aligned to start">
        <Stepper
          withAlignStart
          withTinySPacing
          items={[
            {
              text: 'Catopuma\n Temminckii',
              href: '#',
              iconType: 'validated',
            },
            {
              text: 'Serval',
              href: '#',
              iconType: 'default',
            },
            {
              text: 'Prionaelurus\n planiceps',
              href: '#',
              linkClassNames: 'k-Stepper__link--inProgress',
              iconType: 'inProgress',
            },
            {
              text: 'Lynx\n pardinus',
              linkClassNames: 'k-Stepper__link--inactive',
              iconType: 'default',
            },
          ]}
        />
      </Example>
    </div>
  )
}
