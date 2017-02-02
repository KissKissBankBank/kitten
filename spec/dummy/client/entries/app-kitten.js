require('../stylesheets/app-kitten.scss');

import ReactOnRails from 'react-on-rails';

// Box
import DocLinkBox from 'kitten/components/box/doc-link-box'
import LinkBox from 'kitten/components/box/link-box'

// Buttons
import { Button } from 'kitten/components/buttons/button'
import ButtonImageWithTextAndBadge from 'kitten/components/buttons/button-image-with-text-and-badge'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'
import { TagButton } from 'kitten/components/buttons/tag-button'

// Dev
import { DevGrid } from 'kitten/components/dev/dev-grid'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import { Checkbox } from 'kitten/components/form/checkbox'
import FormAmountAndCurrency from 'kitten/components/form/form-amount-and-currency'
import FormPhoneNumber from 'kitten/components/form/form-phone-number'
import { Label } from 'kitten/components/form/label'
import { RadioButton } from 'kitten/components/form/radio-button'
import Search from 'kitten/components/form/search'
import Select from 'react-select'
import SelectWithState from 'kitten/components/form/select-with-state'
import Slider from 'kitten/components/form/slider'
import Switch from 'kitten/components/form/switch'

// Grid
import { Grid, GridCol } from 'kitten/components/grid/grid'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { VisaIcon } from 'kitten/components/icons/visa-icon'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// Lists
import NavList from 'kitten/components/lists/nav-list'

// Simulators
import LoanSimulator from 'kitten/components/simulators/loan-simulator'
import SimulatorResult from 'kitten/components/simulators/simulator-result'

// Steppers
import { Stepper } from 'kitten/components/steppers/stepper'

// Tooltips
import ReactTooltip from 'react-tooltip'
import Tooltip from 'kitten/components/tooltips/tooltip'

// Tours
import HeaderTour from 'kitten/components/tours/header-tour'
import Tour from 'kitten/components/tours/tour'
import TourPopover from 'kitten/components/tours/tour-popover'
import TourStep from 'kitten/components/tours/tour-step'

// Typography
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'

// Karl composed components

import { KarlImageExternalRichLink,
         KarlSvgExternalRichLink } from 'kitten/karl/molecules/external-rich-link'
import { KarlSimpleDropdown,
         KarlPlatformSwitch,
         KarlUserMenuDropdown } from 'kitten/karl/organisms/dropdown'
import { KarlHeader,
         KarlHeaderWithSearchInput,
         KarlHeaderWithTitles,
         KarlHeaderWhenLogged,
         KarlUnloggedHeaderPlatformSwitch,
         KarlLoggedHeaderPlatformSwitch,
         KarlLoggedHeaderUserMenu,
         KarlPhoneDropdown } from 'kitten/karl/headers/header'
import { KarlLoanSimulator,
         KarlLoanSimulatorWithCommission,
         KarlLoanSimulatorWithError,
       } from 'kitten/karl/organisms/loan-simulator'
import { KarlSideGridWithRightAside,
         KarlSideGridWithLeftAsideAndSmallSize
       } from 'kitten/karl/grid/side-grid'
import { KarlFormActions } from 'kitten/karl/form/form-actions'
import { KarlGridTwelveColumns,
         KarlGridInGrid,
         KarlGridSmall,
         KarlGridWithOffset
       } from 'kitten/karl/grid/grid'
import { KarlParagraph,
         KarlParagraphSecondary,
         KarlParagraphTertiary,
         KarlParagraphQuaternary,
         KarlParagraphWithLink,
       } from 'kitten/karl/typography/paragraph'
import { KarlButtonIconHeartRight,
         KarlButtonIconHeartLeft
       } from 'kitten/karl/buttons/button-heart-icon-words'
import { KarlPaymentButton } from 'kitten/karl/buttons/payment-button'
import { KarlMakerWhoAmIStep } from 'app/maker/who-am-i/components/container'

ReactOnRails.register({
  // Box
  DocLinkBox,
  LinkBox,

  // Buttons
  Button,
  ButtonImageWithTextAndBadge,
  ButtonTooltipIcon,
  TagButton,

  // Dev
  Checkbox,
  DevGrid,

  // Dropdowns
  Dropdown,
  DropdownButton,

  // Form
  FormAmountAndCurrency,
  FormPhoneNumber,
  RadioButton,
  Grid,
  GridCol,
  GrabberIcon,
  HeaderTour,
  Label,
  ReactTooltip,
  Slider,
  Search,
  Select,
  SelectWithState,
  Slider,
  Switch,

  // Icons
  GrabberIcon,
  HeartIcon,
  VisaIcon,

  // Links
  ExternalRichLink,

  // Lists
  NavList,

  // Simulators
  LoanSimulator,
  SimulatorResult,

  // Steppers
  Stepper,

  // Tooltips
  ReactTooltip,
  Tooltip,

  // Tours
  HeaderTour,
  Tour,
  TourPopover,
  TourStep,

  // Typography
  Paragraph,
  Title,

  // Karl composed components
  KarlButtonIconHeartRight,
  KarlButtonIconHeartLeft,
  KarlImageExternalRichLink,
  KarlSvgExternalRichLink,
  KarlSimpleDropdown,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWithTitles,
  KarlHeaderWhenLogged,
  KarlUnloggedHeaderPlatformSwitch,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlPhoneDropdown,
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlSideGridWithRightAside,
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlFormActions,
  KarlGridTwelveColumns,
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridWithOffset,
  KarlParagraph,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphQuaternary,
  KarlParagraphWithLink,
  KarlPaymentButton,
  KarlMakerWhoAmIStep,
})
