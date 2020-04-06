import { triggerEnhancer } from '../../hoc/trigger-enhancer'
import { PhoneIllustration } from '../../components/illustrations/phone-illustration'
import { CallToActionPopover } from '../../components/popovers/call-to-action-popover'

const text =
  'I could pee on this if I had the energy. Present belly, scratch ' +
  'hand when stroked find something else more interesting. Chase ball' +
  'of string. Stare at ceiling light why must they do that, for chase' +
  'laser chase imaginary bugs.'

export const KarlAutoTriggerCallToActionPopover = triggerEnhancer(
  CallToActionPopover,
  {
    title: 'Kitty kitty kitty',
    text: text,
    illustration: PhoneIllustration,
    popoverClassName: 'karl-AutoTriggerCallToActionPopover',
    buttons: [
      {
        label: 'Check this out!',
        modifier: 'helium',
        tag: 'a',
        clickOptions: {
          closeOnClick: true,
        },
      },
    ],
  },
)
