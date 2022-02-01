import React from 'react'
import { VisuallyHidden } from './index'
import { Button } from '../../actions/button'
import { HeartIcon } from '../../graphics/icons/heart-icon'

export default {
  component: VisuallyHidden,
  title: 'Accessibility/VisuallyHidden',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="VisuallyHidden" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = () => (
  <Button icon>
    <VisuallyHidden>Like this</VisuallyHidden>
    <HeartIcon width={16} height={16} aria-hidden={true} focusable={false} />
  </Button>
)
