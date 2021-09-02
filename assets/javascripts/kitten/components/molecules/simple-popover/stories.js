import React, { useState } from 'react'
import { SimplePopover } from './index'
import { Button } from '../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/SimplePopover',
  component: SimplePopover,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SimplePopover" />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

export const Default = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    action('Close or Cancel Click')()
    setVisibility(false)
  }

  return (
    <>
      <SimplePopover
        isVisible={isVisible}
        onCloseClick={closeClick}
        titleId="popover-title"
        closeButtonLabel="Close"
        title="This popover has a title"
        text="Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. "
        illustration={<p>🐱</p>}
        buttons={[
          {
            label: 'Cancel',
            modifier: 'hydrogen',
            tiny: true,
            clickOptions: {
              closeOnClick: true,
            },
          },
          {
            label: 'OK',
            modifier: 'helium',
            tiny: true,
            onClick: action('OK Click'),
          },
        ]}
      />

      {!isVisible && (
        <Button onClick={() => setVisibility(true)}>Show Popover</Button>
      )}
    </>
  )
}

export const WithoutIllustration = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    action('Close or Cancel Click')()
    setVisibility(false)
  }

  return (
    <>
      <SimplePopover
        isVisible={isVisible}
        onCloseClick={closeClick}
        titleId="popover-title"
        closeButtonLabel="Close"
        title="This popover has a title"
        text="Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. "
        buttons={[
          {
            label: 'Cancel',
            modifier: 'hydrogen',
            tiny: true,
            clickOptions: {
              closeOnClick: true,
            },
          },
          {
            label: 'OK',
            modifier: 'helium',
            tiny: true,
            onClick: action('Ok Click'),
          },
        ]}
      />

      {!isVisible && (
        <Button onClick={() => setVisibility(true)}>Show Popover</Button>
      )}
    </>
  )
}

export const WithoutButtons = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    action('Close Click')()
    setVisibility(false)
  }

  return (
    <>
      <SimplePopover
        isVisible={isVisible}
        onCloseClick={closeClick}
        titleId="popover-title"
        closeButtonLabel="Close"
        title="This popover has a title"
        text="Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. "
        illustration={<p>🐱</p>}
      />

      {!isVisible && (
        <Button onClick={() => setVisibility(true)}>Show Popover</Button>
      )}
    </>
  )
}
