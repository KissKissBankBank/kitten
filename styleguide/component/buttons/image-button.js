import React from 'react'
import { ButtonImage } from '../../../assets/javascripts/kitten/components/buttons/button-image'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Tiny" className="k-Grid__col--3@m k-Grid__col--12@l">
          <ButtonImage
            className="karl-u-align-center@xs-down"
            tiny
            img={{
              src: 'https://placehold.it/40x40/caf4fe/caf4fe',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
        <Example title="Normal" className="k-Grid__col--3@m k-Grid__col--12@l">
          <ButtonImage
            className="karl-u-align-center@xs-down"
            img={{
              src: 'https://placehold.it/40x40/caf4fe/caf4fe',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
        <Example title="Big" className="k-Grid__col--3@m k-Grid__col--12@l">
          <ButtonImage
            className="karl-u-align-center@xs-down"
            big
            img={{
              src: 'https://placehold.it/40x40/caf4fe/caf4fe',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="With <a /> tag"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <ButtonImage
            className="karl-u-align-center@xs-down"
            tag="a"
            href=""
            img={{
              src: 'https://placehold.it/40x40/caf4fe/caf4fe',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
        <Example
          title="With <span /> tag"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <ButtonImage
            className="karl-u-align-center@xs-down"
            tag="span"
            img={{
              src: 'https://placehold.it/40x40/caf4fe/caf4fe',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="With border"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <ButtonImage
            className="karl-u-align-center@xs-down"
            withBorder
            img={{
              src: 'https://placehold.it/40x40/fff/fff',
              alt: 'Lorem Ipsum…',
            }}
          />
        </Example>
      </div>
    </div>
  )
}
