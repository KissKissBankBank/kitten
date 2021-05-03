import React, { useState } from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { Modal } from './index'
import { Button } from '../../../components/buttons/button'
import { SaveIcon } from '../../../components/icons/save-icon'

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
  title: 'Modals/Modal/Next',
  component: Modal,
  subcomponents: {
    Title: Modal.Title,
    Paragraph: Modal.Paragraph,
    Actions: Modal.Actions,
    Button: Modal.Button,
    CloseButton: Modal.CloseButton,
  },
}

export const OneButton = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    zIndex={number('Overlay z-index', 110)}
    headerTitle={text('headerTitle', null)}
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
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    headerTitle={text('headerTitle', null)}
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
        size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
        variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
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

export const WithoutButton = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
    zIndex={number('Overlay z-index', 110)}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
  >
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Paragraph withoutMargin>
          {text('content', paragraphContainer)}
        </Modal.Paragraph>
      </>
    )}
  </Modal>
)

export const FullSize = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    zIndex={number('Overlay z-index', 110)}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    fullSizeTitle={text('fullSizeTitle', 'Lorem ipsum dolor sit consectetuer')}
    fullSize
  >
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Paragraph>
          {text('content', `${paragraphContainer} ${paragraphContainer}`)}
        </Modal.Paragraph>
        <Modal.Actions>
          <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
        </Modal.Actions>
      </>
    )}
  </Modal>
)

const OrionHeaderTitle = () => {
  return (
    <p>
      <strong>Hello world !</strong>
      <br />
      Hey
    </p>
  )
}
const OrionHeaderActions = ({close}) => (
  <>
    <Button
      className="k-u-hidden@xs-down--important"
      variant="orion"
      modifier="helium"
      type="button"
      onClick={close}
    >
      <span>
        <SaveIcon width="16" />
      </span>
      <span>Sauvegarder</span>
    </Button>
    <Button
      className="k-u-hidden@s-up--important"
      icon
      variant="orion"
      modifier="helium"
      type="button"
      onClick={close}
      aria-label="Sauvegarder"
    >
      <SaveIcon width="16" />
    </Button>
  </>
)

export const ComplexWithOrion = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    variant="orion"
    headerTitle={<OrionHeaderTitle />}
    headerActions={OrionHeaderActions}
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'giant')}
    variant={select('Variant', ['andromeda', 'orion', 'orion'])}
  >
    {() => (
      <>
        <Modal.Block className="k-u-background-color-background3">
          {text('content', paragraphContainer)}
        </Modal.Block>
        <Modal.Paragraph align="left">
          {text('content', paragraphContainer)}
        </Modal.Paragraph>
      </>
    )}
  </Modal>
)

export const CustomContentCols = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    zIndex={number('Overlay z-index', 110)}
    headerTitle={text('headerTitle', null)}
    contentCols={{
      xxs: 12,
      s: 10,
      l: 8,
      xl: 6,
    }}
  >
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Block className="k-u-background-color-background3">
          {text('content', paragraphContainer)}
        </Modal.Block>
        <Modal.Paragraph>{text('content', paragraphContainer)}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
        </Modal.Actions>
      </>
    )}
  </Modal>
)
