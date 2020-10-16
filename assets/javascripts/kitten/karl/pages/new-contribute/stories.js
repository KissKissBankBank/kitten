import React from 'react'
import NewContributePage from './index'

export default {
  component: NewContributePage,
  title: 'pages/new-contribute',
  parameters: {
    component: NewContributePage,
  },
}

export const ContributePage = () => (
  <NewContributePage />
)
