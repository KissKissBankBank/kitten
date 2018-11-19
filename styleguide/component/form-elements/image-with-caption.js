import React from 'react'
import { KarlImageWithCaption } from 'kitten/karl/images/image-with-caption'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--8">
        <Example title="Image with caption">
          <KarlImageWithCaption />
        </Example>
      </div>
    </div>
  )
}
