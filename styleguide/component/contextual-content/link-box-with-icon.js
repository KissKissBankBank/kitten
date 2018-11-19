import React from 'react'
import { DocLinkBox } from 'kitten/components/box/doc-link-box'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Link box with doc icon">
        <DocLinkBox
          title="Lorem Ipsum "
          text="Aenean leo ligula, porttitor eu, vitae eleifend
            ac, enimiquam ante."
        />
      </Example>
    </div>
  )
}
