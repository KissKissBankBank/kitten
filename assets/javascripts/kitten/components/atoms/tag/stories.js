import { Container } from '../../structure/container'
import { Text } from '../../atoms/typography/text'
import React from 'react'
import { select } from '@storybook/addon-knobs'
import { Tag } from './index'

export default {
  title: 'Atoms/Tag',
  component: Tag,
}

export const Default = () => {
  return (
    <Container className="k-u-margin-vertical-quadruple">
      <Tag
        type={select(
          'Type',
          ['info', 'warning', 'success', 'error', 'disabled'],
          'info',
        )}
      >
        <Text weight="bold">5</Text> Contributeurs
      </Tag>
    </Container>
  )
}
