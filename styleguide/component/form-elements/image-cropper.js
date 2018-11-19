import React from 'react'
import { KarlImageCropper } from 'kitten/karl/images/image-cropper'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <KarlImageCropper />
      </div>
    </div>
  )
}
