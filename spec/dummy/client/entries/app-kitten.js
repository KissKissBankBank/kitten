require('../stylesheets/app-kitten.scss');

import ReactOnRails from 'react-on-rails';

// Buttons
import ButtonImageWithTextAndBadge from 'kitten/components/buttons/button-image-with-text-and-badge'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import Slider from 'kitten/components/form/slider'
import Select from 'react-select'
import SelectWithState from 'kitten/components/form/select-with-state'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Lists
import SimpleList from 'kitten/components/lists/simple-list'

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
         KarlLoggedHeaderUserMenu,
         KarlPhoneDropdown } from 'kitten/karl/organisms/header'
import { KarlLoanSimulator } from 'kitten/karl/organisms/loan-simulator'

ReactOnRails.register({
  ButtonImageWithTextAndBadge,
  Dropdown,
  DropdownButton,
  ExternalRichLink,
  GrabberIcon,
  LoanSimulator,
  Slider,
  Select,
  SelectWithState,
  SimpleList,
  SimulatorResult,
  KarlImageExternalRichLink,
  KarlSvgExternalRichLink,
  KarlSimpleDropdown,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
  KarlUnloggedHeaderPlatformSwitch,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlPhoneDropdown,
  KarlLoanSimulator,
})
