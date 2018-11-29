import React from 'react'
import {
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWhenLogged,
  KarlHeaderWithTitles,
} from '../../../assets/javascripts/kitten/karl/headers/header'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Header">
        <KarlHeader />
        <p>
          <a
            data-toggle-element="#header"
            data-toggle-class="is-fixed"
            className="karl-Link"
            href="#"
          >
            Toggle fixed version
          </a>
        </p>
      </Example>
      <Example title="Header with search input">
        <KarlHeaderWithSearchInput />
        <p>
          <a
            data-toggle-element="#header-search"
            data-toggle-class="is-fixed"
            className="karl-Link"
            href="#"
          >
            Toggle fixed version
          </a>
        </p>
      </Example>
      <Example title="Header when logged">
        <KarlHeaderWhenLogged />
        <p>
          <a
            data-toggle-element="#header-logged"
            data-toggle-class="is-fixed"
            className="karl-Link"
            href="#"
          >
            Toggle fixed version
          </a>
        </p>
      </Example>
      <Example title="Header with titles">
        <KarlHeaderWithTitles />
        <p>
          <a
            data-toggle-element="#header-with-titles"
            data-toggle-class="is-fixed"
            className="karl-Link"
            href="#"
          >
            Toggle fixed version
          </a>
        </p>
      </Example>
    </div>
  )
}
