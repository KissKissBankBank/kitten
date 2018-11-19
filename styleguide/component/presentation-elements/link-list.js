import React from 'react'
import {
  KarlLinkList,
  KarlLinkListDark,
  KarlLinkListItemsLight,
  KarlLinkListSelectedItem,
} from 'kitten/karl/links/link-list'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="List of links" className="k-Grid__col--3@m">
        <KarlLinkList />
      </Example>
      <Example
        title="List of links with a selected item"
        className="k-Grid__col--3@m"
      >
        <KarlLinkListSelectedItem />
      </Example>
      <Example title="List of links with dark" className="k-Grid__col--3@m">
        <KarlLinkListDark />
      </Example>
      <Example
        title="List of links with items light"
        className="k-Grid__col--3@m"
      >
        <KarlLinkListItemsLight />
      </Example>
    </div>
  )
}
