import React from 'react'
import HomePage from './index'
import { KissKissBankBankHeaderNavStory } from '../../../components/navigation/header-nav/stories/kisskissbankbank'
import Footer from '../footer'

export default {
  component: HomePage,
  title: 'pages/Homepage 2022',
  parameters: {
    component: HomePage,
  },
}

export const Homepage = () => (
  <>
    <KissKissBankBankHeaderNavStory
      zIndexConfig={{
        header: 100,
        headerWithOpenMenu: 103,
      }}
    />
    <HomePage />
    <Footer />
  </>
)
