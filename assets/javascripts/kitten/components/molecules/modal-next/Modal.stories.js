import React, { useState } from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { Modal } from './index'
import { Button, Text, SaveIcon } from '../../..'

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
  title: 'Molecules/Modal/Next',
  component: Modal,
  subcomponents: {
    Title: Modal.Title,
    Paragraph: Modal.Paragraph,
    Actions: Modal.Actions,
    Button: Modal.Button,
    CloseButton: Modal.CloseButton,
  },
}

const buttonSelectionChoices = {
  None: 0,
  'One button': 1,
  'Two with Close': 2,
}

export const Default = () => {
  const buttonSelection = select('Display Buttons', buttonSelectionChoices, 1)

  return (
    <Modal
      trigger={<Button modifier="helium">Open</Button>}
      hasCloseButton={boolean('Has header close button', true)}
      size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
      variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
      zIndex={number('Overlay z-index', 110)}
      headerTitle={text('headerTitle', null)}
      fullSizeOnMobile={boolean('Full size on Mobile', false)}
    >
      {() => (
        <>
          <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
          <Modal.Paragraph>
            {text('content', paragraphContainer)}
          </Modal.Paragraph>
          <Modal.Actions
            sticky={boolean('Actions sticky', false)}
            stickyOnMobile={boolean('Actions sticky on Mobile only', false)}
            fullSize={boolean('Actions fullSize', false)}
            fullSizeOnMobile={boolean('Actions fullSize on Mobile only', false)}
          >
            {buttonSelection > 0 && (
              <Modal.Button modifier="helium">Modal.Button</Modal.Button>
            )}
            {buttonSelection > 1 && (
              <Modal.CloseButton modifier="hydrogen">
                Modal.CloseButton
              </Modal.CloseButton>
            )}
          </Modal.Actions>
        </>
      )}
    </Modal>
  )
}

export const Controlled = () => {
  const [showModal, updateModalState] = useState(false)
  return (
    <>
      <Button modifier="helium" onClick={() => updateModalState(!showModal)}>
        Open
      </Button>
      <Text tag="p" weight="light">
        The modal is controlled through a state that controls the{' '}
        <code>isOpen</code> prop.
      </Text>
      <Modal
        isOpen={showModal}
        hasCloseButton={true}
        onClose={() => updateModalState(false)}
      >
        {() => (
          <>
            <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
            <Modal.Paragraph>{paragraphContainer}</Modal.Paragraph>
            <Modal.Actions>
              <Modal.Button modifier="helium">Modal.Button</Modal.Button>
            </Modal.Actions>
          </>
        )}
      </Modal>
    </>
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

export const FullSize = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    fullSizeTitle={text('fullSizeTitle', 'Lorem ipsum dolor sit consectetuer')}
    fullSize
  >
    {() => (
      <>
        <Modal.Title>This modal is full sized</Modal.Title>
        <Modal.Paragraph>
          The display of a header depends on the <code>fullSizeTitle</code>{' '}
          prop.
        </Modal.Paragraph>
        <Modal.Paragraph>{paragraphContainer}</Modal.Paragraph>
        <Modal.Paragraph>{paragraphContainer}</Modal.Paragraph>
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
const OrionHeaderActions = ({ close }) => (
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
  >
    {() => (
      <>
        <Modal.Block className="k-u-background-color-background3">
          <Text weight="light" tag="p" className="k-u-margin-vertical-triple">
            {text('content', paragraphContainer)}
          </Text>
        </Modal.Block>
        <Modal.Paragraph align="left">
          {text('content', paragraphContainer)}
        </Modal.Paragraph>
      </>
    )}
  </Modal>
)

export const CustomInnerSize = () => (
  <Modal
    trigger={<Button modifier="helium">Open</Button>}
    hasCloseButton={boolean('Has close button', true)}
    size={select('Size', ['regular', 'big', 'huge', 'giant'], 'regular')}
    variant={select('Variant', ['andromeda', 'orion', 'andromeda'])}
    zIndex={number('Overlay z-index', 110)}
    headerTitle={text('headerTitle', '')}
    contentCols={{
      xxs: 12,
      s: 10,
      l: 8,
      xl: 6,
    }}
  >
    {() => (
      <>
        <Modal.Block className="k-u-background-color-background3">
          <Text weight="light" tag="p" className="k-u-margin-vertical-triple">
            This Modal has the following inner size, defined by{' '}
            <code>contentCols</code> prop:
            <br />
            <code>{'{ xxs: 12, s: 10, l: 8, xl: 6 }'}</code>
          </Text>
        </Modal.Block>
        <Modal.Paragraph>{text('content', paragraphContainer)}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.CloseButton modifier="helium">
            Modal.CloseButton
          </Modal.CloseButton>
        </Modal.Actions>
      </>
    )}
  </Modal>
)
