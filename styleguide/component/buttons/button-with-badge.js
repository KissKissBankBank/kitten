import React from 'react'

import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On top right of tiny image button"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage k-ButtonImage--tiny">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>
              <span className="k-ButtonWithBadge__badge k-Badge">4</span>
            </button>
          </p>
        </Example>
        <Example
          title="On top left"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>
              <span
                className="k-ButtonWithBadge__badge
                           k-ButtonWithBadge__badge--topLeft
                           k-Badge"
              >
                42
              </span>
            </button>
          </p>
        </Example>
        <Example
          title="On top right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>
              <span className="k-ButtonWithBadge__badge k-Badge">42</span>
            </button>
          </p>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On bottom right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>
              <span
                className="k-ButtonWithBadge__badge
                           k-ButtonWithBadge__badge--bottomRight
                           k-Badge"
              >
                42
              </span>
            </button>
          </p>
        </Example>
        <Example
          title="On bottom left"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>
              <span
                className="k-ButtonWithBadge__badge
                           k-ButtonWithBadge__badge--bottomLeft
                           k-Badge"
              >
                42
              </span>
            </button>
          </p>
        </Example>
        <Example
          title="On top right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-ButtonImage k-ButtonImage--big">
                <img
                  className="k-ButtonImage__img"
                  src="https://placehold.it/40x40/caf4fe/caf4fe"
                  width="40"
                  height="40"
                  alt=""
                />
              </span>

              <span className="k-ButtonWithBadge__badge k-Badge">424</span>
            </button>
          </p>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On top right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <p className="k-u-align-center">
            <button className="karl-u-align-center@xs-down k-ButtonWithBadge">
              <span className="k-Button k-Button--hydrogen">Button</span>

              <span className="k-ButtonWithBadge__badge k-Badge">424</span>
            </button>
          </p>
        </Example>
      </div>
    </div>
  )
}
