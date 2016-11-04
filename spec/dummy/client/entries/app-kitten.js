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
import Search from 'kitten/components/form/search'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Lists
import SimpleList from 'kitten/components/lists/simple-list'

// Tours
import HeaderTour from 'kitten/components/tours/header-tour'
import Tour from 'kitten/components/tours/tour'
import TourPopover from 'kitten/components/tours/tour-popover'
import TourStep from 'kitten/components/tours/tour-step'

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

ReactOnRails.register({
  ButtonImageWithTextAndBadge,
  Dropdown,
  DropdownButton,
  ExternalRichLink,
  GrabberIcon,
  HeaderTour,
  LoanSimulator,
  Slider,
  Search,
  Select,
  SelectWithState,
  SimpleList,
  SimulatorResult,
  SimulatorResult,
  Tour,
  TourPopover,
  TourStep,
  KarlImageExternalRichLink,
  KarlSvgExternalRichLink,
  KarlSimpleDropdown,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
  KarlUnloggedHeaderPlatformSwitch,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlLoanSimulator,
})
