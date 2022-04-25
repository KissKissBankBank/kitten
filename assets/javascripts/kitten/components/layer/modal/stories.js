import React from 'react'
import { Modal } from './index'
import { Button, Paragraph, Field } from 'kitten'
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
  onClose: action('onClose triggered'),
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

export const Default = ({ contentText, buttonSelection, ...args }) => (
  <Modal {...args}>
    {() => (
      <>
        <Modal.Title align="center">
          Lorem ipsum dolor sit consectetuer
        </Modal.Title>
        <Modal.Content align="center">
          <Paragraph modifier="tertiary" noMargin className="k-u-align-center">
            {contentText}
          </Paragraph>
        </Modal.Content>
        {buttonSelection > 0 && (
          <Modal.Actions>
            {buttonSelection > 1 && (
              <Button modifier="hydrogen">Modal.Button</Button>
            )}
            <Button modifier="helium">Modal.Button</Button>
          </Modal.Actions>
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

export const withForm = () => (
  <Modal {...Default.args}>
    {({ close }) => (
      <>
        <Modal.Title>Lorem ipsum dolor sit consectetuer</Modal.Title>
        <Modal.Content>
          <Modal.Form twoColumns>
            <div>
              <Field.Label labelProps={{ htmlFor: 'girlishly' }}>
                Girlishly
              </Field.Label>
              <Field.Input size="medium" id="girlishly" />
            </div>
            <div>
              <Field.Label labelProps={{ htmlFor: 'acropolitan' }}>
                Acropolitan
              </Field.Label>
              <Field.Input size="medium" id="acropolitan" />
            </div>
          </Modal.Form>
          <Modal.Form twoColumns>
            <div>
              <Field.Label labelProps={{ htmlFor: 'choreic' }}>
                Choreic
              </Field.Label>
              <Field.Input size="medium" id="choreic" />
            </div>
          </Modal.Form>
          <Modal.Form twoColumns>
            <div>
              <Field.Label labelProps={{ htmlFor: 'nectarine' }}>
                Nectarine
              </Field.Label>
              <Field.Input size="medium" id="nectarine" />
            </div>
            <div>
              <Field.Label labelProps={{ htmlFor: 'petrifiable' }}>
                Petrifiable
              </Field.Label>
              <Field.Input size="medium" id="petrifiable" />
            </div>
          </Modal.Form>
          <Modal.Form>
            <div>
              <Field.Label labelProps={{ htmlFor: 'eversive' }}>
                Eversive
              </Field.Label>
              <Field.Input size="medium" id="eversive" />
            </div>
          </Modal.Form>
          <Modal.Form>
            <div>
              <Field.Label labelProps={{ htmlFor: 'interpenetrable' }}>
                Interpenetrable
              </Field.Label>
              <Field.Input size="medium" id="interpenetrable" />
            </div>
          </Modal.Form>
          <Modal.Actions>
            <Button modifier="helium" fit="fluid" onClick={close}>
              Ajouter le bénéficiaire
            </Button>
          </Modal.Actions>
        </Modal.Content>
      </>
    )}
  </Modal>
)

export const withAction = () => (
  <Modal {...Default.args} size="medium">
    {() => (
      <>
        <Modal.Title>Oops… Quelque chose s’est mal passé.</Modal.Title>
        <Modal.Content>
          <Paragraph modifier="tertiary" noMargin className="k-u-align-center">
            Notre équipe a été automatiquement notifiée et fait en sorte de
            résoudre ce problème au plus vite.
          </Paragraph>
          <Modal.Actions>
            <Button modifier="helium">Retour à la page d’accueil</Button>
            <Button modifier="hydrogen">Recharger la page</Button>
          </Modal.Actions>
        </Modal.Content>
      </>
    )}
  </Modal>
)
