import { triggerEnhancer } from '../../hoc/trigger-enhancer'
import { Popover } from '../../components/popovers/popover'

const text =
  'I could pee on this if i had the energy. Present belly, scratch ' +
  'hand when stroked find something else more interesting. Chase ball' +
  'of string. Stare at ceiling light why must they do that, for chase' +
  'laser chase imaginary bugs.'

export const KarlAutoTriggerPopover = triggerEnhancer(Popover, {
  children: text,
  popoverClassName: 'karl-AutoTriggerPopover',
  titleAriaLabelId: 'dialogtitle-auto-trigger-popover',
})
