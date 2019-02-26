import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { ResponsiveImage } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Images/ResponsiveImage', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <ResponsiveImage
          src="/assets/home/block-lbp.jpg"
          alt="Look a that picture!"
          fromM={150}
          fromL={500}
          fromXl={1300}
          pictureProps={{ className: 'picture' }}
          isResponsive={true}
        />
        <br />
        <ResponsiveImage
          src="/assets/home/block-lbp.jpg"
          alt="Look a that picture!"
          isResponsive={true}
        />
      </StoryContainer>
    )
  })
