import React from 'react'
import { CheckList } from './index'

export const Default = () => (
  <CheckList>
    <CheckList.Item done>Huit caractères minimum</CheckList.Item>
    <CheckList.Item done>Une minuscule</CheckList.Item>
    <CheckList.Item>Une majuscule</CheckList.Item>
    <CheckList.Item>Un chiffre</CheckList.Item>
  </CheckList>
)
