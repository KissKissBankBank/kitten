import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './index'

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  parameters: {
    component: Checkbox,
  },
}

export const Default = () => (
  <div className="story-Container story-Grid">
    <div>
      <Checkbox
        onLabelClick={action('label-click')}
        indeterminate={boolean('indeterminate', false)}
        id={text('id', 'checkbox_id')}
        disabled={boolean('disabled', false)}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        {text('text', 'Checkbox Label')}
      </Checkbox>
      <Checkbox
        id="checkbox_id_2"
        indeterminate={boolean('indeterminate', false)}
        disabled={boolean('disabled', false)}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        This label has a <a href="#link">link</a>.
      </Checkbox>
    </div>
  </div>
)

export const WithContent = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <div>
      <Checkbox
        indeterminate={boolean('indeterminate', false)}
        id={text('id', 'checkbox_id')}
        disabled={boolean('disabled', false)}
        label={text('label', 'Checkbox Label')}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        {text('content', 'Checkbox content')}
      </Checkbox>
      <Checkbox
        indeterminate={boolean('indeterminate', false)}
        id="checkbox_id_1"
        disabled={boolean('disabled', false)}
        label="This checkbox has a label prop but no children"
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      />
      <Checkbox
        indeterminate={boolean('indeterminate', false)}
        id="checkbox_id_2"
        disabled={boolean('disabled', false)}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        This checkbox doesn't have a `label` prop.
        <br />
        Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis
        consectetur purus sit amet fermentum.
      </Checkbox>
      <Checkbox
        indeterminate={boolean('indeterminate', false)}
        id="checkbox_id_3"
        disabled={boolean('disabled', false)}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
        label="This checkbox has a Label prop and a big content"
      >
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla
        sed consectetur. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Morbi
        leo risus, porta ac consectetur ac, vestibulum at eros.
        <br />
        Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Curabitur blandit tempus porttitor. Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat
        porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit.
      </Checkbox>
    </div>
  </div>
)
