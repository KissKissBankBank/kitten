import React from 'react'
import { CheckList } from './index'
import { text, boolean } from '@storybook/addon-knobs'

export const Default = () => (
  <CheckList>
    <CheckList.Item done>Huit caractères minimum</CheckList.Item>
    <CheckList.Item done>Une minuscule</CheckList.Item>
    <CheckList.Item>Une majuscule</CheckList.Item>
    <CheckList.Item>Un chiffre</CheckList.Item>
  </CheckList>
)
