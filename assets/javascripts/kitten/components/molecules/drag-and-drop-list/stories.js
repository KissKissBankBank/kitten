import React from 'react'
import { action } from '@storybook/addon-actions'
import { DragAndDropList } from './index'
import {
  HorizontalCrowdfundingCard
} from '../../..'

export default {
  title: 'Molecules/DragAndDropList',
  component: DragAndDropList,
}

export const Default = () => (
  <DragAndDropList onChange={action('onChange')}>
    <HorizontalCrowdfundingCard
      href='#'
      imageProps={{ src: '/kitten.jpg' }}
      title='Aliquip aliqua excepteur quis eu laborum do dolore veniam ullamco anim fugiat aliquip consequat aliquip voluptate cupidatat consectetur.'
      description='Lorem ipsum mollit nostrud in dolor aliqua exercitation deserunt commodo nostrud quis dolor laboris tempor eu ullamco aliquip deserunt sint ut.'
      progress={15}
      data-simple-name="Aliquip aliqua excepteur quis eu"
      data-id="911c90cc-311e-478f-9730-872c468bb9e0"
    />
    <HorizontalCrowdfundingCard
      href='#'
      imageProps={{ src: '/kitten.jpg' }}
      title='Eiusmod enim officia sed ut dolor elit ea aute.'
      description='Lorem ipsum mollit veniam dolor ex dolore minim sit velit in est aliquip dolore.'
      progress={87}
      data-simple-name="Eiusmod enim officia sed ut"
      data-id="ad9eb082-1d78-47cb-af56-8a7e9659cf03"
    />
    <HorizontalCrowdfundingCard
      href='#'
      imageProps={{ src: '/kitten.jpg' }}
      title='Anim enim deserunt ut mollit cupidatat culpa id consequat ut sit sint culpa qui anim fugiat deserunt laborum.'
      description='Dolor anim ullamco veniam non dolore cillum in mollit.'
      progress={31}
      data-simple-name="Anim enim deserunt ut mollit"
      data-id="72ce89ff-6592-4b9a-9e5f-7f7b3ddd7b26"
    />
  </DragAndDropList>
)
