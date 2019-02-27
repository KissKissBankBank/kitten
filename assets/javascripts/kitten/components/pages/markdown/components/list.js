import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BulletList } from '../../../lists/bullet-list'
import { Marger } from '../../../layout/marger'

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
    <Marger top="3" bottom="3">
      <BulletListStyle big items={items} />
    </Marger>
  )
}

MarkdownList.propTypes = {
  children: PropTypes.node.isRequired,
}
