require('../stylesheets/dummy-style.scss');

import ReactOnRails from 'react-on-rails';

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

ReactOnRails.register({
  ButtonImageWithText,
  Dropdown,
  DropdownButton,
  Slider,
  GrabberIcon,
  ExternalRichLink,
  SimulatorResult,
  LoanSimulator
})
