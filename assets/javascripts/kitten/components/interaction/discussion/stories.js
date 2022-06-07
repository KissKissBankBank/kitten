import React, { useState } from 'react'
import { Discussion, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  component: Discussion,
  title: 'Interaction/Discussion',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Discussion" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {},
  args: {},
}

export const Default = args => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Discussion {...args}>
      <p className="k-u-a11y-visuallyHidden">
        Les messages de la discussion sont dans l’ordre antéchronologique : le
        premier message de la liste est le plus récent.
      </p>
      <Discussion.List>
        <Discussion.Message>
          <Discussion.Message.Avatar src="/kitten-3.jpg" />
          <Discussion.Message.Header>
            <Text weight="500" lineHeight="1">
              Claude L.
            </Text>
            <Text
              weight="400"
              lineHeight="1"
              size="micro"
              activeColEl
              color="grey-700"
            >
              &nbsp;•&nbsp;Avant-Hier{' '}
              <span className="k-u-a11y-visuallyHidden">à </span>19:30
            </Text>
          </Discussion.Message.Header>
          <Discussion.Message.Content>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis
            consectetur purus sit amet fermentum. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Integer posuere erat a
            ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
            porta felis euismod semper. Vestibulum id ligula porta felis euismod
            semper.
          </Discussion.Message.Content>
        </Discussion.Message>
        <Discussion.Message>
          <Discussion.Message.Avatar src="/kitten-0.jpg" />
          <Discussion.Message.Header>
            <Text weight="500" lineHeight="1">
              Moi
            </Text>
            <Text weight="400" lineHeight="1" size="micro" color="grey-700">
              &nbsp;•&nbsp;Hier{' '}
              <span className="k-u-a11y-visuallyHidden">à </span>10:00
            </Text>
          </Discussion.Message.Header>
          <Discussion.Message.Content>
            Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae
            elit libero, a pharetra augue.
          </Discussion.Message.Content>
        </Discussion.Message>
        <Discussion.Message>
          <Discussion.Message.Avatar src="/kitten-3.jpg" />
          <Discussion.Message.Header>
            <Text weight="500" lineHeight="1">
              Claude L.
            </Text>
            <Text weight="400" lineHeight="1" size="micro" color="grey-700">
              &nbsp;•&nbsp;Hier{' '}
              <span className="k-u-a11y-visuallyHidden">à </span>18:30
            </Text>
          </Discussion.Message.Header>
          <Discussion.Message.Content>
            Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id
            elit. Maecenas faucibus mollis interdum. Nullam id dolor id nibh
            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
          </Discussion.Message.Content>
        </Discussion.Message>
      </Discussion.List>
      <Discussion.Form
        onSubmit={e => {
          e.preventDefault()
          action('Form submit')(e)
        }}
        inputProps={{
          'aria-label': 'Texte à envoyer',
          placeholder: 'Envoyer un message',
          value: inputValue,
          onChange: e => {
            setInputValue(e.target.value)
          },
        }}
        buttonProps={{
          'aria-label': 'Envoyer',
          onClick: e => {
            action('Click envoyer')(e)
            setInputValue('')
          },
          disabled: inputValue.length < 1,
        }}
      />
    </Discussion>
  )
}
