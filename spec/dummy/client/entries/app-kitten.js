require('../stylesheets/app-kitten.scss')

import ReactOnRails from 'react-on-rails'

// Box
import { DocLinkBox } from 'kitten/components/box/doc-link-box'
import { InformationBox } from 'kitten/components/box/information-box'
import { LinkBox } from 'kitten/components/box/link-box'
import { KarlInformationBox } from 'kitten/karl/box/information-box'

// Buttons
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { ButtonImageWithTextAndBadge }
  from 'kitten/components/buttons/button-image-with-text-and-badge'
import { ButtonQuestionMarkIcon }
  from 'kitten/components/buttons/button-question-mark-icon'
import {
  FacebookButtonIcon,
  LinkedinButtonIcon,
  TwitterButtonIcon,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { KarlButtonAndText } from 'kitten/karl/buttons/button'
import {
  KarlButtonIconHeart,
  KarlButtonIconMicro,
} from 'kitten/karl/buttons/button-icon'
import {
  KarlButtonIconWordsLeft,
  KarlButtonIconWordsRight,
} from 'kitten/karl/buttons/button-with-icon-words'
import { KarlPaymentButtons } from 'kitten/karl/buttons/payment-button'

// Cards
import { ProjectCard } from 'kitten/components/cards/project-card'
import { ProjectCreatorCard }
  from 'kitten/components/cards/project-creator-card'
import { ProjectSimilarCard }
  from 'kitten/components/cards/project-similar-card'
import { KarlCard } from 'kitten/karl/cards/card'
import {
  KarlSimilarProjectsCard,
  KarlSimilarProjectsWithInfosCard,
} from 'kitten/karl/cards/similar-projects-card'
import { KarlProjectSimilarLoader }
  from 'kitten/karl/cards/project-similar-card'

// Colors
import { KarlColors } from 'kitten/karl/colors/karl-colors'

// Dev
import { DevGrid } from 'kitten/components/dev/dev-grid'

// Dropdowns
import { Dropdown } from 'kitten/components/dropdowns/dropdown'
import { DropdownButton } from 'kitten/components/dropdowns/dropdown-button'
import {
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
} from 'kitten/karl/organisms/dropdown'

// Footer
import { KarlFooterLendo } from 'kitten/karl/footer/footer-lendo'

// Form
import { Checkbox } from 'kitten/components/form/checkbox'
import { CheckboxSet } from 'kitten/components/form/checkbox-set'
import { FormAmountAndCurrency }
  from 'kitten/components/form/form-amount-and-currency'
import { FormPhoneNumber } from 'kitten/components/form/form-phone-number'
import { Label } from 'kitten/components/form/label'
import { LocationInput } from 'kitten/components/form/location-input'
import { RadioButton } from 'kitten/components/form/radio-button'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'
import { RichTextInput } from 'kitten/components/form/rich-text-input'
import { Search } from 'kitten/components/form/search'
import Select from 'react-select'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { Slider } from 'kitten/components/form/slider'
import { Switch } from 'kitten/components/form/switch'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton }
  from 'kitten/components/form/text-input-with-button'
import { TextInputWithLimit }
  from 'kitten/components/form/text-input-with-limit'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { KarlCheckboxError } from 'kitten/karl/form/checkbox'
import { KarlFormActions } from 'kitten/karl/form/form-actions'
import { KarlFormRow } from 'kitten/karl/form/form-row'
import { KarlLocationInput } from 'kitten/karl/form/location-input'
import {
  KarlRadioButtonContentError,
  KarlRadioButtonError,
} from 'kitten/karl/form/radio-button'

// Grid
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import {
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridTwelveColumns,
  KarlGridWithOffset,
} from 'kitten/karl/grid/grid'
import { KarlLegoGrid } from 'kitten/karl/grid/lego-grid'
import { KarlRow } from 'kitten/karl/grid/row'
import {
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlSideGridWithRightAside,
} from 'kitten/karl/grid/side-grid'
import { KarlSideLayout } from 'kitten/karl/layout/side-layout'

// Header
import {
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWithTitles,
  KarlHeaderWhenLogged,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlPhoneDropdown,
  KarlUnloggedHeaderPlatformSwitch,
} from 'kitten/karl/headers/header'
import { KarlGithubRibbon } from 'kitten/karl/headers/karl-github-ribbon'
import { KarlMenuHeader } from 'kitten/karl/headers/karl-header'

// Icons
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { ClockCircleIcon } from 'kitten/components/icons/clock-circle-icon'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { GrabberIcon } from 'kitten/components/icons/grabber-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { InstrumentTagIcon } from 'kitten/components/icons/instrument-tag-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { LocationIcon } from 'kitten/components/icons/location-icon'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { MasterCardIcon } from 'kitten/components/icons/mastercard-icon'
import { MenuIcon } from 'kitten/components/icons/menu-icon'
import { QuestionMarkIcon } from 'kitten/components/icons/question-mark-icon'
import { SearchIcon } from 'kitten/components/icons/search-icon'
import { TypologyTagIcon } from 'kitten/components/icons/typology-tag-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { WarningCircleIcon } from 'kitten/components/icons/warning-circle-icon'

// Illustrations
import { LinkBoxIllustration }
  from 'kitten/components/illustrations/link-box-illustration'
import { LoudspeakerIllustration }
  from 'kitten/components/illustrations/loudspeaker-illustration'
import { MixIllustration }
  from 'kitten/components/illustrations/mix-illustration'
import { PhoneIllustration }
  from 'kitten/components/illustrations/phone-illustration'

// Images
import { KarlImageCropper } from 'kitten/karl/images/image-cropper'

// Layout
import { Separator } from 'kitten/components/layout/separator'
import {
  KarlLineWithBigHeart,
  KarlLineWithTooltip,
} from 'kitten/karl/layout/line'
import { KarlSeparator } from 'kitten/karl/layout/separator'

// Lines
import { InfoLines } from 'kitten/components/lines/info-lines'

// Links
import { ExternalRichLink } from 'kitten/components/links/external-rich-link'
import { LinkList } from 'kitten/components/links/link-list'

// Lists
import { BulletList } from 'kitten/components/lists/bullet-list'
import { NavList } from 'kitten/components/lists/nav-list'
import { KarlTagList } from 'kitten/karl/lists/tag-list'

// Loaders
import { Loader } from 'kitten/components/loaders/loader'
import { LoaderWithParagraph }
  from 'kitten/components/loaders/loader-with-paragraph'
import { KarlLoaderInButton } from 'kitten/karl/loaders/karl-loaders'

// Meters
import { Progress } from 'kitten/components/meters/progress'
import { KarlRandomProgress } from 'kitten/karl/meters/random-progress'

// Modals
import {
  KarlModal,
  KarlModalExternalTrigger,
} from 'kitten/karl/modals/modal'

// Navigation
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'
import { TabBar } from 'kitten/components/navigation/tab-bar'
import {
  KarlHorizontalNav,
  KarlBrowsingHorizontalNav,
} from 'kitten/karl/navigation/horizontal-nav'

// Notifications
import { Alert } from 'kitten/components/notifications/alert'
import { Badge } from 'kitten/components/notifications/badge'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import {
  KarlAlert,
  KarlAlertWithButton,
  KarlAlertWithMarkdown,
} from 'kitten/karl/notifications/alert'
import { KarlIconBadgeWithSvg } from 'kitten/karl/notifications/icon-badge'

// Popovers
import { CallToActionPopover }
  from 'kitten/components/popovers/call-to-action-popover'
import { Popover } from 'kitten/components/popovers/popover'
import { KarlAutoTriggerCallToActionPopover }
  from 'karl/components/popovers/auto-trigger-call-to-action-popover'
import { KarlAutoTriggerPopover }
  from 'karl/components/popovers/auto-trigger-popover'
import { KarlLoudspeakerPopover }
  from 'karl/components/popovers/loudspeaker-popover'

// Pages
import { KarlBrowsing } from 'app/browsing/browsing'
import { KarlMakerWhoAmIStep } from 'app/maker/who-am-i/components/container'
import {
  KarlMenu,
  KarlMenuContent,
} from 'kitten/karl/menus/karl-menu'

// Simulators
import { LoanSimulator } from 'kitten/components/simulators/loan-simulator'
import {
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlLoanSimulatorWithfeesExemption,
} from 'kitten/karl/organisms/loan-simulator'

// Steppers
import { Stepper } from 'kitten/components/steppers/stepper'

// Tooltips
import { QuestionMarkWithTooltip }
  from 'kitten/components/tooltips/question-mark-with-tooltip'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { TooltipNew } from 'kitten/components/tooltips/tooltip-new'
import { KarlStaticTooltip } from 'kitten/karl/tooltips/static-tooltip'

// Tours
import { HeaderTour } from 'kitten/components/tours/header-tour'
import { Tour } from 'kitten/components/tours/tour'
import { TourPopover } from 'kitten/components/tours/tour-popover'
import { TourStep } from 'kitten/components/tours/tour-step'
import {
  KarlHeaderTour1,
  KarlHeaderTour2,
} from 'kitten/karl/tours/tour'

// Typography
import { Paragraph } from 'kitten/components/typography/paragraph'
import { SupTitle } from 'kitten/components/typography/sup-title'
import { Text } from 'kitten/components/typography/text'
import { Title } from 'kitten/components/typography/title'
import {
  KarlParagraph,
  KarlParagraphQuaternary,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphWithLink,
} from 'kitten/karl/typography/paragraph'

ReactOnRails.register({
  // Box
  DocLinkBox,
  InformationBox,
  LinkBox,
  KarlInformationBox,

  // Buttons
  Button,
  ButtonIcon,
  ButtonImage,
  ButtonImageWithTextAndBadge,
  ButtonQuestionMarkIcon,
  FacebookButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  TagButton,
  TwitterButtonIcon,
  KarlButtonAndText,
  KarlButtonIconHeart,
  KarlButtonIconMicro,
  KarlButtonIconWordsLeft,
  KarlButtonIconWordsRight,
  KarlPaymentButtons,

  // Colors
  KarlColors,

  // Cards
  ProjectCard,
  ProjectCreatorCard,
  ProjectSimilarCard,
  KarlCard,
  KarlSimilarProjectsCard,
  KarlSimilarProjectsWithInfosCard,
  KarlProjectSimilarLoader,

  // Dev
  DevGrid,

  // Dropdowns
  Dropdown,
  DropdownButton,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,

  // Footer
  KarlFooterLendo,

  // Form
  Checkbox,
  CheckboxSet,
  FormAmountAndCurrency,
  FormPhoneNumber,
  Label,
  LocationInput,
  RadioButton,
  RadioButtonSet,
  RichTextInput,
  Search,
  Select,
  SelectWithState,
  Slider,
  Switch,
  TextInput,
  TextInputWithButton,
  TextInputWithLimit,
  TextInputWithUnit,
  KarlCheckboxError,
  KarlFormActions,
  KarlFormRow,
  KarlLocationInput,
  KarlRadioButtonContentError,
  KarlRadioButtonError,

  // Grid
  Container,
  Grid,
  GridCol,
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridTwelveColumns,
  KarlGridWithOffset,
  KarlLegoGrid,
  KarlRow,
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlSideGridWithRightAside,
  KarlSideLayout,

  // Header
  KarlGithubRibbon,
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWithTitles,
  KarlHeaderWhenLogged,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlMenuHeader,
  KarlPhoneDropdown,
  KarlUnloggedHeaderPlatformSwitch,

  // Icons
  ArrowIcon,
  CbIcon,
  CheckedCircleIcon,
  CheckedIcon,
  ClockCircleIcon,
  ClockIcon,
  CrossCircleIcon,
  CrossIcon,
  FacebookIcon,
  GrabberIcon,
  HeartIcon,
  InstrumentTagIcon,
  LinkedinIcon,
  LocationIcon,
  LockIcon,
  MasterCardIcon,
  MenuIcon,
  QuestionMarkIcon,
  SearchIcon,
  TypologyTagIcon,
  TwitterIcon,
  VisaIcon,
  WarningCircleIcon,

  // Illustrations
  LinkBoxIllustration,
  LoudspeakerIllustration,
  MixIllustration,
  PhoneIllustration,

  // Images
  KarlImageCropper,

  // Layout
  Separator,
  KarlLineWithBigHeart,
  KarlLineWithTooltip,
  KarlSeparator,

  // Lines
  InfoLines,

  // Links
  ExternalRichLink,
  LinkList,

  // Lists
  BulletList,
  NavList,
  KarlTagList,

  // Loader
  Loader,
  LoaderWithParagraph,
  KarlLoaderInButton,

  // Meters
  Progress,
  KarlRandomProgress,

  // Modals
  KarlModal,
  KarlModalExternalTrigger,

  // Navigation
  HorizontalNav,
  TabBar,
  KarlHorizontalNav,
  KarlBrowsingHorizontalNav,

  // Notifications
  Alert,
  Badge,
  IconBadge,
  KarlAlert,
  KarlAlertWithButton,
  KarlAlertWithMarkdown,
  KarlIconBadgeWithSvg,

  // Popovers
  CallToActionPopover,
  Popover,
  KarlAutoTriggerCallToActionPopover,
  KarlAutoTriggerPopover,
  KarlLoudspeakerPopover,

  // Pages
  KarlBrowsing,
  KarlMakerWhoAmIStep,
  KarlMenu,
  KarlMenuContent,

  // Simulators
  LoanSimulator,
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlLoanSimulatorWithfeesExemption,

  // Steppers
  Stepper,

  // Tooltips
  QuestionMarkWithTooltip,
  StaticTooltip,
  Tooltip,
  TooltipNew,
  KarlStaticTooltip,

  // Tours
  HeaderTour,
  Tour,
  TourPopover,
  TourStep,
  KarlHeaderTour1,
  KarlHeaderTour2,

  // Typography
  Paragraph,
  SupTitle,
  Text,
  Title,
  KarlParagraph,
  KarlParagraphQuaternary,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphWithLink,
})
