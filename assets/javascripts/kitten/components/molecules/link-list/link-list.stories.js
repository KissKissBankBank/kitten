import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { LinkList } from './index'
import { Grid, GridCol } from '../../..'

const colorOptions = {
  Light: 'light',
  Dark: 'dark',
}

const marginOptions = {
  Double: 'double',
  Triple: 'triple',
}

const weightOptions = {
  Regular: 'regular',
  Light: 'light',
}

export const SimpleList = () => {
  return (
    <LinkList
      color={select('Color', colorOptions, 'dark')}
      itemMargin={select('Item margin', marginOptions, 'double')}
      weight={select('Weight', weightOptions, 'regular')}
      margin={boolean('Margin', true)}
      items={[
        { key: '1', item: 'Item 1', href: '#', active: true },
        { key: '2', item: 'Item 2', href: '#' },
        { key: '3', item: 'Item 3', href: '#' },
      ]}
    />
  )
}

export const WithBackgroundDark = () => {
  return (
    <Grid>
      <GridCol
        col="3"
        className={
          select('Color', colorOptions, 'light') &&
          'has-overrides dark-background'
        }
      >
        <LinkList
          color={select('Color', colorOptions, 'light')}
          itemMargin={select('Item margin', marginOptions, 'double')}
          weight={select('weight', weightOptions, 'regular')}
          margin={boolean('Margin', true)}
          items={[
            { key: '1', item: 'Item 1', href: '#', active: true },
            { key: '2', item: 'Item 2', href: '#' },
            { key: '3', item: 'Item 3', href: '#', weight: 'light' },
          ]}
        />
      </GridCol>
    </Grid>
  )
}
