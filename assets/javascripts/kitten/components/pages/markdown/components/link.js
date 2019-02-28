import React from 'react'

export const MarkdownLink = props => (
  <a href={props.href} className="k-Paragraph__link">
    {props.children}
  </a>
)
