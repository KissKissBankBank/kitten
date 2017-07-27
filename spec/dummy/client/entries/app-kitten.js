require('../stylesheets/app-kitten.scss');

import ReactOnRails from 'react-on-rails';

// Box
import DocLinkBox from 'kitten/components/box/doc-link-box'
import { InformationBox } from 'kitten/components/box/information-box'
import LinkBox from 'kitten/components/box/link-box'

// Buttons
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import ButtonImageWithTextAndBadge from 'kitten/components/buttons/button-image-with-text-and-badge'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { TagButton } from 'kitten/components/buttons/tag-button'

// Cards
import { ProjectCard } from 'kitten/components/cards/project-card'
import { ProjectCreatorCard } from 'kitten/components/cards/project-creator-card'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'

// Dev
import { DevGrid } from 'kitten/components/dev/dev-grid'

// Dropdowns
import Dropdown from 'kitten/components/dropdowns/dropdown'
import DropdownButton from 'kitten/components/dropdowns/dropdown-button'

// Form
import { Checkbox } from 'kitten/components/form/checkbox'
import { CheckboxSet } from 'kitten/components/form/checkbox-set'
import { FormAmountAndCurrency } from 'kitten/components/form/form-amount-and-currency'
import { FormPhoneNumber } from 'kitten/components/form/form-phone-number'
import { Label } from 'kitten/components/form/label'
import { RadioButton } from 'kitten/components/form/radio-button'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'
import { RichTextInput } from 'kitten/components/form/rich-text-input'
import Search from 'kitten/components/form/search'
import Select from 'react-select'
import SelectWithState from 'kitten/components/form/select-with-state'
import Slider from 'kitten/components/form/slider'
import Switch from 'kitten/components/form/switch'
import { TextInput } from 'kitten/components/form/text-input'
import { LocationInput } from 'kitten/components/form/location-input'
import { TextInputWithLimit } from 'kitten/components/form/text-input-with-limit'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'

// Grid
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { KarlRow } from 'kitten/karl/grid/row'
import { KarlSideLayout } from 'kitten/karl/layout/side-layout'

// Icons
import GrabberIcon from 'kitten/components/icons/grabber-icon'
import { RightArrowIcon } from 'kitten/components/icons/right-arrow-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'
import { MenuIcon } from 'kitten/components/icons/menu-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { InfoIcon } from 'kitten/components/icons/info-icon'
import { InformationIcon } from 'kitten/components/icons/information-icon'
import { KissKissBankBankLogoIcon } from 'kitten/components/icons/kisskissbankbanklogo-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { LocationIcon } from 'kitten/components/icons/location-icon'
import { MasterCardIcon } from 'kitten/components/icons/mastercard-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { VisaIcon } from 'kitten/components/icons/visa-icon'

// Layout
import { Separator } from 'kitten/components/layout/separator'

// Lines
import { InfoLines } from 'kitten/components/lines/info-lines'

// Links
import ExternalRichLink from 'kitten/components/links/external-rich-link'
import { LinkList } from 'kitten/components/links/link-list'

// Lists
import { BulletList } from 'kitten/components/lists/bullet-list'
import NavList from 'kitten/components/lists/nav-list'

// Loaders
import { KarlLoaderInButton } from 'kitten/karl/loaders/karl-loaders'
import { Loader } from 'kitten/components/loaders/loader'
import { LoaderWithParagraph }
  from 'kitten/components/loaders/loader-with-paragraph'

// Meters
import { Progress } from 'kitten/components/meters/progress'

// Navigation
import { TabBar } from 'kitten/components/navigation/tab-bar'

// Notifications
import { Alert } from 'kitten/components/notifications/alert'
import { Badge } from 'kitten/components/notifications/badge'
import { IconBadge } from 'kitten/components/notifications/icon-badge'

// Popovers
import { Popover } from 'kitten/components/popovers/popover'
import { CallToActionPopover } from 'kitten/components/popovers/call-to-action-popover'

// Simulators
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

// Steppers
import { Stepper } from 'kitten/components/steppers/stepper'

// Tooltips
import ReactTooltip from 'react-tooltip'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'
import Tooltip from 'kitten/components/tooltips/tooltip'
import { TooltipNew } from 'kitten/components/tooltips/tooltip-new'
import { InfoWithTooltip } from 'kitten/components/tooltips/info-with-tooltip'

// Tours
import HeaderTour from 'kitten/components/tours/header-tour'
import Tour from 'kitten/components/tours/tour'
import TourPopover from 'kitten/components/tours/tour-popover'
import TourStep from 'kitten/components/tours/tour-step'

// Typography
import { Paragraph } from 'kitten/components/typography/paragraph'
import { SupTitle } from 'kitten/components/typography/sup-title'
import { Text } from 'kitten/components/typography/text'
import { Title } from 'kitten/components/typography/title'

// Karl composed components

import { KarlAutoTriggerPopover }
  from 'karl/components/popovers/auto-trigger-popover'
import { KarlAutoTriggerCallToActionPopover }
  from 'karl/components/popovers/auto-trigger-call-to-action-popover'
import { KarlLoudspeakerPopover } from 'karl/components/popovers/loudspeaker-popover'
import { KarlPlatformSwitch,
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
         KarlLoanSimulatorWithfeesExemption,
         KarlLoanSimulatorWithError,
       } from 'kitten/karl/organisms/loan-simulator'
import { KarlSideGridWithRightAside,
         KarlSideGridWithLeftAsideAndSmallSize
       } from 'kitten/karl/grid/side-grid'
import { KarlFormActions } from 'kitten/karl/form/form-actions'
import { KarlFormRow } from 'kitten/karl/form/form-row'
import { KarlRadioButtonError,
         KarlRadioButtonContentError} from 'kitten/karl/form/radio-button'
import { KarlCheckboxError } from 'kitten/karl/form/checkbox'
import { KarlLocationInput } from 'kitten/karl/form/location-input'
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
import { KarlButtonIconWordsRight,
         KarlButtonIconWordsLeft
       } from 'kitten/karl/buttons/button-with-icon-words'
import { KarlButtonAndText } from 'kitten/karl/buttons/button'
import { KarlButtonIconHeart,
         KarlButtonIconMicro
       } from 'kitten/karl/buttons/button-icon'
import { KarlLineWithTooltip,
         KarlLineWithBigHeart } from 'kitten/karl/layout/line'
import { KarlPaymentButtons } from 'kitten/karl/buttons/payment-button'
import { KarlStaticTooltip } from 'kitten/karl/tooltips/static-tooltip'
import { KarlRandomProgress } from 'kitten/karl/meters/random-progress'
import { KarlMakerWhoAmIStep } from 'app/maker/who-am-i/components/container'
import { KarlAlert,
         KarlAlertWithButton,
         KarlAlertWithMarkdown } from 'kitten/karl/notifications/alert'
import { KarlIconBadgeWithSvg } from 'kitten/karl/notifications/icon-badge'
import { KarlLegoGrid } from 'kitten/karl/grid/lego-grid'
import { KarlTagList } from 'kitten/karl/lists/tag-list'
import { KarlCard } from 'kitten/karl/cards/card'
import { KarlProjectSimilarCard,
         KarlProjectSimilarCardInfos } from 'kitten/karl/cards/project-similar-card'
import { KarlMenuHeader } from 'kitten/karl/headers/karl-header'
import { KarlGithubRibbon } from 'kitten/karl/headers/karl-github-ribbon'
import { KarlMenu,
         KarlMenuContent } from 'kitten/karl/menus/karl-menu'
import { KarlBrowsing } from 'app/browsing/browsing'
import { KarlSeparator } from 'kitten/karl/layout/separator'
import { KarlImageCropper } from 'kitten/karl/images/image-cropper'
import { KarlModal } from 'kitten/karl/modals/modal'

ReactOnRails.register({
  // Box
  DocLinkBox,
  InformationBox,
  LinkBox,

  // Buttons
  Button,
  ButtonIcon,
  ButtonImage,
  ButtonImageWithTextAndBadge,
  ButtonTooltipIcon,
  FacebookButtonIcon,
  LinkedinButtonIcon,
  TagButton,
  TwitterButtonIcon,

  // Cards
  ProjectCard,
  ProjectCreatorCard,
  ProjectSimilarCard,

  // Dev
  Checkbox,
  CheckboxSet,
  DevGrid,

  // Dropdowns
  Dropdown,
  DropdownButton,

  // Form
  FormAmountAndCurrency,
  FormPhoneNumber,
  GrabberIcon,
  HeaderTour,
  Label,
  LocationInput,
  RadioButton,
  RadioButtonSet,
  ReactTooltip,
  RichTextInput,
  Slider,
  Search,
  Select,
  SelectWithState,
  Slider,
  Switch,
  TextInput,
  TextInputWithLimit,
  TextInputWithUnit,
  TextInputWithButton,

  // Grid
  Container,
  Grid,
  GridCol,
  KarlRow,

  // Icons
  RightArrowIcon,
  CbIcon,
  MenuIcon,
  GrabberIcon,
  InfoIcon,
  InformationIcon,
  KissKissBankBankLogoIcon,
  HeartIcon,
  FacebookIcon,
  LinkedinIcon,
  ClockIcon,
  LocationIcon,
  MasterCardIcon,
  TwitterIcon,
  VisaIcon,

  // Layout
  Separator,

  // Lines
  InfoLines,

  // Links
  ExternalRichLink,
  LinkList,

  // Lists
  BulletList,
  NavList,

  // Loader
  KarlLoaderInButton,
  Loader,
  LoaderWithParagraph,

  // Meters
  Progress,

  // Navigation
  TabBar,

  // Notifications
  Alert,
  Badge,
  IconBadge,

  // Popovers
  CallToActionPopover,
  Popover,

  // Simulators
  LoanSimulator,

  // Steppers
  Stepper,

  // Tooltips
  ReactTooltip,
  Tooltip,
  TooltipNew,
  StaticTooltip,
  InfoWithTooltip,

  // Tours
  HeaderTour,
  Tour,
  TourPopover,
  TourStep,

  // Typography
  Paragraph,
  SupTitle,
  Text,
  Title,

  // Karl composed components
  KarlAlert,
  KarlAlertWithButton,
  KarlAlertWithMarkdown,
  KarlAutoTriggerCallToActionPopover,
  KarlAutoTriggerPopover,
  KarlLoudspeakerPopover,
  KarlButtonIconHeart,
  KarlButtonIconMicro,
  KarlButtonIconWordsRight,
  KarlButtonIconWordsLeft,
  KarlButtonAndText,
  KarlLineWithTooltip,
  KarlLineWithBigHeart,
  KarlIconBadgeWithSvg,
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
  KarlLoanSimulatorWithfeesExemption,
  KarlLoanSimulatorWithError,
  KarlSideGridWithRightAside,
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlStaticTooltip,
  KarlCheckboxError,
  KarlLocationInput,
  KarlFormActions,
  KarlFormRow,
  KarlRadioButtonError,
  KarlRadioButtonContentError,
  KarlGridTwelveColumns,
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridWithOffset,
  KarlSideLayout,
  KarlParagraph,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphQuaternary,
  KarlParagraphWithLink,
  KarlPaymentButtons,
  KarlRandomProgress,
  KarlMakerWhoAmIStep,
  KarlLegoGrid,
  KarlTagList,
  KarlCard,
  KarlProjectSimilarCard,
  KarlProjectSimilarCardInfos,
  KarlMenuHeader,
  KarlMenu,
  KarlMenuContent,
  KarlBrowsing,
  KarlGithubRibbon,
  KarlSeparator,
  KarlImageCropper,
  KarlModal,
})
