import React, { Component, Fragment } from 'react'
import { MarkdownPage } from '../../components/typography/markdown-page'

class MardownExample extends Component {
  render() {
    const text = `**fooBar**
# H1
## H2
### H3
hello
1. First ordered list item
2. Another item
  *Unordered sub-list.
[I'm an inline-style link](https://www.google.com)
***

Asterisks
    `

    return <MarkdownPage content={text} />
  }
}

export default MardownExample
