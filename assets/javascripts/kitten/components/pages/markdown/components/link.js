import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { LinkList } from '../../../links/link-list'
export const MarkdownLink = props => {
  return <a href={props.href}>{props.children}</a>
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const LinkListstyle = styled(LinkList)`
  margin: 0;

  li {
    text-align: left;
  }
`
