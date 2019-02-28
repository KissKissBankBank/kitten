import React from 'react'
import styled from 'styled-components'

export const MarkdownLink = props => (
  <a href={props.href} className="k-Paragraph__link">
    {props.children}
  </a>
)
