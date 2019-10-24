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
    <ToggleSwitch />
    ~~~

    #### Big label text
    ~~~js
    <ToggleSwitch big />
    ~~~

    #### Disabled
    ~~~js
    <ToggleSwitch disabled />
    ~~~

    #### Change label text
    ~~~js
    <ToggleSwitch label="custom label text" />
    ~~~

    #### Change visibility of label
    ~~~js
    <ToggleSwitch isLabelVisible={ false } />
    ~~~

    #### Reverse order of label & switch
    ~~~js
    <ToggleSwitch reverseOrder />
    ~~~

    #### Have component switched on load
    ~~~js
    <ToggleSwitch isChecked />
    ~~~

    #### Change colors
    ~~~js
    <ToggleSwitch checkedColor="#000" defaultColor="#000" disabledColor="#ccc" />
    ~~~

  `,
}

storiesOf('Form/ToggleSwitch', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('ToggleSwitch', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <ToggleSwitch
            disabled={boolean('Disabled', false)}
            big={boolean('Big', false)}
            label={text('Label', 'Le label')}
            isLabelVisible={boolean('isLabelVisible', true)}
            reverseOrder={boolean('reverseOrder', false)}
          />
        </GridCol>
      </Grid>
    )
  })
