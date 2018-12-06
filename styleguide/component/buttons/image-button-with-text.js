import React from 'react'
import { KarlButtonImageWithText } from '../../../assets/javascripts/kitten/karl/buttons/button-image-with-text'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On the right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <button className="karl-u-align-center@xs-down k-ButtonImageWithText">
            <span className="k-ButtonImage">
              <img
                className="k-ButtonImage__img"
                src="https://placehold.it/40x40/caf4fe/caf4fe"
                width="40"
                height="40"
              />
            </span>
            <p className="k-ButtonImageWithText__text">Firstname</p>
          </button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On the left"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <button className="karl-u-align-center@xs-down k-ButtonImageWithText">
            <p className="k-ButtonImageWithText__text">Firstname</p>
            <span className="k-ButtonImage">
              <img
                className="k-ButtonImage__img"
                src="https://placehold.it/40x40/caf4fe/caf4fe"
                width="40"
                height="40"
              />
            </span>
          </button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On the top"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <button
            className="karl-u-align-center@xs-down
                         k-ButtonImageWithText
                         k-ButtonImageWithText--vertical"
          >
            <p className="k-ButtonImageWithText__text">Firstname</p>
            <span className="k-ButtonImage">
              <img
                className="k-ButtonImage__img"
                src="https://placehold.it/40x40/caf4fe/caf4fe"
                width="40"
                height="40"
              />
            </span>
          </button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="On the bottom"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <button
            className="karl-u-align-center@xs-down
                         k-ButtonImageWithText
                         k-ButtonImageWithText--vertical"
          >
            <span className="k-ButtonImage">
              <img
                className="k-ButtonImage__img"
                src="https://placehold.it/40x40/caf4fe/caf4fe"
                width="40"
                height="40"
              />
            </span>
            <p className="k-ButtonImageWithText__text">Firstname</p>
          </button>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12">
        <KarlButtonImageWithText />
      </div>
    </div>
  )
}
