import React from 'react'
import Manifesto from './index'
import { KissKissBankBankHeaderNavStory } from '../../../components/navigation/header-nav/stories/kisskissbankbank'
import Footer from '../footer'

export default {
  component: Manifesto,
  title: 'pages/Manifesto page',
  parameters: {
    component: Manifesto,
  },
}

export const ManifestoPage = () => (
  <>
    <KissKissBankBankHeaderNavStory
      zIndexConfig={{
        header: 100,
        headerWithOpenMenu: 103,
      }}
    />
    <Manifesto />
    <Footer />
  </>
)
