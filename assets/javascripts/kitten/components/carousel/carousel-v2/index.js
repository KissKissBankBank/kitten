import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Page } from './components/page'
import { Item } from './components/item'

export class CarouselV2 extends PureComponent {
  static Page = Page
  static Item = Item

  render() {
    return <div>{children}</div>
  }
}
