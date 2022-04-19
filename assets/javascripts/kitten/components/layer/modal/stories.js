import React from 'react'
import { Modal } from './index'
import { Button, Paragraph } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

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
  title: 'Layer/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="Modal as Modal" />
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
  trigger: (
    <Button modifier="helium" onClick={action('Trigger clicked')}>
      Open
    </Button>
  ),
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
    options: ['small', 'medium', 'large'],
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
}

export const Default = ({
  contentText,
  buttonSelection,
  ...args
}) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title modifier="tertiary">Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Content>
          <Paragraph modifier="tertiary" noMargin className="k-u-align-center">
           {contentText}
          </Paragraph>
        </Modal.Content>
        {buttonSelection > 0 && (
          <Modal.Button modifier="helium">Modal.Button</Modal.Button>
        )}
        {buttonSelection > 1 && (
          <Modal.CloseButton modifier="hydrogen">
            Modal.CloseButton
          </Modal.CloseButton>
        )}
      </>
    )}
  </Modal>
)
Default.args = {
  ...args,
  buttonSelection: 1,
}
Default.argTypes = {
  ...argTypes,
  buttonSelection: {
    name: 'number of action buttons to display (story prop)',
    control: { type: 'range', min: 0, max: 2 },
  },
}

export const withForm = ({ contentText, ...args }) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Content>
        
        </Modal.Content>
        {buttonSelection > 0 && (
          <Modal.Button modifier="helium">Modal.Button</Modal.Button>
        )}
        {buttonSelection > 1 && (
          <Modal.CloseButton modifier="hydrogen">
            Modal.CloseButton
          </Modal.CloseButton>
        )}
      </>
    )}
  </Modal>
)
