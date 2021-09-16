import React, { useState } from 'react'
import { Modal } from './index'
import { Button, Text, SaveIcon, COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

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
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ModalNext as Modal" />
      ),
    },
  },
  subcomponents: {
    Title: Modal.Title,
    Paragraph: Modal.Paragraph,
    Actions: Modal.Actions,
    Button: Modal.Button,
    CloseButton: Modal.CloseButton,
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

const args = {
  ...Modal.defaultProps,
  trigger: <Button modifier="helium">Open</Button>,
  contentText: paragraphContainer,
}

const argTypes = {
  trigger: {
    name: 'trigger',
    description: 'React element that is used as a trigger for the Modal.',
    control: null,
  },
  label: {
    name: 'label',
    description: 'Label for the modal. For accessibility purposes.',
    control: 'text',
  },
  labelledby: {
    name: 'labelledby',
    description:
      'ID for the element that labels the modal. For accessibility purposes.',
    control: 'text',
  },
  describedby: {
    name: 'describedby',
    description:
      'ID for the element that describes the content of the modal. For accessibility purposes.',
    control: 'text',
  },
  closeButtonLabel: {
    name: 'closeButtonLabel',
    description: 'Label for the close button. For accessibility purposes.',
    control: 'text',
  },
  fullSize: {
    name: 'fullSize',
    control: 'boolean',
  },
  fullSizeOnMobile: {
    name: 'fullSizeOnMobile',
    control: 'boolean',
  },
  modalProps: {
    name: 'modalProps',
    control: 'object',
  },
  hasCloseButton: {
    name: 'hasCloseButton',
    control: 'boolean',
  },
  size: {
    name: 'size',
    options: ['regular', 'big', 'huge', 'giant'],
    control: 'select',
  },
  isOpen: {
    name: 'isOpen',
    control: 'boolean',
  },
  zIndex: {
    name: 'zIndex',
    control: 'number',
  },
  variant: {
    name: 'variant',
    options: ['andromeda', 'orion'],
    control: 'inline-radio',
  },
  headerTitle: {
    name: 'headerTitle',
    control: 'object',
  },
  headerActions: {
    name: 'headerActions',
    control: 'object',
  },
  headerMessage: {
    name: 'headerMessage',
    control: 'object',
  },
  contentCols: {
    name: 'contentCols',
    control: 'object',
  },
  headerZIndex: {
    name: 'headerZIndex',
    control: 'number',
  },
  contentText: {
    name: 'content text (story prop)',
    control: 'text',
  },
}

export const Default = ({
  z_sticky,
  z_stickyOnMobile,
  z_fullSize,
  z_fullSizeOnMobile,
  contentText,
  buttonSelection,
  ...args
}) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Paragraph>{contentText}</Modal.Paragraph>
        <Modal.Actions
          sticky={z_sticky}
          stickyOnMobile={z_stickyOnMobile}
          fullSize={z_fullSize}
          fullSizeOnMobile={z_fullSizeOnMobile}
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
Default.args = {
  ...args,
  buttonSelection: 1,
  z_sticky: false,
  z_stickyOnMobile: false,
  z_fullSize: false,
  z_fullSizeOnMobile: false,
}
Default.argTypes = {
  ...argTypes,
  buttonSelection: {
    name: 'number of action buttons to display (story prop)',
    control: { type: 'range', min: 0, max: 2 },
  },
  z_sticky: {
    name: 'Modal.Actions: sticky (story prop)',
    control: 'boolean',
  },
  z_stickyOnMobile: {
    name: 'Modal.Actions: stickyOnMobile (story prop)',
    control: 'boolean',
  },
  z_fullSize: {
    name: 'Modal.Actions: fullSize (story prop)',
    control: 'boolean',
  },
  z_fullSizeOnMobile: {
    name: 'Modal.Actions: fullSizeOnMobile (story prop)',
    control: 'boolean',
  },
}

export const Controlled = ({ contentText, ...args }) => {
  const [showModal, updateModalState] = useState(false)

  return (
    <div>
      <Button modifier="helium" onClick={() => updateModalState(!showModal)}>
        Open
      </Button>
      <Text tag="p" weight="light">
        The modal is controlled through a state that controls the{' '}
        <code>isOpen</code> prop.
        <br />
        Should Modal be shown? <code>{showModal.toString()}</code>
      </Text>
      <Modal
        {...args}
        trigger={null}
        isOpen={showModal}
        hasCloseButton
        onClose={() => updateModalState(false)}
      >
        {() => (
          <>
            <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
            <Modal.Paragraph>{contentText}</Modal.Paragraph>
            <Modal.Actions>
              <Modal.Button modifier="hydrogen">Modal.Button</Modal.Button>
            </Modal.Actions>
          </>
        )}
      </Modal>
    </div>
  )
}
Controlled.args = args
Controlled.argTypes = argTypes

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

export const FullSize = ({ contentText, ...args }) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title>This modal is full sized</Modal.Title>
        <Modal.Paragraph>
          The display of a header depends on the <code>headerTitle</code> prop.
        </Modal.Paragraph>
        <Modal.Paragraph>{contentText}</Modal.Paragraph>
        <Modal.Paragraph>{contentText}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.Button modifier="helium">Action 1 Button</Modal.Button>
        </Modal.Actions>
      </>
    )}
  </Modal>
)
FullSize.args = {
  ...args,
  fullSize: true,
  headerTitle: (
    <Text size="tiny" color="font1" weight="regular">
      Lorem ipsum dolor sit consectetuer
    </Text>
  ),
}
FullSize.argTypes = argTypes

export const ComplexWithOrion = ({ contentText, ...args }) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Block className="k-u-background-color-background3">
          <Text weight="light" tag="p" className="k-u-margin-vertical-triple">
            <span>
              Inside a <code>Modal.Block</code>
            </span>
            <br />
            {contentText}
          </Text>
        </Modal.Block>
        <Modal.Paragraph align="left">
          <span>
            Inside a <code>Modal.Paragraph</code>
          </span>
          <br />
          {contentText}
        </Modal.Paragraph>
      </>
    )}
  </Modal>
)
ComplexWithOrion.args = {
  ...args,
  variant: 'orion',
  headerTitle: (
    <Text weight="bold" size="giant">
      Modal title
    </Text>
  ),
  headerActions: ({ close }) => (
    <>
      <Button
        className="k-u-hidden@xs-down"
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
        className="k-u-hidden@s-up"
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
  ),
  headerMessage: (
    <Text size="micro" weight="light" cssColor={COLORS.grey1}>
      This is a header message
    </Text>
  ),
}
ComplexWithOrion.argTypes = argTypes

export const CustomInnerSize = ({ contentText, ...args }) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title>Custom inner size</Modal.Title>
        <Modal.Block className="k-u-background-color-background3">
          <Text weight="light" tag="p" className="k-u-margin-vertical-triple">
            This Modal has the following inner size, defined by{' '}
            <code>contentCols</code> prop:
            <br />
            <code>{JSON.stringify(args.contentCols)}</code>
          </Text>
        </Modal.Block>
        <Modal.Paragraph>{contentText}</Modal.Paragraph>
        <Modal.Actions>
          <Modal.CloseButton modifier="helium">
            Modal.CloseButton
          </Modal.CloseButton>
        </Modal.Actions>
      </>
    )}
  </Modal>
)

CustomInnerSize.args = {
  ...args,
  variant: 'orion',
  contentCols: {
    xxs: 12,
    s: 10,
    l: 8,
    xl: 6,
  },
}
CustomInnerSize.argTypes = argTypes
