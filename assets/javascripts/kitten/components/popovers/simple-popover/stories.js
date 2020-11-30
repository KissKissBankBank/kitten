import React, { useState } from 'react'
import { SimplePopover } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Button } from '../../../components/buttons/button/button'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="10" style={{ marginLeft: 60 }}>
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Popovers/SimplePopover',
  component: SimplePopover,
}

export const Default = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close or Cancel clicked')
    setVisibility(false)
  }

  return (
    <StoryContainer>
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
        <Button onClick={() => setVisibility(true)}>Show Popover</Button>
      )}
    </StoryContainer>
  )
}

export const WithoutIllustration = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close or Cancel clicked')
    setVisibility(false)
  }

  return (
    <StoryContainer>
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
        <Button onClick={() => setVisibility(true)}>Show Popover</Button>
      )}
    </StoryContainer>
  )
}

export const WithoutButtons = () => {
  const [isVisible, setVisibility] = useState(true)

  const closeClick = () => {
    console.warn('Close clicked')
    setVisibility(false)
  }

  return (
    <StoryContainer>
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
    </StoryContainer>
  )
}
