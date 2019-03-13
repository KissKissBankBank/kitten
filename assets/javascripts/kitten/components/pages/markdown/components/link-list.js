import React from 'react'
import styled from 'styled-components'
import { LinkList } from '../../../links/link-list'
import { Marger } from '../../../layout/marger'
import PropTypes from 'prop-types'

const LinkListStyle = styled(LinkList)`
  margin: 0;
  li {
    text-align: left;
  }
`

// Here we pretend to use blockquote from ReactMarkdown to actually use the `LinkLisk` component and distinguish it from `MarkdownLink` and `MarkdownList`

export const MarkdownLinkList = props => {
  const items = props.children.map(item => ({
    key: item.key,
    item: item.props.children[0],
  }))

  return (
    <Marger top="4" bottom="4">
      <LinkListStyle color="dark" items={items} />
    </Marger>
  )
}

MarkdownLinkList.propTypes = {
  children: PropTypes.node.isRequired,
}
