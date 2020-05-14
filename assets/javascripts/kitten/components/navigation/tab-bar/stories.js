import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { TabBar } from './next'
import { TabBar as DeprecatedTabBar } from '../tab-bar'
import { ScrollableContainer } from '../../../components/grid/scrollable-container'

export default {
  component: TabBar,
  title: 'Navigation/TabBar',
  decorators: [withInfo],
  parameters: {
    component: TabBar,
    info: info,
  },
}

const info = {
  text: `
    #TabBar
    &nbsp;

    ## Import
    ~~~js
    import { TabBar } from '@kisskissbankbank/kitten/src/components/navigation/tab-bar/next'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
      <TabBar>
        <TabBar.ListItem linkProps={{ href: '#1'}} active>
          Item 1
        </TabBar.ListItem>
        <TabBar.ListItem linkProps={{ href: '#2'}}>
          Item 2
        </TabBar.ListItem>
        <TabBar.ListItem linkProps={{ href: '#3'}}>
          Item 3
        </TabBar.ListItem>
        <TabBar.ListItem linkProps={{ href: '#4'}}>
          Item 4
        </TabBar.ListItem>
      </TabBar>
    ~~~
  `,
  header: false,
  propTables: false,
}

export const Next = () => (
  <TabBar>
    <TabBar.ListItem linkProps={{ href: '#1' }} active>
      Item 1
    </TabBar.ListItem>
    <TabBar.ListItem linkProps={{ href: '#2' }}>Item 2</TabBar.ListItem>
    <TabBar.ListItem linkProps={{ href: '#3' }}>Item 3</TabBar.ListItem>
    <TabBar.ListItem linkProps={{ href: '#4' }}>Item 4</TabBar.ListItem>
  </TabBar>
)

export const NextNestedInsideScrollableContainer = () => (
  <ScrollableContainer>
    <Next />
  </ScrollableContainer>
)

export const DeprecatedReactComponent = () => (
  <DeprecatedTabBar
    id="custom-id"
    className="custom-class"
    navClassName="nav-custom-class"
    listClassName="list-custom-class"
    items={[
      { text: 'Item 1', className: 'item-custom-class', selected: true },
      { text: 'Item 2', className: 'item-custom-class' },
      { text: 'Item 3', className: 'item-custom-class' },
      { text: 'Item 4', className: 'item-custom-class' },
    ]}
  />
)

export const SCSSComponent = () => (
  <div class="k-TabBar">
    <nav class="k-TabBar__nav">
      <ul class="k-TabBar__list">
        <li>
          <a class="k-TabBar__item is-selected" aria-current="page" href="#1">
            Item 1
          </a>
        </li>
        <li>
          <a class="k-TabBar__item" href="#2">
            Item 2
          </a>
        </li>
        <li>
          <a class="k-TabBar__item" href="#3">
            Item 3
          </a>
        </li>
        <li>
          <a class="k-TabBar__item" href="#4">
            Item 4
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
