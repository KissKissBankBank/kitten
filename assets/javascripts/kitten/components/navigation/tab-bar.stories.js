import React from 'react'
import { TabBar } from './tab-bar'

export default {
  component: TabBar,
  title: 'Navigation/TabBar',
  parameters: {
    component: TabBar,
  },
}

export const Default = () => (
  <TabBar
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
