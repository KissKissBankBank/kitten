import React from 'react'
import { EditorialCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Cards/EditorialCard',
  component: EditorialCard,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="EditorialCard" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    href: { control: 'text' },
    status: { control: 'radio', options: ['info', 'success', 'custom']},
    customColor: { control: 'color' },
    hasArrow: {control: 'boolean'}
  },
  args: {
    href: '#',
    status: 'info',
    customColor: 'var(--color-primary-500)',
    hasArrow: true
  },
}

export const Default = args => (
  <>
    <EditorialCard {...args}>
      <EditorialCard.Title>Les collectes à venir</EditorialCard.Title>
      <EditorialCard.Content>Découvrez nos futurs projets et inscrivez-vous pour être informé dès l'ouverture des collectes.</EditorialCard.Content>
    </EditorialCard>
    <EditorialCard href="#hello" status="custom" hasVerso customColor="var(--color-grey-900)">
      <EditorialCard.Title>Les collectes réservées</EditorialCard.Title>
      <EditorialCard.Content>Pourquoi ces collectes sont reservées à certains départements?</EditorialCard.Content>
      <EditorialCard.Verso actionText="Aller plus loin">
        <p>Le projet financé est lauréat d’un appel d'offres mené par la Commission de Régulation de l’Énergie (CRE) qui encadre le développement des énergies renouvelables en France.</p>
        <p>Pour investir dans ces projets, il faut pouvoir justifier d’une résidence dans le département d’implantation du projet ou un département limitrophe.</p>
      </EditorialCard.Verso>
    </EditorialCard>
  </>
)
