import React from 'react'
import { VisuallyHidden } from './index'
import { Button } from '../../buttons/button/button'
import { BurgerIcon } from '../../icons/burger-icon'

export const Default = () => (
  <Button icon>
    <VisuallyHidden>Menu</VisuallyHidden>
    <BurgerIcon width={16} height={16} aria-hidden={true} focusable={false} />
  </Button>
)
