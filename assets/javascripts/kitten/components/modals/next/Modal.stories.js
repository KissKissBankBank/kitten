import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Modal } from './index'
import { Button } from '../../../components/buttons/button/button'

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

export default {
  title: 'NEXT/Modal',
  decorators: [withKnobs],
  component: Modal,
  subcomponents: {
    Title: Modal.Title,
    Paragraph: Modal.Paragraph,
    Actions: Modal.Actions,
    Button: Modal.Button,
  },
}

export const OneButton = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    big={boolean('Big size', false)}
    huge={boolean('Huge size', false)}
  >
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Paragraph>{text('content', paragraphContainer)}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
        </Modal.Actions>
      </>
    )}
  </Modal>
)

export const TwoButton = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    big={boolean('Big size', true)}
    huge={boolean('Huge size', false)}
  >
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Paragraph>{text('content', paragraphContainer)}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
          <Modal.Button modifier="oxygen">Action 2 Button</Modal.Button>
        </Modal.Actions>
      </>
    )}
  </Modal>
)

export const WithState = () => {
  const [showModal, updateModalState] = useState(false)
  return (
    <>
      <Button modifier="helium" onClick={() => updateModalState(!showModal)}>
        Open
      </Button>
      <Modal
        isOpen={showModal}
        hasCloseButton={boolean('Has close button', true)}
        big={boolean('Big size', false)}
        huge={boolean('Huge size', false)}
        onClose={() => updateModalState(false)}
      >
        {() => (
          <>
            <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
            <Modal.Paragraph>
              {text('content', paragraphContainer)}
            </Modal.Paragraph>
            <Modal.Actions>
              <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
            </Modal.Actions>
          </>
        )}
      </Modal>
    </>
  )
}

export const WithCloseButton = () => {
  return (
    <Modal trigger={<Button modifier="helium">Open</Button>}>
      {() => (
        <>
          <Modal.Title>Modal</Modal.Title>
          <Modal.Actions>
            <Modal.CloseButton>Close it !</Modal.CloseButton>
          </Modal.Actions>
        </>
      )}
    </Modal>
  )
}

export const Multi = () => {
  return (
    <>
      <Modal trigger={<Button modifier="helium">Open 1</Button>}>
        {() => <Modal.Title>Modal 1</Modal.Title>}
      </Modal>
      <Modal trigger={<Button modifier="helium">Open 2</Button>}>
        {() => <Modal.Title>Modal 2</Modal.Title>}
      </Modal>
    </>
  )
}
