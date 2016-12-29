require('../stylesheets/app-kitten.scss');

import ReactOnRails from 'react-on-rails';

// Box
import LinkBox from 'kitten/components/box/link-box'
import DocLinkBox from 'kitten/components/box/doc-link-box'

// Buttons
import ButtonImageWithTextAndBadge
  from 'kitten/components/buttons/button-image-with-text-and-badge'

// Detectors
import { DocumentUnfocusDetector }
  from 'kitten/components/detectors/document-unfocus-detector'

// Dev
import { DevGrid } from 'kitten/components/dev/dev-grid'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import FormAmountAndCurrency from 'kitten/components/form/form-amount-and-currency'
import FormPhoneNumber from 'kitten/components/form/form-phone-number'
import Slider from 'kitten/components/form/slider'
import Select from 'react-select'
import SelectWithState from 'kitten/components/form/select-with-state'
import Search from 'kitten/components/form/search'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Lists
import NavList from 'kitten/components/lists/nav-list'

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
         KarlLoggedHeaderUserMenu,
         KarlPhoneDropdown } from 'kitten/karl/organisms/header'
import { KarlLoanSimulator,
         KarlLoanSimulatorWithCommission
       } from 'kitten/karl/organisms/loan-simulator'

ReactOnRails.register({
  ButtonImageWithTextAndBadge,
  DocumentUnfocusDetector,
  DevGrid,
  DocLinkBox,
  Dropdown,
  DropdownButton,
  ExternalRichLink,
  FormAmountAndCurrency,
  FormPhoneNumber,
  GrabberIcon,
  HeaderTour,
  LinkBox,
  LoanSimulator,
  Slider,
  Search,
  Select,
  SelectWithState,
  NavList,
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
  KarlPhoneDropdown,
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
})
