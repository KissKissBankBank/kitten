import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Switch } from './index'

const info = {
  text: `
    # Switch
    &nbsp;

    ## Import
    ~~~js
    import { Switch } from '@kisskissbankbank/kitten/src/components/form/switch'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Switch />
    ~~~

    #### Big label text
    ~~~js
    <Switch big />
    ~~~

    #### Disabled
    ~~~js
    <Switch disabled />
    ~~~

    #### Change label text
    ~~~js
    <Switch label="custom label text" />
    ~~~

    #### Change visibility of label
    ~~~js
    <Switch isLabelVisible={ false } />
    ~~~

    #### Reverse order of label & switch
    ~~~js
    <Switch reverseOrder />
    ~~~

    #### Have component switched on load
    ~~~js
    <Switch isChecked />
    ~~~

    #### Change colors
    ~~~js
    <Switch checkedColor="#000" defaultColor="#000" disabledColor="#ccc" />
    ~~~

  `,
}

storiesOf('Form/Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Switch', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="6">
          <Switch
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
