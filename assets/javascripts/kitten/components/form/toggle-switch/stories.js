import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ToggleSwitch } from './index'

const info = {
  text: `
    # ToggleSwitch
    &nbsp;

    ## Import
    ~~~js
    import { ToggleSwitch } from '@kisskissbankbank/kitten/src/components/form/switch'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ToggleSwitch id="toggle-switch" />
    ~~~

    #### Big label text
    ~~~js
    <ToggleSwitch id="toggle-switch" big />
    ~~~

    #### Disabled
    ~~~js
    <ToggleSwitch id="toggle-switch" disabled />
    ~~~

    #### Change label text
    ~~~js
    <ToggleSwitch id="toggle-switch" label="custom label text" />
    ~~~

    #### Change visibility of label
    ~~~js
    <ToggleSwitch id="toggle-switch" isLabelVisible={ false } />
    ~~~

    #### Reverse order of label & switch
    ~~~js
    <ToggleSwitch id="toggle-switch" reverseOrder />
    ~~~

    #### Have component switched on load
    ~~~js
    <ToggleSwitch id="toggle-switch" isChecked />
    ~~~

    #### Change colors
    ~~~js
    <ToggleSwitch id="toggle-switch" checkedColor="#000" defaultColor="#000" disabledColor="#ccc" activeColor="#333" />
    ~~~

  `,
}

storiesOf('Form/ToggleSwitch', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'ToggleSwitch',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="6">
            <ToggleSwitch
              id="toggle-switch"
              disabled={boolean('Disabled', false)}
              big={boolean('Big', false)}
              label={text('Label', 'Le label')}
              isLabelVisible={boolean('isLabelVisible', true)}
              reverseOrder={boolean('reverseOrder', false)}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
