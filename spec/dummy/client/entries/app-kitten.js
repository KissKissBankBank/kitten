require('../stylesheets/app-kitten.scss');

import ReactOnRails from 'react-on-rails';

// Box
import LinkBox from 'kitten/components/box/link-box'
import DocLinkBox from 'kitten/components/box/doc-link-box'

// Buttons
import ButtonImageWithTextAndBadge from 'kitten/components/buttons/button-image-with-text-and-badge'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

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
import Switch from 'kitten/components/form/switch'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Lists
import NavList from 'kitten/components/lists/nav-list'

// Tooltips
import ReactTooltip from 'react-tooltip'
import Tooltip from 'kitten/components/tooltips/tooltip'

// Tours
import HeaderTour from 'kitten/components/tours/header-tour'
import Tour from 'kitten/components/tours/tour'
import TourPopover from 'kitten/components/tours/tour-popover'
import TourStep from 'kitten/components/tours/tour-step'

// Simulators
import SimulatorResult from 'kitten/components/simulators/simulator-result'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

// Steppers
import { Stepper } from 'kitten/components/steppers/stepper'

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

// Maker steps.
import { MakerWhoAmIStep } from 'app/maker/who-am-i/components/container'

ReactOnRails.register({
  ButtonImageWithTextAndBadge,
  ButtonTooltipIcon,
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
  ReactTooltip,
  Slider,
  Search,
  Select,
  SelectWithState,
  NavList,
  SimulatorResult,
  Tooltip,
  Stepper,
  Switch,
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
  MakerWhoAmIStep,
})
