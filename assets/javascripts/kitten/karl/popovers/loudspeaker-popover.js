import React from 'react'
import { LoudspeakerIllustration } from '../../components/illustrations/loudspeaker-illustration'
import { CallToActionPopover } from '../../components/popovers/call-to-action-popover'

export const KarlLoudspeakerPopover = props => {
  return (
    <CallToActionPopover illustration={LoudspeakerIllustration} {...props} />
  )
}
