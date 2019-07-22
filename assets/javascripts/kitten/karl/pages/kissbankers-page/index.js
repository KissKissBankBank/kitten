import React, { PureComponent } from 'react'
import { Board } from './components/board'
import { Header } from './components/header'
import { Pagination } from './components/pagination'

export class KissbankersPage extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Board />
        <Pagination />
      </>
    )
  }
}
