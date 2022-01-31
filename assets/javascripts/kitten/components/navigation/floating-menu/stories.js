import React from 'react'
import { FloatingMenu } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Navigation/FloatingMenu',
  component: FloatingMenu,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="FloatingMenu" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
}

export const Default = () => (
  <FloatingMenu>
    <FloatingMenu.Item isActive href="#">
      Mon profil
    </FloatingMenu.Item>
    <FloatingMenu.Item href="#">Vérification d’identité</FloatingMenu.Item>
    <FloatingMenu.Item href="#">Mes contributions</FloatingMenu.Item>
    <FloatingMenu.Item href="#">Mes projets</FloatingMenu.Item>
    <FloatingMenu.Item href="https://www.kisskissbankbank.com">
      Mes favoris
    </FloatingMenu.Item>
  </FloatingMenu>
)
