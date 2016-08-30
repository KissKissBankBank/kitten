require('../stylesheets/dummy-style.scss');

import ReactMounter from 'kitten/helpers/react/mounter'

import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'
import ExternalRichLink from 'kitten/components/links/external-rich-link'
import GrabberIcon from 'kitten/components/icons/grabber-icon'
import Slider from 'kitten/components/form/slider'
import SimulatorResult from 'kitten/components/simulators/simulator-result'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

const availableComponents = {
  Dropdown,
  DropdownButton,
  ExternalRichLink,
  GrabberIcon,
  Slider,
  SimulatorResult,
  LoanSimulator
}

ReactMounter.mountComponents(availableComponents)
