import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { Button } from '../../../components/molecules/buttons/button'
import { Title } from '../../../components/atoms/typography/title'
import { Paragraph } from '../../../components/atoms/typography/paragraph/next'
import { Modal } from '../../../components/molecules/modal'
import { Marger } from '../../../components/structure/marger'

const paragraphContainer = `
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
  quae ab illo inventore veritatis et quasi architecto beatae vitae
  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
  sed quia non numquam eius modi tempora incidunt ut labore et dolore
  magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
  nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
  aliquid ex ea commodi consequatur? Quis autem vel eum iure
  reprehenderit qui in ea voluptate velit esse quam nihil molestiae
  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
  pariatur? Sed ut perspiciatis unde omnis iste natus error sit
  voluptatem accusantium doloremque laudantium, totam rem aperiam,
  eaque ipsa quae ab illo inventore veritatis et quasi architecto
  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
  adipisci velit, sed quia non numquam eius modi tempora incidunt ut
  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
  minima veniam, quis nostrum exercitationem ullam corporis suscipit
  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
  vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
  nulla pariatur?
`

const StoryContent = ({ content }) => (
  <Marger top="8" bottom="8">
    <Marger bottom="2">
      <Title modifier="tertiary" noMargin tag="p">
        Lorem ipsum dolor sit consectetuer
      </Title>
    </Marger>

    <Marger top="2" bottom="4">
      <Paragraph modifier="secondary" noMargin tag="p">
        {content}
      </Paragraph>
    </Marger>

    <Marger top="4" bottom="10">
      <Button modifier="helium" size="big">
        Action 1 Button
      </Button>
    </Marger>
  </Marger>
)

const StoryButton = ({ children }) => (
  <Button modifier="helium">{children}</Button>
)

export default {
  title: 'Molecules/Modal',
  component: Modal,
}

export const OldModal = () => (
  <Marger top="2">
    <p className="k-u-weight-light">
      This Modal will be deprecated in the future.
    </p>

    <Modal
      closeButtonLabel="Fermer"
      trigger={<StoryButton children={text('bouton', 'open')} />}
      content={<StoryContent content={text('content', paragraphContainer)} />}
      disableOutsideScroll={boolean('Disable outside scroll', false)}
    />
  </Marger>
)
