import React from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Title with two buttons">
        <div className="k-titleWithActions">
          <h2 className="k-titleWithActions__title">
            Feles sunt socialis animalibus
          </h2>
          <p className="k-titleWithActions__action is-first">
            <a
              href="#"
              className="k-Button k-Button--hydrogen k-titleWithActions__action__button"
            >
              Action 1 title
            </a>
          </p>
          <p className="k-titleWithActions__action is-last">
            <a
              href="#"
              className="k-Button k-Button--hydrogen k-titleWithActions__action__button"
            >
              Action 2 title
            </a>
          </p>
        </div>
      </Example>
    </div>
  )
}
