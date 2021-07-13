import React from 'react'
import { VisuallyHidden } from './index'
import { Button } from '../../molecules/buttons/button'
import { HeartIcon } from '../../graphics/icons/heart-icon'

export const Default = () => (
  <Button icon>
    <VisuallyHidden>Like this</VisuallyHidden>
    <HeartIcon width={16} height={16} aria-hidden={true} focusable={false} />
  </Button>
)
