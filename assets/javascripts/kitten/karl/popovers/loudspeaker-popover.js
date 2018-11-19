import React from 'react'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'

export const KarlLoudspeakerPopover = props => {
  return (
    <CallToActionPopover illustration={LoudspeakerIllustration} {...props} />
  )
}
