import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioButton } from './index'
import { Grid, GridCol } from '../../../components/layout/grid'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: RadioButton,
  title: 'Form/RadioButton',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RadioButton" />,
    },
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="8">
      <RadioButton
        id="test_1"
        name="test"
        onLabelClick={action('label-click')}
        onChange={action('change')}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        large={boolean('Large', false)}
        largeContent={boolean('LargeContent', false)}
        text={text('Text', 'RadioButton Label')}
        size={select('Size', { regular: 'regular', big: 'big' }, 'regular')}
        variant={select(
          'Variant',
          { andromeda: 'andromeda', orion: 'orion' },
          'andromeda',
        )}
        design={select('Design', { disc: 'disc', check: 'check' }, 'radio')}
      >
        {text('Content', '')}
      </RadioButton>
      <RadioButton
        id="test_2"
        name="test"
        onLabelClick={action('label-click')}
        onChange={action('change')}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        large={boolean('Large', false)}
        largeContent={boolean('LargeContent', false)}
        text={text('Text', 'RadioButton Label')}
        variant={select(
          'Variant',
          { andromeda: 'andromeda', orion: 'orion' },
          'andromeda',
        )}
        size={select('Size', { regular: 'regular', big: 'big' }, 'regular')}
        design={select('Design', { disc: 'disc', check: 'check' }, 'radio')}
      >
        {text('Content', '')}
      </RadioButton>
      <RadioButton
        id="test_3"
        name="test"
        onLabelClick={action('label-click')}
        onChange={action('change')}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        large={boolean('Large', false)}
        largeContent={boolean('LargeContent', false)}
        text={text('Text', 'RadioButton Label')}
        variant={select(
          'Variant',
          { andromeda: 'andromeda', orion: 'orion' },
          'andromeda',
        )}
        size={select('Size', { regular: 'regular', big: 'big' }, 'regular')}
        design={select('Design', { disc: 'disc', check: 'check' }, 'radio')}
      >
        {text('Content', '')}
      </RadioButton>
    </GridCol>
  </Grid>
)
