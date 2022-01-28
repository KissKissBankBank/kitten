import React from 'react'
import { VisuallyHidden } from './index'
import { Button } from '../../actions/button'
import { HeartIcon } from '../../visuals/icons/heart-icon'

export const Default = () => (
  <Button icon>
    <VisuallyHidden>Like this</VisuallyHidden>
    <HeartIcon width={16} height={16} aria-hidden={true} focusable={false} />
  </Button>
)

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]
