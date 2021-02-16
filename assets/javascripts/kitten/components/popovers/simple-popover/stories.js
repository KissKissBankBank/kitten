import React, { useState } from 'react'
import { SimplePopover } from './index'
import { Button } from '../../../components/buttons/button/button'

export default {
  title: 'Popovers/SimplePopover',
  component: SimplePopover,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Default = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close or Cancel clicked')
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
            onClick: () => console.warn('Ok clicked'),
          },
        ]}
      />

      {!isVisible && (
        <div>
          <Button onClick={() => setVisibility(true)}>Show Popover</Button>
        </div>
      )}
    </>
  )
}

export const WithoutIllustration = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close or Cancel clicked')
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
            onClick: () => console.warn('Ok clicked'),
          },
        ]}
      />

      {!isVisible && (
        <div>
          <Button onClick={() => setVisibility(true)}>Show Popover</Button>
        </div>
      )}
    </>
  )
}

export const WithoutButtons = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close clicked')
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
        <div>
          <Button onClick={() => setVisibility(true)}>Show Popover</Button>
        </div>
      )}
    </>
  )
}
