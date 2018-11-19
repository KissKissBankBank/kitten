import React from 'react'
import { KarlLoaderInButton } from 'kitten/karl/loaders/karl-loaders'
import { Loader } from 'kitten/components/loaders/loader'
import { LoaderWithParagraph } from 'kitten/components/loaders/loader-with-paragraph'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <div className="k-Grid">
          <Example title="Loader" className="k-Grid__col--3@s">
            <Loader />
          </Example>
          <Example
            title="Loader in Button component"
            className="k-Grid__col--3@s k-Grid__col--9@l"
          >
            <KarlLoaderInButton />
            <KarlLoaderInButton modifier="helium" />
            <KarlLoaderInButton disabled />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12">
        <div className="k-Grid">
          <Example
            title="Loader with top paragraph"
            className="k-Grid__col--6@s k-Grid__col--3@m"
          >
            <LoaderWithParagraph loaderPosition="bottom" />
          </Example>
          <Example
            title="Loader with right paragraph"
            className="k-Grid__col--6@s k-Grid__col--3@m"
          >
            <LoaderWithParagraph loaderPosition="bottom" />
          </Example>
          <Example
            title="Loader with bottom paragraph"
            className="k-Grid__col--6@s k-Grid__col--3@m"
          >
            <LoaderWithParagraph loaderPosition="top" />
          </Example>
          <Example
            title="Loader with left paragraph"
            className="k-Grid__col--6@s k-Grid__col--3@m"
          >
            <LoaderWithParagraph loaderPosition="right" />
          </Example>
        </div>
      </div>
    </div>
  )
}
