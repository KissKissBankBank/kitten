import React from 'react'
import { NavTabCarousel as NewNavTabCarousel } from '../nav-tab-carousel'
import { Deprecated } from '../../../helpers/utils/deprecated'

export const NavTabCarousel = props => {
  const message = `DEPRECATED:
    Import \`NavTabCarousel\` from \`…/nav-tab-carousel\`
    instead of \`…/tab-bar-carousel.`

  return (
    <Deprecated warningMessage={message}>
      <NewNavTabCarousel {...props} />
    </Deprecated>
  )
}
