import React from 'react'
import { Popover } from '../../../assets/javascripts/kitten/components/popovers/popover'
import { CallToActionPopover } from '../../../assets/javascripts/kitten/components/popovers/call-to-action-popover'
import { KarlLoudspeakerPopover } from '../../../assets/javascripts/kitten/karl/popovers/loudspeaker-popover'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Normal">
        <Popover>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </Popover>
      </Example>
      <Example title="Call To Action Popover">
        <CallToActionPopover
          title="Indicium perfusorumque"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
          buttons={[
            {
              label: 'Action',
              modifier: 'helium',
              tag: 'a',
              href: 'http://www.catipsum.com',
              target: '_blank',
            },
          ]}
          titleAriaLabelId="dialogtitle-call-to-action"
        />
      </Example>
      <Example title="Call To Action Popover">
        <KarlLoudspeakerPopover
          title="Latens eius obscurum"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          buttons={[
            {
              label: 'Action',
              modifier: 'helium',
              tag: 'a',
              href: 'http://www.catipsum.com',
              target: '_blank',
            },
          ]}
          titleAriaLabelId="dialogtitle-with-illustration"
        />
      </Example>
    </div>
  )
}
