require('../stylesheets/dummy-style.scss');

import ReactOnRails from 'react-on-rails';

// Buttons
import ButtonImageWithTextAndBadge from 'kitten/components/buttons/button-image-with-text-and-badge'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import Slider from 'kitten/components/form/slider'
import Select from 'react-select'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Simulators
import SimulatorResult from 'kitten/components/simulators/simulator-result'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

// Karl composed components

import { KarlImageExternalRichLink,
         KarlSvgExternalRichLink } from 'kitten/karl/molecules/external-rich-link'
import { KarlSimpleDropdown,
         KarlPlatformSwitch,
         KarlUserMenuDropdown } from 'kitten/karl/organisms/dropdown'
import { KarlUnloggedHeaderPlatformSwitch,
         KarlLoggedHeaderPlatformSwitch,
         KarlLoggedHeaderUserMenu } from 'kitten/karl/organisms/header'
import { KarlLoanSimulator } from 'kitten/karl/organisms/loan-simulator'
import { KarlSimpleSelect,
         KarlPlaceholderSelect } from 'kitten/karl/molecules/select'

ReactOnRails.register({
  ButtonImageWithTextAndBadge,
  Dropdown,
  DropdownButton,
  Slider,
  Select,
  GrabberIcon,
  ExternalRichLink,
  SimulatorResult,
  LoanSimulator,
  KarlImageExternalRichLink,
  KarlSvgExternalRichLink,
  KarlSimpleDropdown,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
  KarlUnloggedHeaderPlatformSwitch,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlLoanSimulator,
  KarlSimpleSelect,
  KarlPlaceholderSelect,
})
