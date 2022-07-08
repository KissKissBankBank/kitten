import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import {
  SlideModal,
  Button,
  Paragraph,
  RadioSet,
  FlexWrapper,
  Details,
  ArrowIcon,
} from 'kitten'

const longParagraph = `
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
  title: 'Layer/Slide Modal',
  component: SlideModal,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SlideModal" />
      ),
    },
  },
  subcomponents: {
    Title: SlideModal.Title,
    Paragraph: SlideModal.Paragraph,
    Actions: SlideModal.Actions,
    Button: SlideModal.Button,
    CloseButton: SlideModal.CloseButton,
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

const args = {
  ...SlideModal.defaultProps,
  trigger: (
    <Button modifier="helium" onClick={action('Trigger clicked')}>
      Open
    </Button>
  ),
  onClose: action('onClose triggered'),
  contentText: longParagraph,
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
  as: {
    name: 'as',
    control: 'text',
  },
}

export const Default = ({ contentText, buttonSelection, ...args }) => (
  <SlideModal {...args}>
    {({close}) => (
      <>
        <SlideModal.Title>
          Lorem ipsum dolor sit consectetuer
        </SlideModal.Title>
        <SlideModal.Content>
          <Paragraph modifier="tertiary" noMargin>
            {contentText}
          </Paragraph>
        </SlideModal.Content>
        {buttonSelection > 0 && (
          <SlideModal.Actions>
            {buttonSelection > 1 && (
              <Button modifier="hydrogen" onClick={close}>SlideModal.Button</Button>
            )}
            <Button modifier="helium" onClick={close}>SlideModal.Button</Button>
          </SlideModal.Actions>
        )}
      </>
    )}
  </SlideModal>
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

export const withAction = () => (
  <SlideModal {...Default.args} size="medium">
    {() => (
      <>
        <SlideModal.Title>Filtrer par :</SlideModal.Title>
        <SlideModal.Content>
          <FlexWrapper gap={20}>
            <RadioSet
              id="statut"
              name="statut"
              label="Statut"
              weight="400"
              items={[
                {
                  text: 'Tous les projets',
                  id: 'statut-a',
                },
                {
                  text: 'En cours de financement',
                  id: 'statut-b',
                  defaultChecked: true,
                },
                {
                  text: 'Terminés',
                  id: 'statut-c',
                },
              ]}
            />
            <RadioSet
              id="tri"
              name="tri"
              label="Trier par"
              weight="400"
              items={[
                {
                  text: 'Popularité',
                  id: 'tri-a',
                  defaultChecked: true,
                },
                {
                  text: 'Montant collecté',
                  id: 'tri-b',
                },
                {
                  text: 'Plus récents',
                  id: 'tri-c',
                },
                {
                  text: 'Derniers jours',
                  id: 'tri-d',
                },
              ]}
            />
            <Details summaryProps={{ className: 'k-u-flex k-u-flex-gap-single k-u-flex-alignItems-center'}} summaryRender={({open}) => (
              <>
                <span className="k-u-font-label-medium k-u-flex-grow-single">Engagements</span>
                <ArrowIcon aria-hidden direction={open ? 'top' : 'bottom'} />
              </>
            )}>
              <RadioSet
                id="engagements"
                name="engagements"
                weight="400"
                className="k-u-margin-top-single"
                items={[
                  {
                    text: "Aide aux migrants",
                    id: 'engagements-1',
                  },
                  {
                    text: "Antiracisme",
                    id: 'engagements-2',
                  },
                  {
                    text: "Autoproduction culturelle",
                    id: 'engagements-3',
                  },
                  {
                    text: "Bien-être animal",
                    id: 'engagements-4',
                  },
                  {
                    text: "Bio",
                    id: 'engagements-5',
                  },
                  {
                    text: "Biodiversité",
                    id: 'engagements-6',
                  },
                  {
                    text: "Changer de vie",
                    id: 'engagements-7',
                  },
                  {
                    text: "Commerce équitable",
                    id: 'engagements-8',
                  },
                  {
                    text: "Développement local",
                    id: 'engagements-9',
                  },
                  {
                    text: "Éducation",
                    id: 'engagements-10',
                  },
                  {
                    text: "Féminisme",
                    id: 'engagements-11',
                  },
                  {
                    text: "LGBTQ+",
                    id: 'engagements-12',
                  },
                  {
                    text: "Locavore",
                    id: 'engagements-13',
                  },
                  {
                    text: "Fabrication française",
                    id: 'engagements-14',
                  },
                  {
                    text: "Santé et Handicap",
                    id: 'engagements-15',
                  },
                  {
                    text: "Média indépendant",
                    id: 'engagements-16',
                  },
                  {
                    text: "Recyclage",
                    id: 'engagements-17',
                  },
                  {
                    text: "Senior",
                    id: 'engagements-18',
                  },
                  {
                    text: "Précommandes",
                    id: 'engagements-19',
                  },
                  {
                    text: "Solidarité internationale",
                    id: 'engagements-20',
                  },
                  {
                    text: "Zéro déchet",
                    id: 'engagements-21',
                  },
                ]}
              />
            </Details>
            <Details summaryProps={{ className: 'k-u-flex k-u-flex-gap-single k-u-flex-alignItems-center'}} summaryRender={({open}) => (
              <>
                <span className="k-u-font-label-medium k-u-flex-grow-single">
                  Catégories
                </span>
                <ArrowIcon aria-hidden direction={open ? 'top' : 'bottom'} />
              </>
            )}>
              <RadioSet
                id="categories"
                name="categories"
                weight="400"
                className="k-u-margin-top-single"
                items={[
                  {
                    text: <><span aria-hidden>🚜</span> Agriculture</>,
                    id: 'category-1'
                  },
                  {
                    text: <><span aria-hidden>🍽</span> Alimentation</>,
                    id: 'category-2'
                  },
                  {
                    text: <><span aria-hidden>🎨</span> Art & photo</>,
                    id: 'category-3'
                  },
                  {
                    text: <><span aria-hidden>⚒</span> Artisanat</>,
                    id: 'category-4'
                  },
                  {
                    text: <><span aria-hidden>🦸🏻‍♂️</span> BD</>,
                    id: 'category-5'
                  },
                  {
                    text: <><span aria-hidden>♻️</span> Écologie</>,
                    id: 'category-6'
                  },
                  {
                    text: <><span aria-hidden>🎞</span> Films & vidéo</>,
                    id: 'category-7'
                  },
                  {
                    text: <><span aria-hidden>🎲</span> Jeux</>,
                    id: 'category-8'
                  },
                  {
                    text: <><span aria-hidden>🗞</span> Journalisme</>,
                    id: 'category-9'
                  },
                  {
                    text: <><span aria-hidden>📚</span> Livres</>,
                    id: 'category-10'
                  },
                  {
                    text: <><span aria-hidden>👗</span> Mode & design</>,
                    id: 'category-11'
                  },
                  {
                    text: <><span aria-hidden>🎵</span> Musique</>,
                    id: 'category-12'
                  },
                  {
                    text: <><span aria-hidden>🏰</span> Patrimoine</>,
                    id: 'category-13'
                  },
                  {
                    text: <><span aria-hidden>🎓</span> Santé & éducation</>,
                    id: 'category-14'
                  },
                  {
                    text: <><span aria-hidden>🎓</span> Solidarité</>,
                    id: 'category-15'
                  },
                  {
                    text: <><span aria-hidden>⛹🏾‍♀️</span> Sport</>,
                    id: 'category-16'
                  },
                  {
                    text: <><span aria-hidden>📱</span> Technologie</>,
                    id: 'category-17'
                  },
                  {
                    text: <><span aria-hidden>🎭</span> Théâtre & danse</>,
                    id: 'category-18'
                  }
                ]}
              />
            </Details>
          </FlexWrapper>
        </SlideModal.Content>
        <SlideModal.Actions>
          <Button modifier="hydrogen">Réinitialiser les filtres</Button>
          <Button modifier="beryllium">Afficher 195 projets</Button>
        </SlideModal.Actions>
      </>
    )}
  </SlideModal>
)
