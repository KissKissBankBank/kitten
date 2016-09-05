require('../stylesheets/dummy-style.scss');

import ReactMounter from 'kitten/helpers/react/mounter'

// Buttons
import ButtonImageWithText from 'kitten/components/buttons/button-image-with-text'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import Slider from 'kitten/components/form/slider'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Simulators
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
