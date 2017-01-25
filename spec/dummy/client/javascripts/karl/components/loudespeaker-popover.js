import React from 'react'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'

export const KarlLoudspeakerPopover = (props) => {
  return (
    <CallToActionPopover illustration={} { ...props } />

    react_component('LoudspeakerIllustration', props: {
      title: 'Please stop looking at',
      text: 'Claw drapes cat not kitten around . Behind the couch sit in window and stare ooo, a bird! yum yet hate dog chase the pig around the house',
      buttons: [{
        label: 'Découvrir',
        modifier: 'boron',
        size: '',
        tag: 'button',
        href: 'http://www.catipsum.com',
        target: '_blank',
      }]
    })
  )
}
