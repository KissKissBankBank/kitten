import React from 'react'
import { NavTabCarousel as NewNavTabCarousel } from 'carousel/nav-tab-carousel'
import { Deprecated } from '../../helpers/utils/deprecated'

export const NavTabCarousel = props => {
  const message = `DEPRECATED:
    Use \`NavTabCarousel\` from \`…/carousel/nav-tab-carousel\`.`

  return (
    <Deprecated warningMessage={message}>
      <NewNavTabCarousel {...props} />
    </Deprecated>
  )
}
