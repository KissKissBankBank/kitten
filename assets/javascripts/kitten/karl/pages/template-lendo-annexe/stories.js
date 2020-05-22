import React from 'react'
import { BusinessTakeover as BusinessTakeoverTemplate } from './business-takeover'
import { FranchiseCreation as FranchiseCreationTemplate } from './franchise-creation'
import { SmbsDevelopment as SmbsDevelopmentTemplate } from './smbs-development'

export default {
  component: BusinessTakeover,
  title: 'pages/template-lendo-annexe',
  parameters: {
    component: BusinessTakeover,
  },
}

export const BusinessTakeover = () => <BusinessTakeoverTemplate />
export const FranchiseCreation = () => <FranchiseCreationTemplate />
export const SmbsDevelopment = () => <SmbsDevelopmentTemplate />
