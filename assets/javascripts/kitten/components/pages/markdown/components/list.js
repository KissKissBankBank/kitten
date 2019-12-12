import React from 'react'
import styled from 'styled-components'
import { BulletList } from '../../../lists/bullet-list'
import { Marger } from '../../../layout/marger'
import { Context } from './context'

const BulletListStyle = styled(BulletList)`
  li {
    line-height: 1.8rem;
  }
`

export const MarkdownList = props => {
  const items = props.children.map(item => ({
    key: item.key,
    item: item.props.children[0],
  }))

  return (
    <Context.Consumer>
      {({ paragraphModifier }) => {
        let modifier = {}

        if (paragraphModifier === 'primary') {
          modifier = { huge: true }
        } else if (paragraphModifier === 'secondary') {
          modifier = { big: true }
        } else if (paragraphModifier === 'tertiary') {
          modifier = { large: true }
        } else if (paragraphModifier === 'quaternary') {
          modifier = { small: true }
        }

        return (
          <Marger top="3" bottom="3">
            <BulletListStyle {...modifier} items={items} />
          </Marger>
        )
      }}
    </Context.Consumer>
  )
}
