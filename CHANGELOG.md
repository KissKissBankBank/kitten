# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

- Fix: `TextInputWithLimit`: Improve styles.
- Fix: `Button`: Remove old size props.

## [8.7.0] - 2022-03-01

Features:

- Logos: Add `LaBanquePostaleLogo` component.
- Tokens: Add `spacing` and `fontSize` tokens.
- Utilities: Add `k-utilities-flexbox-element` utility classes.
- Utilities: Add `k-u-padding*` classes.
- Utilities: Add `k-u-p*` and `k-u-m*` classes based on new `spacing` tokens.
- Utilities: Add `k-u-margin-negative*` classes.
- `DropdownMenu`: Add `positionedButton` prop.

Fixes:

- `Pagination`: Remove non-valid aria attributes.
- `Autocomplete`: Remove non-valid attributes.

## [8.6.0] - 2022-02-25

Features:

- Style: Change disabled styles on the following input components:
    - `Autocomplete`
    - `TextInput` and all inputs that depend on it
    - `LocationInput`
    - `DropdownSelect`
    - `DropdownSelectWithInput`
- `Button`: Add `krypton` modifier.
- `Pagination`: Modernize styles.
- `IconBadge`: Add `micro` to the size prop.

Fixes:

- `AlertBox`: ss.
- `DashboardMenu`: Fix `DashboardMenu.Expandable` open state by removing useless code.

## [8.5.0] - 2022-02-15

Features:

- `ProjectCard`: Add `lastLine` prop to `Line` subcomponent for custom bottom alignment.
- `DocumentManager`: Add `displayContent` prop for manager states.
- `ColorSelect`: Add component.

Fix:

- `TextInputWithButton`: Fix `disabled` prop priority.

## [8.4.0] - 2022-02-14

Features:

- `HeaderNav`: Add `a11yMobileOpen` and `a11yMobileClose` props to `SearchInput`.
- `Carousel`: More accessible handling of prev/next click.

Fixes:

- `DashboardMenu`: Fix `Selector` scroll on Chrome & Safari.
- `HeroLayout`: Keep same padding for all screen sizes.
- `DashboardMenu`: Fix `Expandable` active item.
- `DropdownMenu`: Fix button argument.

## [8.3.1] - 2022-02-10

Fix:

- `BackingCard`: Fix `BackingCard.Title` untruncated style.

## [8.3.0] - 2022-02-10

Feature:

- `BackingCard`: Add `truncateText` prop to `BackingCard.Title`.

Fixes:

- Markup: Fix duplicate ID issue on the following SVG components:
  - `GoodeedLogo`
  - `PhoneIllustration`
  - `KkbbFlashIllustration`
- `DashboardLayout`: Fix main wrapper focus style.
- `DocumentsManager`: Fix markup.
- `TextButton`: ss.

## [8.2.0] - 2022-02-09

Feature:

- `DropdownPhoneSelect`: Add `normalizer` prop to modify value.

## [8.1.1] - 2022-02-08

Fix:

- `BackingCard`: Fix truncation gradient display.

## [8.1.0] - 2022-02-08

Features:

- `BackingCard`: Allow null icon on `BackingCard.HeadingTag`.
- `Icons`: Add `PeopleIconNext` component.

Fixes:

- `BackingCard`: Add gradient on truncated description.
- `BackingCard`: Better margin when no image.
- `BackingCard`: New styles for `disabled` state.

## [8.0.0] - 2022-02-07

Breaking changes:

  - Move component files for a better organization.
  - `Icons`: Add the following components:
    - `GiftIconNext`: Remplaced by `ColorGiftIconNext`.
    - `CrossCircleIconNext`: Remplaced by `ColorCrossCircleIconNext`.
    - `HeartWithClickIconNext`: Remplaced by `ColorHeartWithClickIconNext`.

Feature:

  - `Icons`: Add `CrossCircleIconNext` component.

## [7.3.0] - 2022-02-07

Deprecations/Changes:

- `BackingCard`: Deprecate `BackingCard.Info`.
- `BackingCard`: Deprecate old layout without `BackingCard.Contents`.
- `BackingCard`: Remove `strokeSize` prop from `BackingCard.Title`.

Features:

- `BackingCard`: Change design & adjust story.
- `BackingCard`: Add `stretch` prop.
- `BackingCard`: Add `BackingCard.Contents` subcomponent.
- `BackingCard`: Add `suffix` prop to `BackingCard.Amount`.
- `Tag`: Add `variant` prop, defaults to `light`, accepts `dark`.
- `Text`: Add `1.25` and `1.4` values for `lineHeight` prop.
- `Text`: Add `letterSpacing` prop.

Fixes:

- `AlertBox`: ss.
- `HeroLayout`: Fix Hero sizing on large screens.
- `HeroLayout`: Fix sticky columns position on desktop.

## [7.2.0] - 2022-01-28

Deprecation/Change:

- Dependencies: Use StyledComponents 5.

Feature:

- `NavBar`: Add `small` value on `modifier` prop.

Fix:

- `LocationInput`: Improve styles.

## [7.1.0] - 2022-01-20

Features: 

- `HorizontalCrowdfundingCard`: Add `noProgress` prop, defaults to `false`.
- `TextCopy`: Add `size` prop, default to `regular`.

## [7.0.0] - 2022-01-18

Breaking Changes:

- Remove `RewardSummaryCard` and replace with `SummaryCard` in stories.
- Remove `variant` props for the following components:
  - `Progress`,
  - `ProgressRing`,
  - `Autocomplete`,
  - `Checkbox`,
  - `CheckboxSet`,
  - `DropdownSelect`,
  - `Field`,
  - `LocationInput`,
  - `TagInput`,
  - `TextInput`,
  - `TextInputWithButton`,
  - `TextInputWithUnit`,
  - `Button`,
  - `Accordion`,
  - `ModalNext`,
  - `TextCopy`,
  - `VerticalStepper`.

Deprecation/Change:

- `Comment`: Deprecate `ownerUrl` prop.

Features:

- `Button`: Add modifier-specific styles for `disabled` state.
- `Icons`: Add the following icon components:
  - `BankCardIconNext`,
  - `CubeIconNext`.
- `StarIconNext`: Add `bgColor` prop.
- `Icons`: Move the following icons to `icons-next` directory:
  - `RefundIcon`,
  - `GiftIcon`,
  - `LockOutlineIcon`.
- `LendopolisLogoVerticalOnDark`: Add CSS class names.

Fixes:

- `Accordeon`: New style for active state.
- `ProjectCard`: Safari-related fixes on image proportions and sticker alignment.

## [6.19.0] - 2022-01-14

Features:

- `HeaderNav`: Add arrows navigation to `HeaderNav.SearchInput` results.
- `Tokens`: Update colors token in `tokens.json`.

Fixes:

- `TextInput`: Improve placeholder style.
- `ImageDropUploader`: Style fixes.
- `HeroLayout`: Improve style.
- `TagButton`: Fix test to remove deprecation warning.

## [6.18.0] - 2022-01-11

Feature:

- `Tokens`: Update yellow colors.

Fixes:

  - `TextInput`: Improve placeholder style.
  - `createEvent`: Prevent SSR issue.

## [6.17.0] - 2022-01-10

Features:

- `Icons`: Add `EditIconNext` and `FilterIconNext` components.
- `Tag`: Add `size` prop defaults to `regular`.
- Logos: Add `LendopolisLogoVerticalOnDark` logo.

Fixes:

- `Tag`:  New UI - colors style.
- `ContributionCard`: Fix image display.
- `DeskLayout`: Fix menu column width.
- `ImageDropUploader`: Add background color.
- Graphics: Remove SVG errors.

## [6.16.0] - 2022-01-05

Features:

- `ProjectCard`: Add `ProjectCard.Sticker` subcomponent.
- `ProjectCard`: Deprecate `sticker` prop.
- `Utilities`: Add `k-u-transform-capitalize` utility class.
- `ProjectCard`: Add `loading` prop.

Fix:

- `ProjectCard`: Style fixes.

## [6.15.0] - 2022-01-04

Features:

- `ProjectCard`: Add mobile styles.
- `Button`: Change `hydrogen` and `lithium` modifier styles.
- `TagButton`: Deprecate `selected` prop, use new `active` instead.
- `Button`: Add `active` prop that switches modifier to `lithium` when true.

Fixes:

- `TagButton`: Fix styles.
- `ButtonGroup`: Fix styles.
- `CheckableButton`: Fix styles.
- `ContributionCard`: Improve styles.
- `SummaryCard`: Fix title-bar styles.
- `TextInputWithUnit`: Improve styles.
- `TextInputWithButton`: Fix orion styles.
- `AvatarWithTextAndBadge` and `DeskMenu`: Add `border` on the avatar image.

## [6.14.0] - 2022-01-03

Features:

- `HeroLayout`: Add component.
- `FloatingMenu`: Add component.
- Add the following icon components:
  - `EnvelopeIconNext`,
  - `StarIconNext`.
- Utilities: Add `k-u-letter-spacing` utilities.
- Utilities: Add `k-u-line-height-1-25` and `k-u-line-height-1-40` CSS utilities.
- `SocialButtonIcon` & `SocialButtonIconText`: Change style.
- `List`: Add `markerElement` prop, accepts a React node.
- `List`: Add `gap` prop, accepts a number.
- `Button`: Deprecate the following modifier values:
  - `carbon`,
  - `oxygen`,
  - `calcium`,
  - `social_facebook`,
  - `social_twitter`,
  - `social_linkedin`,
  - `social_instagram`,
  - `social_youtube`.

## [6.13.1] - 2021-12-31

Fix:

-  `ProjectCard`: Fix display.

## [6.13.0] - 2021-12-28

Feature:

- `TagInput`: Add `itemsList` prop to control values.

Fix:

-  `ProjectCard`: Fix link props.

## [6.12.0] - 2021-12-28

Features:

- `ProjectCard`: Add component.
- Add the following icon components:
  - `HeartWithClickIconNext`,
  - `GiftIconNext`,
  - `ColorCheckedShieldIconNext`,
  - `SunIconNext`,
  - `CrossCircleIconNext`.
- Logos: Add `LendopolisLogoOnDark` logo.

Fixes:

- Improve border radius on buttons on all cards.
- `Input`: New UI style.
- `DeskLayout`: Style adjustments.
- `DeskLayout`: Width fixes.
- `Progress`: Modernize component.

## [6.11.1] - 2021-12-20

Fix:

- `DocumentsDropUploader`: Fix upload files.

## [6.11.0] - 2021-12-20

Features:

  - `SummaryCard`: Add component.
  - `RewardSummaryCard`: Deprecate component.

## [6.10.0] - 2021-12-16

Features:

  - `CommentForm`: Add close button, add `onClose` and `closeButtonText` props
  - `Accordeon`: Add `multiple` prop to let more than one item opened.

## [6.9.1] - 2021-12-15

Fix:

  - Logos: Improve `MaisonDeCrowdfundingLogoOnDark` logo.

## [6.9.0] - 2021-12-15

Features:

  - `StickyContainer`: Add `onChange` event prop.
  - `HeaderNav`: Add `k-HeaderNav--isStuck` classname when stuck.

## [6.8.0] - 2021-12-14

Features:

- Add the following Logo components:
  - `MaisonDeCrowdfundingLogoOnDark`,
  - `KkbbFlashIllustration`,
  - `YouMatterLogo`.
- `DeskLayout`: Add layout component.
- `DeskMenu`: Add organism component.

Fixes:

- `HeaderMenu`: Fix external item paddings.
- `HeaderNav`: Fix border bottom on active nav link.
- `TextInput`: Fix `textarea` gradient styles.

## [6.7.0] - 2021-12-08

Features:

- `RadioButton`: Add `small` to the size prop.
- `RadioButtonSet`: Add `small` to the size prop.
- `ContentCard`: Add component.
- `TextButton`: Add component.
- `AirplaneIconNext`: Add component.
- `BubbleIconNext`: Add component.

## [6.6.0] - 2021-12-02

Features

- Tokens: Add `transitions` related tokens.
- Utilities: Add `k-u-ellipsis` CSS utility class.
- Utilities: Add `baseline` option to `k-u-alignItems-`  CSS utility classes.
- Utilities: Add `grey1` option to `k-u-link-` CSS utility classes.
- `HeartIconNext`: Add component.
- `ModalFooterInput`: Add component.
- `LargeArrowIconNext`: Add component.
- `TextareaAutoResize`: Add component.
- `Comment`:
  - Change design
  - Deprecate the following props:
    - `bottomNotes` replaced by `footer`
    - `text` replaced by `children`
    - `likeButtonProps` replaced by `headerActions={<Comment.LikeButton/>}`
    - `avatarBadge`
- `CommentForm`:
  - Modernize component code
  - Change design
  - Deprecate the following props:
    - `commentButton` replaced by `buttonText`
    - `isDisabled` replaced by `deleted`
    - `commentLabel` replaced by `aria-label`
    - `ariaId` replaced by `id`
    - `textareaId` replaced by `id`
    - `avatarBadge`
- `IconBadge`: Remove text capacity.

Fixes

- Remove console errors on `DownloadIcon` and `LinkedinIconNext`.
- `TagInput`: Fix focus styles.

## [6.5.1] - 2021-11-30

Fix:

- `AlertBox`: Fix ESM export.

## [6.5.0] - 2021-11-29

Features:

- Design: Use new `--border-radius-*` variables.
- IE11: Remove all IE11 css.
- `TextInput`: Add `darkBackground` prop.
- `Button`: Use new `disabled` style.
- `AlertBox`: Add new component.
- `IconBadge`: Add the following props:
  - `status`, defaults to `info`
  - `hasBorder`, defaults to `false`
- `IconBadge`: Deprecate the following props:
  - `disabled`, replaced by `status="disabled"`
  - `valid`, replaced by `status="success"`
- `StatusIconNext`: Add component with the following subcomponents:
  - `StatusIconNext.Info`
  - `StatusIconNext.Success`
  - `StatusIconNext.Danger`
  - `StatusIconNext.Warning`
  - `StatusIconNext.Disabled`

Fixes:

- `LendoLoadingAnimation`: Fix console errors.
- `LendoLoadingAnimation`: Fix style bug.


## [6.4.0] - 2021-11-23

Features:

- Tokens: Start using Design Tokens for colors config (with fallback).
- Tokens: Update use of border tokens with states.
- Tokens: Update `--color-yellow-700` value.
- `LendoLoadingAnimation`: Add component.

## [6.3.0] - 2021-11-22

Features:

- Tokens: Add `--border` token with variations.
- `DragAndDropList`: Change lib.
- `DragAndDropList`: Change `a11yAnnouncement` prop format.
- `DragAndDropList`: Add `a11yInstructions` prop.
- `DashboardMenu`: Add `size` prop to `DashboardMenu.Expandable`, defaults to `default`.

Fixes:

- `DashboardMenu`: Style fixes.
- `ToggleSwitch`: Fix controlled switch.

## [6.2.0] - 2021-11-19

Features:

- Tooling: Add Figma Tokens automatic integration.
- Token: Add `--border-width` variable on all borders.
- Design: Use new `--border-width` along with value with A11Y color standards.
- `DashboardMenu`: Add `size` prop to `DashboardMenu.Expandable`, defaults to `default`.

Fixes:

- `DashboardMenu`: Style fixes.
- `ContributionCard`: Remove buggy `borderWidth` prop.
- `ToggleSwitch`: Modernize components styles.

## [6.1.0] - 2021-11-15

Features:

- Tooling: Use `Dart Sass` instead of `LibSass`.
- Tokens: Add Design Tokens feature through CSS vars.
- Design: use browser default styles for focus outlines.
- `DragAndDropList`: Add component.

## [6.0.0] - 2021-11-09

Breaking Changes:

- `HeaderNav`: Remove `MOBILE_HEADER_HEIGHT`, `TABLET_HEADER_HEIGHT`, `DESKTOP_HEADER_HEIGHT` exports.
- `HeaderNav`: Move `UserMenuNext` to `UserMenu` and `BurgerMenuNext` to `BurgerMenu`.
- `HeaderNav`: Remove `borderStyle` prop defaults to `border`.
- `HeaderNav`: Remove `size` prop defaults to `small`.

Features:

- `HeaderNav`: Add `HEADER_HEIGHT` to exports.
- `HeaderNav.UserMenu.Button`: Remove `hasArrow` prop, now defaults to `true`.

Fix:

- `Button`: Fix `rounded` style.

## [5.7.1] - 2021-11-04

Fix:

- `useResizeObserver`: Fix use condition for older browsers.

## [5.7.0] - 2021-11-02

Features:

- `Icons`: Add the following icons
  - FacebookIconNext
  - InstagramIconNext
  - TwitterIconNext
  - WhatsappIconNext
  - MessengerIconNext
  - LinkedinIconNext
- `RadioButtonSet`: Add `labelProps` prop, propagated to label.
- `DropdownSelect`: Add `inputProps` to Combobox input.
- `PinterestIcon` and `PinterestButtonIcon`: Remove components.
- `Button`: Remove `social_pinterest` modifier.

Fix:

- `HeaderNav`: Fix user menu warning in console.

## [5.6.0] - 2021-10-28

Feature:

- `Alert`: Add `center` prop.

Fixes

- `Alert`: Fix flex regressions.
- `Label`: Fix display.

## [5.5.0] - 2021-10-26

Feature:

- `Accordeon`: Better `className` and other props propagation.

Fixes:

- `Alert`: Fix styles.
- `DropdownMenu`: Fix Safari display.
- `DropdownSelect`: Fix combobox input width calculation.

## [5.4.1] - 2021-10-22

Fix:

- `DashboardMenu`: Style fixes.

## [5.4.0] - 2021-10-20

Features:

- `Button`: Add `scandium` modifier.
- `Checkbox`: Add `labelProps` prop.
- `Icons`: Add the following icons
  - CheckedShieldIconNext
  - ChronoIconNext
  - CogIconNext
  - EyeIconNext
  - HomeIconNext
  - InfiniteIconNext
  - PlusIconNext
  - SpeechBubbleIconNext
  - StatsIconNext
  - TagIconNext
  - ThumbUpIconNext
  - UsersIconNext
  - WindowEditIconNext

Fixes:

- `Checkbox`: Fix secondary text max width.
- `ButtonWithTooltip`: Prevent unwanted animation on load.
- `Alert`: Fix responsive styles.

## [5.3.0] - 2021-10-19

Feature:

- `DropdownSelect`: Add `labelProps` prop.

Fixes:

- `GifVideo`: Fix bug when `children` is empty.
- `cssPropertyDistributor`: Fix bug when `elements` is null.
- `Label`: Fix styles.

## [5.2.0] - 2021-10-18

Features:

- `ButtonWithTooltip`: Add `position` prop, defaults to `center`.
- `DashboardMenu`: Add `List`, `Separator` and `Selector` subcomponents.
- `Alert`: Improve new UI.
- `Label`: Add `dot` prop.

Fix:

- `CrossIconNext`: New UI.

## [5.1.0] - 2021-10-15

Feature:

- `IconBadge`: Add `border` and `backgroundColor` props style.

Fix:

- `Button`: Fix min width constraints.

## [5.0.2] - 2021-10-13

Fix:

- `BackingCard`: Rollback Fix button fit.

## [5.0.1] - 2021-10-12

Fixes:

- `BackingCard`: Fix button fit.
- `Button`: Fix mobile dimensions on bigger sizes.

## [5.0.0] - 2021-10-12

Breaking Changes:

- `Button`: Refactor CSS Styles.
- `Modal/Next`: Improve trigger element accessibility.
- Typography: Remove `modular-scale` dependency and logic.
  All the font sizes previously defined as modular scale step (via `stepToRem`)
  are now calculated from a table with integer pixel values.
- All components using `variant` now default to `orion`.
- Remove the following unused components:
  - `SearchInput`
  - `RewardEdition`
  - `CartRewardCard`
  - `SideGrid`
  - `SideLayout`
  - `SimplePopover`
  - `ImageCropper`

Features:

- Add `KissKissLoadingAnimation`.
- Add `LazyLoader` component.
- `Button`: Add `fit` and `mobileFit` props, default to `min-width` and `null`.

Fixes:

- `TagInput`: Remove console warning.
- `TagInput`: Add accessible information for disabled items.

## [4.14.1] - 2021-10-08

Fix:

- `TagInput`: I can delete an `object` item.

## [4.14.0] - 2021-10-07

Feature:

- `TagInput`: `initialItemsList` can accept object like `{value: 'hello': disabled: true}` to disable an option.

## [4.13.0] - 2021-10-06

Features:

- `DropdownSelect`: Add `modifier` prop, defaults to `hydrogen`.
- `DropdownSelect`: Add `direction` prop, defaults to `down`.
- `DropdownSelect`: Add `micro` value to `size` prop.
- `DropdownSelect`: Add `arrowPosition` prop (exclusive to `orion` variant), defaults to 'left'.

Fix:

- `DownloadIcon`: Update icon.

## [4.12.0] - 2021-09-30

Feature:

- `Button`: Add `calcium` modifier prop.

Fixes:

- `ListTable`: Fix `isHightlighted` prop style.
- `DashboardLayout`: Fix styles.
- `FilterIcon`: Remove console warning.
- `AvatarWithTextAndBadge`: Improve margin styles.
- `HeaderMenu.item`: Fix `margin-right` style.
- `HeaderNav.UserMenuNext.Button`: Fix `min-width` style.

## [4.11.0] - 2021-09-29

Feature:

- `DashboardLayout`: Add `overlayZIndex` prop, defaults to 100.

Fix:

- `HeaderNav`: Various fixes.

## [4.10.1] - 2021-09-28

Fixes:

- `HeaderNav`: Fix `borderStyle="border"` style.
- `ButtonWithTooltip`: Propagate `className` on parent.
- `HeaderNav`: Fix `BurgerMenuNext` button state.
- `BurgerIcon`: Modernize styles.

## [4.10.0] - 2021-09-27

Features:

- `ButtonWithTooltip`: Add new component.
- `DashboardLayout`: Add `Toaster` subcomponent.

Fix:

- `HeaderNav`: Various fixes.

## [4.9.0] - 2021-09-24

Features:

- `HeaderMenu`: Add `position` prop, default to `left`.
- `EngagementCardWithImage`: Add `imgProps` and `textProps` props.

Fixes:

- `DashboardLayout`: Fix header elements dimensions.
- `HeaderNav.Button`: Add `cursor` to `onClick`.

## [4.8.0] - 2021-09-22

Features:

- `HeaderNav.Nav`: Add `smallPadding` prop, defaults to `false`.
- `HeaderNav.Button`: Add `smallPadding` prop, defaults to `false`.
- `EnvelopeIcon`: Add new component.

## [4.7.0] - 2021-09-21

Features:

- `ImageDropUploader`: Add image dimensions check.
- `Button`: Apply `disabled` styles to any HTML element type.

Fixes:

- `ImageDropUploader`: Fix `onChange` sequence.
- `Button`: Fix `tag`.

## [4.6.3] - 2021-09-17

Fix:

- `LocationInput`: Add comma between city and country.

## [4.6.2] - 2021-09-16

Fix:

- `ImageDropUploader`: Fix issue with smaller screens and wrong crop.

## [4.6.1] - 2021-09-13

Fix:

- `DropDownMenu`: Close menu on click.

## [4.6.0] - 2021-09-09

Tech:

- Bump to `node-sass@6`.

## [4.5.2] - 2021-09-09

Fix:

- `RewardSummaryCard`: Responsive fixes.

## [4.5.1] - 2021-09-08

Fixes:

- `RewardSummaryCard`: Various fixes.
- `RangeSlider`: Turn to be controlled when `value` prop is passed.

## [4.5.0] - 2021-09-02

Features:

- `NoImageIcon`: Add new component.
- `RewardSummaryCard`: Add new component.
- Add `createRangeFromZeroTo` to ESM exports.
- `IconBadge`: Deprecate `big` and `huge` props.
- Add `mq` media query constant object.

Fixes:

- `EngagementCard`: Remove useless props `hoverBorder` and `isActive`.
- `EngagementCardWithImage`: Remove useless prop `isActive`.
- `ContributionCard`: Remove useless prop `imageBorderRadius`.
- `HorizontalCrowdfundingCard`: Fix hover styles.

## [4.4.0] - 2021-08-30

Feature:

- `InfoLines`: Modernize component and update styles.

Fix:

- `TextInput`: Update color styles to enhance accessibility.

## [4.3.0] - 2021-08-27

Features:

- `Autocomplete`: Add `variant` prop, defaults to `andromeda`.
- `DocumentsDropUploader`: Add `hover` style to document tag element.
- `DropdownSelect`: Add explicit `controlled` prop. It is uncontrolled by default

Fixes:

- `TagInput`: Keep delete button when disabled.
- `DropdownSelect`: Can be controlled.

## [4.2.1] - 2021-08-19

Fix:

- `DashboardLayout.Flow.Nav`: Fix styles when only a button is displayed.

## [4.2.0] - 2021-08-06

Features:

- Change `XXS`/`XS` boundary to 400px, from 480px.
- Add `DropdownMenu` molecule component.
- Add `EllipsisIcon` icon.
- `SearchIcon`: Update to new design.
- `CrossIcon`: Add `size` prop, accepts values `normal` and `big`.
- `TextInput`: Add `rounded` boolean prop, defaults to `false`.
- `TextInputWithButton`: Add `inset` prop to place the button inside the input.
- `Overlay`: Add `position` prop, defaults to `absolute`.
- `HeaderNav`: Add `SearchInput` sub-component.
- `ArrowContainer`: Add `distanceIsReverse` boolean prop, defaults to `false`.
- `DocumentsDropUploader`: Hide files with errors.
- `DocumentsDropUploader`: New `managerInfo` prop.
- `DashboardLayout.Flow.Nav`: Add `twoButtons` prop, defaults to false.
- `Modal/Next`: Add `headerMessage` prop, with empty defaults.

Fixes:

- `DocumentsStatusBox`: Fix style.
- `HorizontalCrowdfundingCard`: Fix mobile style for `progress`.

## [4.1.0] - 2021-08-02

Features:

- Add `HorizontalCrowdfundingCard` molecule component.
- Add `FlexWrapper` layout component.

Fixes:

- `BackingCard`: Fix text input width.
- `ContributionCard`: Fix close button visibility on mobile.

## [4.0.2] - 2021-07-27

Fixes:

- `TextCopy`: Fix WebKit sizing bug.
- `RadioButtonSet`: Fix dimensions.
- `DocumentsDropUploader`: Fix onChange and onError event.

## [4.0.1] - 2021-07-23

Fixes:

- `ContributionCard`: Various fixes.
- `ModalNext`: Fix sizing of Modal content.
- `DashboardLayout/Flow`: Add gradient to Navigation.
- `DashboardLayout/Flow`: Handle Navigation button display.
- `BackingCard`: Ensure that the image is always contained in the card border.
- `ToggleTip`: Remove console warning in tests.
- `Modal`: Remove deprecation `console.warn` in tests and test add for deprecation message.

## [4.0.0] - 2021-07-22

Breaking Changes:

- Move component files for a better organization based on Atomic principles.
- Delete deprecated `CONTAINER_PADDING_MOBILE`.
- `Utilities`: Generalization of `!important` on all utilities.
- `Utilities`: Deprecate the following utilities:
  - `display/block`
  - `display/hidden`
  - `display/inline-block`
  - `flex/display-flex`
- `Utilities`: Add `display` utility to replace `k-u-block`, etc.

Features:

- `Utilities`: Add `k-u-flex-gap` and `k-u-flex-wrap` utility classes.
- `Utilities`: Add `display` utility to replace `k-u-block`, etc.

Fixes:

- Use `getReactElements` utils on `BakingCard` and `ContributionCard`.
- Use `gap` on Flex containers whenever feasible.
- `Title`: Style fixes (line-height and letter-spacing).
- `getReactElements` utils: Add child existence verification.

## [3.26.0] - 2021-07-12

Feature:

- `ContributionCard`: Add `largeInput` prop.

Fixes:

- `ContributionCard`: Fix accessibility.
- `ContributionCard`: Fix image ratio on desktop.
- `HeaderNav`: Fix user menu position on mobile.
- `ImageDropUploader`: Vertically center description text.
- `TagButton`: Update styles.

## [3.25.2] - 2021-07-09

Fix:

- `parseHtml`: Return empty string if we cannot use dom.

## [3.25.1] - 2021-07-09

Fix:

- `VerticalProgress`: Remove `max-width` on `k-VerticalProgress__wrapper`.

## [3.25.0] - 2021-07-08

Feature:

- `parseHtml`: We sanitize by default the markup with an option `parseHtml(value, { sanitize: false })` to disable it.

## [3.24.0] - 2021-07-08

Feature:

- `ImageDropUploader`: Add `canCrop` prop, defaults to `true`.

Fixes:

- `VerticalProgress`: Update styles.
- `TagButton` Update styles.
- `ImageDropUploader`: Update image URL on `initialValue` prop change.
- `ImageDropUploader`: Disable text select on cropper drag.

## [3.23.1] - 2021-07-08

Fix:

- `ContributionCard`: Update styles.

## [3.23.0] - 2021-07-06

Features:

- `DocumentsDropUploader`: Add component.
- `DocumentsStatusBox`: Add component.
- `ImageDropUploader`: Add component.
- `TagInput`: Add component.
- `ContributionCard`: Add `isInputValid` prop.
- `ContributionCard`: Add `onClose` prop and delete `closeButton` prop.
- `GiftIcon`: Update icon.
- `RadioButton`: Modify `focus`, `active`, `hover` and `checked` states.
- `VerticalProgress`: Add `withoutBorder` prop.

## [3.22.1] - 2021-07-01

Fix:

- `StickyContainer`: Fix spacer height definition.

## [3.22.0] - 2021-07-01

Features:

- `StickyContainer`: Add `"never"` value for `isSticky` prop.
- `HeaderMenu`: Improve accessibility.
- `HeaderNav.UserMenuNext`: Add `mobilePadding` prop.

## [3.21.0] - 2021-06-21

Feature:

- `HeaderNav`: Add `BurgerMenuNext` and `UserMenuNext` subcomponents.

Fixes:

- `Modal/Next`: Fix modal content height for decrepit versions of Safari.
- `VerticalCard`: Fix `description` PropType to node, allowing HTML parsing.
- `CrowdfundingCard`: Fix `progress` PropTypes, allowing boolean values.
- `Carousel`: Fix `Button` tiny size prop.

## [3.20.0] - 2021-06-17

Features:

- Add `error4` and `error5` to colors config.
- `Text`: Add `light` as default for `weight` prop.
- `Button`: Add `iron` modifier.
- `ToggleTip`: Add `targetElement` prop.

Fixes:

- `Text`: Fix `cssColor` bug and remove Styled Component dependency.
- `TextInputWithUnit`: Fix disabled state and `unitWord` styles.

## [3.19.0] - 2021-06-11

Features:

- `ImageCropper`: Add `onUpload` prop, called when uploading a new file.

Fixes:

- `DashboardLayout`: Remove horizontal scroll between 1440px and 1550px.
- `ImageCropper`: Fix behaviour of component, breaking when uploading a file.

## [3.18.1] - 2021-06-10

Fix:

- Add `TextInputWithIcon` to ESM exports.

## [3.18.0] - 2021-06-10

Features:

- `TextCopy`: Add `variant` prop, defaults to 'andromeda'.
- `TextInputWithIcon`: Add `iconPosition` prop, defaults to `left`.
- `ImageCropper`: Add `buttonProps` prop to be passed on to `BasicUploader`.
- `TextInputWithUnit`: Add `wrapperProps` and update styles.
- `RocketIllustration`: Add new component.
- `ContributionCard`: Add new component.

Fixes:

- `CrowdfundingCard`: Fix progress when value equals 0.
- Add Color SVG utility class on colored icons so they are not re-colored:
  - `CheckedCircleIcon`
  - `ClockCircleIcon`
  - `ClockIcon`
  - `CrossCircleIcon`
  - `FlashCircleIcon`
  - `RocketCircleIcon`
  - `WarningCircleIcon`
- `ImageCropper`: Return cropped image source value.

## [3.17.3] - 2021-06-07

Fix:

- `TextInputWithUnit`: Fix `variant` propagation.

## [3.17.2] - 2021-06-03

Fix:

- `ImageCropper`: Use default Label size.

## [3.17.1] - 2021-06-03

Fixes:

- `DropdownSelectWithInput`: Fix selected item margin when dropdownDisabled.
- `Label`: Update mobile styles.
- `DashboardMenu`: Fix expandable list padding.

## [3.17.0] - 2021-05-31

Feature:

- `DashboardLayout`: Replace `Alert` subcomponent with `Alerts` wrapper.

Fix:

- `ButtonIcon`: Fix `tag` transmission.
- `TeamCard`: Fix buttons sizes.

## [3.16.0] - 2021-05-28

Features:

- `ButtonGroup` : Add `orion` variant.
- `RangeSlider`: Add `disabled` prop, defaults to false.

Fixes:

- `Button`: Color icons will not be styled by Button SVG styles.
- `CrowdfundingCard`: Remove console warning when progress is not displayed.
- `RadioButton`: Update `disabled` status style.
- Fix badly formatted SASS colors.

## [3.15.0] - 2021-05-28

Features:

- Add `grey1` color to colors config & refactor.
- Add the following icon components:
  - `LockOutlineIcon`
  - `RefundIcon`
  - `ShieldCheckIcon`
- `DashboardLayout`: Add `Alert` subcomponent.
- `DropdownSelectWithInput`: Add `size` prop, defaults to `normal`, inherited by `DropdownPhoneSelect`.
- `CrowdfundingCard`: Add `progressLabel` prop.

Fixes:

- `TextInput`: Fix padding on `orion` variant.
- `Button`: Fix `boron` variant border color.
- `DashboardMenu`: Fix list items spacing.
- `Separator`: Reduce specificity of the styles.
- `HeaderNav`: Fix accessibility error.

## [3.14.0] - 2021-05-25

Features:

- Add `orange2` and `orange3` to colors config.
- `Button`: Add `neon` modifier.

Fix:

- `VerticalProgress`: Fix `z-index` value.

## [3.13.1] - 2021-05-20

Fixes:

- `VerticalProgress` : Export component.
- `DashboardLayout`: Specify size for `DashboardLayout.Flow` content column.

## [3.13.0] - 2021-05-20

Features:

- `VerticalProgress`: New component.
- `LinkBox`:
  - Add `orion` variant.
  - Add `backgroundColor` and `textColor` prop to `Background` and `Text` component.

Fixes:

- `Modal/Next`: Fix `Modal.Button` style when alone inside a `fullSize` Action.
- `Dropdown`: Add default value for `onBlur` prop (`() => {}`).

## [3.12.0] - 2021-05-18

Features:

- `HeaderNav`: Add styles to bottom border, defaults to `'shadow'`.
- `Modal/Next`: Add `fullSizeOnMobile` prop, defaults to false.
- `Modal/Next`: Add the following props to `Modal.Actions`:
  - `sticky`
  - `stickyOnMobile`
  - `fullSize`
  - `fullSizeOnMobile`
- `Modal/Next`: Deprecate `withoutMargin` prop on `Modal.Paragraph` in favor of `noMargin`.
- Add `boron` modifier to Button component.
- Add new color: `font3`.

## [3.11.0] - 2021-05-14

Feature:

- `HeaderMenu`: Add `tag` (and deprecated `as`) props to `HeaderMenu.Item`.

Fix:

- `HeaderMenu`: Fix focus styles.

## [3.10.0] - 2021-05-11

Features:

- `HeaderNav`: Add `size` prop, accepts `regular` and `small`.
- `HeaderNav.UserMenu.Button`: Add `hasArrow` boolean prop.
- `HeaderNav.UserMenu.Button`: Add the following color props:
  - `backgroundColor`
  - `backgroundColorHover`
  - `backgroundColorActive`
  - `color`
  - `colorHover`
  - `colorActive`
- `DashboardLayout`: Add `DashboardLayout.SiteHeader` component.
- Add `HourglassIcon` component.

Fixes:

- `TextInput`: Set the placeholder color to disabled.
- `DropdownSelectWithInput`: Fix input padding.

## [3.9.0] - 2021-05-06

Feature:

- `Modal/Next`: Add `tag` prop on `Modal.Paragraph`.

Fixes:

- `k-BulletList`: Fix styles.
- `Modal/Next`: Remove `className` console error.
- `Modal/Next`: Fix `customContentCols` class condition.
- `DashboardLayout`: Fix `DashboardLayout` background color.

## [3.8.0] - 2021-05-04

Feature:

- `Modal/Next`: Add `headerZIndex` prop to apply a `zIndex` to the `header`.

Fix:

- `Modal/Next`: Fix negative margin calculation for `Modal.Block` at `XL`.

## [3.7.0] - 2021-04-30

Feature:

- `Modal/Next`: Add `contentCols` prop, to specify content col number at breakpoints `S` and above. Accepts `default`, `s`, `m`, `l`, `xl` keys, with number values.

Fixes:

- `DashboardLayout`: use `--DashboardLayout-main-margin` for main margin on Desktop.
- `HeaderNav`: Fix burger menu button dimensions and improve affordance.
- Replace occurences of `CONTAINER_PADDING_MOBILE` with `CONTAINER_PADDING_THIN`.

## [3.6.0] - 2021-04-27

Features:

- `Paragraph`: unify modifier styles in one rule and expose modifier-specific class.
- `Title`: unify modifier styles in one rule using common title modifiers and expose modifier-specific class.
- `TitleWithStroke`: set color with CSS Custom Props and expose modifier-specific class.

Fixes:

- `DashboardLayout`: Fix columns widths.
- `HeaderNav`: Fix default dropdown button styles.

## [3.5.0] - 2021-04-23

Features:

- `Modal/Next`: Add `Modal.Block` subcomponent.
- `Modal/Next`: Add `variant` prop, defaults to `andromeda`.
- `Modal/Next`: Add `headerActions` and `headerTitle` props.
- `Modal/Next`: Add `giant` size value.

## [3.4.0] - 2021-04-20

Feature :

- `DropdownSelect`: Add `onBlur` and `value` (controlled select) props.

Fix:

- `Button`: Add invisible padding for better multiline spacing.
- `CheckableButton`: Fix styles for `checkPosition=left`.
- `CheckableButton`: Add specific styles to `variant=orion`.
- `Field.Input`: Recover missing style.

## [3.3.0] - 2021-04-15

Features:

- `CheckableButton`: Add `checkPosition` prop, defaults to `bottom`.
- `DashboardLayout`: use events to hide Flow.Aside mobile modal button.
- `DashboardLayout`: add the following events when menu is open/closed:
  - `DASHBOARD_HIDE_CONTENT_EVENT`
  - `DASHBOARD_SHOW_CONTENT_EVENT`

Fixes:

- `DropdownSelect`: fix arrow position.
- `ToggleTip`: fix props propagation in bubble.
- `ToggleTip`: fix first coordinates update.

## [3.2.1] - 2021-04-12

Fixes:

- Fix style bugs on `DropdownSelect`.
- On `DropdownSelect combobox`, display full list of options on menu open.
- Propagate `className` on `DropdownSelect` and `DropdownSelect combobox`.
- Recover missing props on `Field.Input`.

## [3.2.0] - 2021-04-12

Features:

- Button on `DashboardLayout.Flow.Nav` is full size when alone.
- Add `noMargin` prop to `FieldInput` component.

Fixes:

- Enable `size` prop on `Button` with Orion variant.
- Set default value for `Dropdown` options on level 2.

## [3.1.0] - 2021-04-08

Features:

- Add all sizes to `DropdownSelect`.
- Add `variant` prop to `LocationInput`, defaults to `andromeda`.

Fixes:

- Remove warning about `fill-rule` on `PepoleIcon`.
- Fix `TagButton` style.
- Fix styles on `DropdownSelect`.

## [3.0.0] - 2021-03-26

Breaking changes:

- Remove `StyleGuide` app.
- Remove `Karl` stories & components.
- Remove SCSS mixins.
- Reorganize components.
- Remove all `@kisskissbankbank/kitten/src/next` exports.
- Remove all SASS component mixins, helpers, definitions and schemas that are not used.
- Remove the following deprecated components:
  - `ArticleCard`
  - `Button` (`buttons/button`, replaced with `Button` (`buttons/button/button`))
  - `ButtonImageWithText`
  - `ButtonImageWithTextAndBadge`
  - `CallToActionPopover`
  - `Comment` from `form/comment` (replaced by `comments/comment`)
  - `CommentAvatar` from `form/comment-avatar` (replaced by `comments/comment-avatar`)
  - `CommentForm` from `form/comment-form` (replaced by `comments/comment-form`)
  - `ContributionCard`
  - `CrowdfundingCardWidget`
  - `DeprecatedArrowIcon`
  - `DonationCard`
  - `Dropdown`
  - `DropdownButton`
  - `ExternalRichLink`
  - `FormAmountAndCurrency`
  - `FormPhoneNumber`
  - `FormRow`
  - `Header` (replaced by `HeaderNav`)
  - `HeaderLogo` (replaced by `HeaderNav`)
  - `HeaderTitles` (replaced by `HeaderNav`)
  - `HeaderTour`
  - `HorizontalNav`
  - `ImageWithCaption`
  - `LegoGrid`
  - `LinkBox/deprecated`
  - `LoanSimulator`
  - `MarkdownPage`
  - `NavList`
  - `NavTabCarousel` (deprecated duplicate from `carousels/tab-bar-carousel`)
  - `Paragraph` (replaced by `Next` `Paragraph`, see beta.14)
  - `PhoneDropdown`
  - `Popover`
  - `ProjectCard`
  - `ProjectCreatorCard`
  - `ProjectSimilarCard`
  - `QuestionMarkWithTooltip`
  - `RewardCard` (replaced by `BackingCard`)
  - `RewardCardLegacy`
  - `RichTextInput`
  - `Search`
  - `SelectWithState` (replaced by `DropdownSelect`)
  - `SimilarProjectsCard`
  - `SimpleUploader`
  - `Slider` (replaced by `RangeSlider`)
  - `SliderBar`
  - `SliderTooltip`
  - `SliderWithTooltipAndPower`
  - `StaticTooltip`
  - `Switch` (replaced by `ToggleSwitch`)
  - `TabBar`
  - `TagList`
  - `TextInputAndSelect`
  - `TextInputWithUnitForm`
  - `Tooltip`
  - `TooltipNew`
  - `Tour`
  - `TourPopover`
  - `TourStep`
  - `Uploader`
  - `UserMenu`
- Remove the following deprecated HOCs:
  - `card`
  - `withTooltip`
- Remove default export for the following components:
  - `Dropdown`
  - `DropdownButton`
  - `LinkBox`
- Remove `sliderKeyDownHandler` helper.
- Depreciate `Stepper` in favour of `Next` `Stepper`.
- Replace `Paragraph` with `Next` `Paragraph` (see beta.14).
- `ArrowIcon` now defaults to `solid` version.
- Remove `k-u-blockAlign-*` utilities in favor of `k-u-align-self-*`.
- Remplace prop `margin` with `noMargin` on the following components:
  - `Paragraph`
  - `Title`
- Remove size props (`giant`, `huge`, `regular`, `big`, `tiny`) on the following components:
  - `BulletList`
  - `Button`
  - `ModalNext`
  - `TagButton`
  - `TextInput`
  - `TextInputWithUnit`
- Remove unused props on `Dropdown`.

Features:

- Add `LongArrowIcon` component.
- Add the following Logo components:
  - `MaisonDeCrowdfundingLogo`
  - `MicrodonLogo`
  - `GoodeedLogo`
  - `KkbbCoLogo`
- Add missing components, helpers and constants to ESM exports.
- Convert the following components to CSS-in-JS:
  - `AvatarWithTextAndBadge`
  - `Badge`
  - `BulletList`
  - `ButtonIcon`
  - `ButtonImage`
  - `ButtonQuestionMarkIcon`
  - `CloseButton`
  - `DevGrid`
  - `FacebookButtonIcon`
  - `FacebookButtonIconWords`
  - `FormAction`
  - `Grid`
  - `HeaderNav`
  - `IconBadge`
  - `ImageCropper`
  - `InformationBox`
  - `InstagramButtonIcon`
  - `Label`
  - `Line`
  - `Line`
  - `LinkedinButtonIcon`,
  - `LinkedinButtonIconWords`
  - `LinkList`
  - `Loader`
  - `LoaderWithParagraph`
  - `LocationInput`
  - `PinterestButtonIcon`
  - `ResponsiveIframeContainer`
  - `Row`
  - `SideGrid`
  - `SideLayout`
  - `SimpleCard`
  - `Stepper`
  - `StepperIcon*`
  - `SupTitle`
  - `Title`
  - `TwitterButtonIcon`
  - `TwitterButtonIconWords`
  - `VerticalStroke`
  - `YoutubeButtonIcon`
- Update & refactor the following components:
  - `Text`
  - `Marger`
- Add `onChange` to `ToggleSwitch` API.
- Add `tooltipProps` prop to `Field/Label` component.
- Add `StepperIcon` component with `state` prop.
- Add `empty` prop to `IconBadge`.
- Add `warning`, `neutral` and `none` values to `StatusWithBullet` `statusType` prop.
- Add `size` and `weight` props to `StatusWithBullet`.
- `statusMessage` prop is no longer required, you can now use `children` alternatively in `StatusWithBullet`.
- Add `hoverable` prop to `AvatarWithTextAndBadge`.
- Deprecate `textClassName` prop in favor of `className` on `AvatarWithTextAndBadge.Text`.
- Add explicit utility class `k-u-pointer-events-none` to `k-utilities-event` mixin.
- Add `size` prop to the following components:
  - `AvatarWithTextAndBadge.Image`
  - `BulletList`
  - `Button`
  - `ModalNext`
  - `TagButton`
  - `TextInput`
  - `TextInputWithButton`
  - `TextInputWithUnit`
- Add `playerButtonSize` prop to `SimpleCard`.
- Add `rounded` prop to Button component.
- Add `social_facebook`, `social_twitter`, `social_linkedin`, `social_instagram`,
  `social_youtube`, `social_pinterest` modifiers to Button component.
- Add `InstagramButtonIconWords` component.
- Add `type="button"` to Button by default.
- Add `ModalNext` export for `modals/next`.
- Add deprecation warning on `Modal` (`modals/modal`).
- Add `loadingText` prop to `LocationInput`.

Fixes:

- Fix `InformationBox` style.
- Fix gap bug on Safari for the following components:
  - `BackingCard`
  - `DashboardLayout.Flow`
  - `DashboardLayout`
  - `DashboardMenu`
  - `ImageCropper`
  - `Loader`
  - `LoaderWithParagraph`
- Add DOM check to `DevGrid`.
- Add width to `StickyContainer` in `HeaderNav`.
- Use wrapper and relative positioning for a `Badge` with `Icon` prop.
- Fix Lodash imports on `DropdownPhoneSelect`.
- Remove warnings when using `ToggleTip` and `Field.Label` with tooltip.
- Revert default value for `Title` margin.
- Fix console error in `Accordion` when closing pane.
- Fix ellipsis for children of `AvaratWithTextAndBadge`.
- Fix alignment on `HeaderNav` `UserMenuButton`.
- Fix `GridCol` offset class for `0` value.
- Fix dropdown list position on `LocationInput`.
- Remove console message on `LocationInput`.
- Limit focus outline display to keyboard navigation.
- Fix `HorizontalTimeline` `className` property name.
- Use `CustomEvent` instead of `event-emitter` on `Dropdown`.

## [3.0.0-beta.25] - 2021-03-26

Fix:

- Fix item classes transmission on `BulletList`.

## [3.0.0-beta.24] - 2021-03-25

Fix:

- Fix SCSS imports

## [3.0.0-beta.23] - 2021-03-25

Breaking change:

- Remove all SASS component mixins, helpers, definitions and schemas that are not used.

Feature:

- Add `loadingText` prop to `LocationInput`.

Fixes:

- Fix dropdown list position on `LocationInput`.
- Remove console message on `LocationInput`.

## [3.0.0-beta.22] - 2021-03-25

Rollback:

- Version: `"react-cropper": "2.1.1"`

## [3.0.0-beta.21] - 2021-03-25

Breaking Change:

- Remove `RichTextInput` component.

Fix:

- Limit focus outline display to keyboard navigation.

Revert:

- Fix: Replace `ResizeObserver` with `window.resize` on `Carousel`. (beta.20)

## [3.0.0-beta.20] - 2021-03-23

Breaking Change:

- Breaking change: Remove all `@kisskissbankbank/kitten/src/next` exports.
- Delete the following deprecated SCSS mixins and styles:
  - `k-Button*`
  - `k-LocationInput`
  - `k-TagButton`
- Remove size props (`giant`, `huge`, `regular`, `big`, `tiny`) on the following components:
  - `Button`
  - `ModalNext`
  - `TagButton`
- Remove the following deprecated components:
  - `Button` (`buttons/button`, replaced with `Button` (`buttons/button/button`))
  - `ButtonImageWithText`
  - `ButtonImageWithTextAndBadge`

Features:

- Refactor the following components to CSS-in-JS:
  - `ButtonIcon`
  - `ButtonImage`
  - `ButtonQuestionMarkIcon`
  - `CloseButton`
  - `FacebookButtonIcon`
  - `FacebookButtonIconWords`
  - `InstagramButtonIcon`
  - `LinkedinButtonIcon`,
  - `LinkedinButtonIconWords`
  - `LocationInput`
  - `PinterestButtonIcon`
  - `TwitterButtonIcon`
  - `TwitterButtonIconWords`
  - `YoutubeButtonIcon`
- Add `size` prop to the following components:
  - `Button`
  - `ModalNext`
  - `TagButton`
- Add `rounded` prop to Button component.
- Add `social_facebook`, `social_twitter`, `social_linkedin`, `social_instagram`,
  `social_youtube`, `social_pinterest` modifiers to Button component.
- Add `InstagramButtonIconWords` component.
- Add `type="button"` to Button by default.
- Add `ModalNext` export for `modals/next`.
- Add deprecation warning on `Modal` (`modals/modal`).

Fixes:

- Fix `HorizontalTimeline` `className` property name.
- Replace `ResizeObserver` with `window.resize` on `Carousel`.
- Use `CustomEvent` instead of `event-emitter` on `Dropdown`.

## [3.0.0-beta.19] - 2021-03-19

Breaking changes:

- Delete the following deprecated SCSS mixins and styles:
  - `k-Dropdown`
  - `k-PlatformSwitch`
  - `k-UserMenu`
- Move the following components:
  - `Dropdown` -> `components/navigation/header-menu/components`
  - `DropdownButton` -> `components/navigation/header-menu/components`
- Remove default export for `Dropdown` and `DropdownButton`.
- Remove unused props for `Dropdown`.

Features:

- Add the following Logo components:
  - `MaisonDeCrowdfundingLogo`
  - `MicrodonLogo`
  - `GoodeedLogo`
  - `KkbbCoLogo`
- Add missing exports to ESM exports.

## [3.0.0-beta.18] - 2021-03-18

Fix:

- Fix bug caused by adding `getScssPaths` in ESM export.

## [3.0.0-beta.17] - 2021-03-18

Breaking changes:

- Delete the following deprecated components:
  - `HorizontalNav`
  - `MarkdownPage`
  - `TabBar`
- Delete the following deprecated SCSS mixins:
  - `k-BulletList`
  - `k-Card`
  - `k-HorizontalNav`
  - `k-Label`
  - `k-TabBar`
- Convert and move the following component to CSS-in-JS:
  - `BulletList`
- Remove size props (`giant`, `huge`, `regular`, `big`, `tiny`) on the following components:
  - `BulletList`
  - `TextInput`
  - `TextInputWithUnit`
- Delete `card` HOC.

Features:

- Add `size` prop to the following components:
  - `BulletList`
  - `TextInput`
  - `TextInputWithButton`
  - `TextInputWithUnit`
- Refactor the following components to CSS-in-JS:
  - `Label`
  - `SimpleCard`
- Add `playerButtonSize` prop to `SimpleCard`.
- Add missing exports to ESM exports.

## [3.0.0-beta.16] - 2021-03-15

Breaking changes:

- Delete the following deprecated components:
  - `SelectWithState` (replaced by `DropdownSelect`)
  - `FormAmountAndCurrency`
  - `FormPhoneNumber`
  - `TextInputAndSelect`
- Delete the following deprecated SCSS mixins and styles:
  - `k-ResponsiveIframeContainer`
  - `k-Select`

Feature:

- Refactor `ResponsiveIframeContainer` to CSS-in-JS

Fixes:

- Fix error in `Accordion` when closing pane.
- Fix ellipsis for children of `AvaratWithTextAndBadge`.
- Fix alignment on `HeaderNav` `UserMenuButton`.
- Fix `GridCol` offset class for `0` value.

## [3.0.0-beta.15] - 2021-03-12

Fix:

- Revert default value for `Title` margin.

(Release `2.124.0`)

## [3.0.0-beta.14] - 2021-03-12

Breaking changes:

- Delete the following deprecated components:
  - `DonationCard`
  - `TextInputWithUnitForm`
- `Paragraph` is replaced with `Next` `Paragraph`.
- Move `StatusWithBullet` to `atoms`.

Features:

- Refactor `AvatarWithTextAndBadge` to CSS-in-JS.
- Add `LongArrowIcon` component.
- Add `warning`, `neutral` and `none` values to `StatusWithBullet` `statusType` prop.
- Add `size` and `weight` props to `StatusWithBullet`.
- `statusMessage` prop is no longer required, you can now use `children` alternatively in `StatusWithBullet`.
- Add `hoverable` prop to `AvatarWithTextAndBadge`.
- Add `size` prop to `AvatarWithTextAndBadge.Image`.
- Deprecate `textClassName` prop in favor of `className` on `AvatarWithTextAndBadge.Text`.
- Add explicit utility class `k-u-pointer-events-none` to `k-utilities-event` mixin.

Fix:

- Remove warnings when using `ToggleTip` and `Field.Label` with tooltip.

## [3.0.0-beta.13] - 2021-03-11

- Revert back to `beta.11` changes, keep fix.

## [3.0.0-beta.12] - 2021-03-11

- Revert all `beta.11` changes, except:
  - Delete buggy `useFlexGapCheck`.

## [3.0.0-beta.11] - 2021-03-11

Breaking changes:

- Delete buggy `useFlexGapCheck`.
- Delete the following deprecated components:
  - `Paragraph` (replaced by `Next` `Paragraph`, see beta.14)
- Delete the following deprecated SCSS mixins and styles:
  - `k-Title`
  - `k-Paragraph` (see beta.14)
  - `k-Row`
  - `k-Grid`
  - `k-grid` and `k-grid-col*` helpers
  - `k-Footer`
  - `k-FormAction`
  - `k-Line`
- Remplace prop `margin` with `noMargin` on `Title`.
- Remplace prop `margin` with `noMargin` on `Paragraph`.

Features:

- Convert the following component to CSS-in-JS:
  - `Title`
  - `Row`
  - `Grid`
  - `FormAction`
  - `Line`

## [3.0.0-beta.10] - 2021-03-10

Fix:

- Fix Lodash imports on `DropdownPhoneSelect`.

(Release `2.123.3`)

## [3.0.0-beta.9] - 2021-03-03

(Release `2.123.2`)

## [3.0.0-beta.8] - 2021-03-01

Breaking changes:

- Depreciate `Stepper` in favour of `Next` `Stepper`.
- Delete the following deprecated SCSS mixins and styles:
  - `k-Stepper`
  - `k-Stepper__icon`
- Convert `StepperIcon*` to CSS-in-JS and move to `atoms`.

Features:

- Convert deprecated `Stepper` to CSS-in-JS.
- Add `StepperIcon` component with `state` prop.
- Add `empty` prop to `IconBadge`.

Fix:

- Add DOM check to `useFlexGapCheck`.

## [3.0.0-beta.7] - 2021-03-01

Feature:

- Add `AdaptableGridCol` to ESM export.

Fixes:

- Add DOM check to `DevGrid`.
- Add width to `StickyContainer` in `HeaderNav`.
- Use wrapper and relative positioning for a `Badge` with `Icon` prop.

## [3.0.0-beta.6] - 2021-03-01

Breaking changes:

- Delete the following deprecated SCSS mixins:
  - `k-Line`
  - `k-LinkBox`
  - `k-SideGrid`
  - `k-StaticTooltip`
  - `k-Tooltip`
  - `k-TooltipNew`
  - `k-VerticalGrid`
- Delete the following deprecated components:
  - `LinkBox/deprecated`
  - `QuestionMarkWithTooltip`
  - `StaticTooltip`
  - `Tooltip`
  - `TooltipNew`
- Remove `withTooltip` HOC.
- Remove `LinkBox` default export.

Features:

- Convert the following components to CSS-in-JS:
  - `Line`
  - `SideGrid`
  - `SideLayout`
- Make `Marger` a function instead of a React.Component.
- Add `tooltipProps` prop to `Field/Label` component.
- Add `useFlexGapCheck` hook for flexbox `gap` feature detection.

Fixes:

- Fix `InformationBox` style.
- Fix gap bug on Safari for the following components:
  - `BackingCard`
  - `DashboardLayout.Flow`
  - `DashboardLayout`
  - `DashboardMenu`
  - `ImageCropper`
  - `Loader`
  - `LoaderWithParagraph`

## [3.0.0-beta.5] - 2021-02-25

Breaking changes:

- Delete the following deprecated SCSS mixins:
  - `k-Cropper`
  - `k-DevBreakpoints`
  - `k-DevGrid`
  - `k-Loader`
  - `k-LoaderWithParagraph`
- Convert and move the following components to CSS-in-JS:
  - `Loader`
  - `LoaderWithParagraph`

Features:

- Convert the following components to CSS-in-JS:

  - `DevGrid`
  - `ImageCropper`

- Breaking change: convert `LocationInput` to CSS-in-JS.
- Breaking change: remove `k-LocationInput` mixin.

## [3.0.0-beta.4] - 2021-02-22

Breaking changes:

- Delete the following deprecated SCSS mixins:
  - `k-Badge`
  - `k-Header`
  - `k-IconBadge`
  - `k-ImageWithCaption`
  - `k-InformationBox`
  - `k-PhoneDropdown`
  - `k-Separator`
  - `k-separatorBase`
  - `k-VerticalSeparator`
  - `k-VerticalStroke`
- Delete the following deprecated components:
  - `Comment` from `form/comment`
    (replaced by `comments/comment`)
  - `CommentAvatar` from `form/comment-avatar`
    (replaced by `comments/comment-avatar`)
  - `CommentForm` from `form/comment-form`
    (replaced by `comments/comment-form`)
  - `Dropdown`
  - `DropdownButton`
  - `Header` (replaced by `HeaderNav`)
  - `HeaderLogo` (replaced by `HeaderNav`)
  - `HeaderTitles` (replaced by `HeaderNav`)
  - `ImageWithCaption`
  - `NavList`
  - `PhoneDropdown`
  - `Switch` (replaced by `ToggleSwitch`)
  - `UserMenu`
- Convert and move the following components to CSS-in-JS:
  - `Badge`
  - `IconBadge`

Features:

- Convert the following components to CSS-in-JS:
  - `InformationBox`
  - `VerticalStroke`
- Add `onChange` to `ToggleSwitch` API.

## [3.0.0-beta.3] - 2021-02-19

Breaking changes:

- Delete the following deprecated SCSS mixins:
  - `k-FormRow`
  - `k-HeaderNav`
  - `k-LinkList`
  - `k-LoanSimulator`
  - `k-SearchInput`
  - `k-SimpleUploader`
  - `k-Slider`
  - `k-SliderTooltip`
  - `k-SupTitle`
- Delete the following deprecated components:
  - `FormRow`
  - `LoanSimulator`
  - `NavTabCarousel` (deprecated duplicate from `carousels/tab-bar-carousel`)
  - `RewardCard` (replaced by `BackingCard`)
  - `Search`
  - `SimpleUploader`
  - `Slider` (replaced by `RangeSlider`)
  - `SliderBar`
  - `SliderTooltip`
  - `SliderWithTooltipAndPower`
  - `Uploader`
- Delete `sliderKeyDownHandler` helper.

Features:

- Convert the following components to CSS-in-JS:
  - `HeaderNav`
  - `LinkList`
  - `SupTitle`
- Update `Text` component.
- Add `parseHtml` helper to ESM build.

## [3.0.0-beta.2] - 2021-02-15

Breaking changes:

- `ArrowIcon` now defaults to `solid` version.
- Remove `k-u-blockAlign-*` utilities in favor of `k-u-align-self-*`.
- Delete the following deprecated SCSS mixins:
  - `k-Alert`
  - `k-ExternalRichLink`
  - `k-HeaderTour`
  - `k-Popover`
  - `k-TagList`
  - `k-Tour`
- Delete the following deprecated components:
  - `CallToActionPopover`
  - `DeprecatedArrowIcon`
  - `ExternalRichLink`
  - `HeaderTour`
  - `Popover`
  - `TagList`
  - `Tour`
  - `TourPopover`
  - `TourStep`

## [3.0.0-beta.1] - 2021-02-08

Breaking changes:

- Remove `StyleGuide` app.
- Remove `Karl` stories & components.
- Delete the following deprecated SCSS mixins:
  - `k-LegoGrid`
  - `k-ProjectCard`
  - `k-ProjectCreatorCard`
  - `k-ProjectSimilarCard`
- Delete the following deprecated components:
  - `ArticleCard`
  - `ContributionCard`
  - `CrowdfundingCardWidget`
  - `LegoGrid`
  - `ProjectCard`
  - `ProjectCreatorCard`
  - `ProjectSimilarCard`
  - `RewardCardLegacy`
  - `SimilarProjectsCard`

## [2.125.0] - 2021-03-15

Feature:

- Add `HorizontalTimeline` component.

## [2.124.0] - 2021-03-12

Features:

- Add `className` prop propagation to `SingleEntryTable` and subcomponents:
  - `SingleEntryTable.Col`
  - `SingleEntryTable.HeaderCol`
- Add `className` prop propagation to `DoubleEntryTable` and subcomponents:
  - `DoubleEntryTable.Col`
  - `DoubleEntryTable.HeaderCol`
  - `DoubleEntryTable.TitleCol`

## [2.123.3] - 2021-03-10

Fix:

- Use callback ref in `useLazyObserver`.

## [2.123.2] - 2021-03-03

Fix:

- Perf problem with `Carousel` on mobile devices.

## [2.123.1] - 2021-03-01

Fix:

- Allow for `null` value on `HeaderNav` `stickyProps` prop.

## [2.123.0] - 2021-03-01

Feature:

- Add `PeopleIcon`, `StatsIcon` and `SpeechBubbleIcon`.

Fixes:

- Remove `unique "key" prop` error on `DashboardLayout`.
- Fix `StickyContainer` width on `HeaderNav`.

## [2.122.0] - 2021-02-25

Features:

- Add `fullHeightContent` prop to `DashboardLayout`.
- Add `shouldHideButton` prop to `DashboardLayout.Flow`.

Fixes:

- Fix `HeaderNav` width on Windows (Chrome & Firefox).
- Fix `CheckableButton` focus styles while staying accessible.
- Fix display on `DashboardLayout` for Chrome.
- Fix details display on `DashboardMenu`.

## [2.121.0] - 2021-02-22

Features:

- Add `DashboardLayout` component with `Flow` subcomponent.
- Add `DashboardMenu` component.
- Add `LightbulbIllustration` with `size` (large, normal) prop.
- Add icons components:
  - `HomeIcon`
  - `TagIcon`
  - `FileIcon`
  - `LoudspeakerIcon`
  - `ShieldIcon`.

## [2.120.1] - 2021-02-19

Fix:

- Fix init and resize coords calculation on `Toggletip`.

## [2.120.0] - 2021-02-12

Feature:

- Add `Toggletip` component.

## [2.119.0] - 2021-02-10

Feature:

- Add `regular` (default) and `big` props on all variants of `DropdownSelect`.

## [2.118.0] - 2021-02-09

Features:

- Add `size` prop to `RadioButton`, defaults to `regular`.
- Add `hover` styles for `BackingCard`.

## [2.117.0] - 2021-02-08

Feature:

- Add `size` prop to `HeaderMenu.Item` & refactoring.

## [2.116.0] - 2021-02-08

Features:

- Add `BackingCard` component.
- Add `Tag` component.
- Add `useMedia` hook.
- Add `k-u-size-giant` utility.
- Add `giant` value to `size` prop to `Text` component.

Fix:

- Fix mixup between `k-u-margin-vertical` and `k-u-margin-horizontal`.

## [2.115.0] - 2021-02-02

Feature:

- Add `pageClickText` prop to `Carousel` for page click action.

Fix:

- Fix `Carousel` margin and padding calculations.

## [2.114.0] - 2021-01-29

Features:

- Add `regular` (default) and `big` props on all variants of `TextInput`.
- Add `variant` prop to `TextInputWithUnit`, defaults to `andromeda`.
- Add `big` prop to `TextInputWithUnit`.
- Change `DocumentManager` `radius` and hide icon on `xs` screen.

Fix:

- `VerticalStepper` mobile style fixes.

## [2.113.0] - 2021-01-21

Features:

- Add Focus styles for focusable elements.
- Add `summaryProps` to `Details` component.
- Handle keyboard navigation on `Carousel`.
- Update mobile version of `VerticalStepper` component.

Fixes:

- Stop applying focus styles on `VerticalStepper` when `disabled`.
- `Combobox` filter on `label` (instead of `value`).

## [2.112.0] - 2021-01-18

Feature:

- Add `hideIconOnMobile` prop on `DropdownSelectWithInput`.

Fixes:

- `DropdownSelectWithInput` mobile style fixes.
- `DropdownSelect` mobile style fixes.
- `RangeSlider` mobile style fixes.
- `RadioButton` mobile style fixes.

## [2.111.0] - 2021-01-15

Feature:

- Add `forceVersion` prop to `CrowdfundingCard`.

Fixes:

- Add button types on `Carousel` navigation.
- Remove scrollbars on `Carousel` on Firefox.

## [2.110.0] - 2021-01-13

Feature:

- Add `buttonText` prop to `CrowdfundingCard`.

Fix:

- Fix overflow style on `ScrollableContainer`.

## [2.109.0] - 2021-01-12

Features:

- Replace deprecated `Slider` with `RangeSlider` on `ImageCropper`.
- Add `className` prop propagation to `RewardCard`.

## [2.108.0] - 2021-01-11

Features:

- New `RangeSlider`, based on `input[type="range"]` HTML element.
- Set `RewardCard` ratio to 16/10.
- Allow string prop types for `customSize` on `HorizontalStroke`.
- `menuZIndex` prop for custom menu z-index in `DropdownSelect` and `DropdownSelectWithInput`.

Fixes:

- Define default color for `DropdownSelect` items.
- Refactor `k-u-blockAlign` to `k-u-alignSelf-*` and docs.

## [2.107.0] - 2020-12-24

Features:

- Add `variant` prop to `CheckboxSet`, defaults to `andromeda`.
- Add `variant` prop to `Checkbox`, defaults to `andromeda`.
- Add `variant` prop to `TagButton`, defaults to `andromeda`.
- Add `variant` prop to `ProgressRing`, defaults to `andromeda`.
- Add `animationSpeed` prop to `ProgressRing`.

Fixes:

- Propagate `name` argument when `TextInput` is a textarea.
- `VerticalStepper` styles.

## [2.106.1] - 2020-12-18

Fix:

- `RadioButton`: Allow `PropTypes.node` on `text` prop.

## [2.106.0] - 2020-12-18

Features:

- Add `distanceAsPercentage` prop to `ArrowContainer`, defaults to false.
- Add Icons, Constants and useful Helpers to main export.

Fixes:

- Open menu on focus `DropdownSelect` combobox.
- Add `type="button"` to button on `PasswordInput`.

## [2.105.0] - 2020-12-16

Feature:

- Add `uniqLabelOnSearch` prop on `DropdownSelect`.

Fixes:

- Fix `VerticalStepper` styles.
- Fix `TagButton` className and refactoring.
- Fix `DropdownSelect` item line height and alignment.
- `ProgressBar` wasn’t passing class names.

## [2.104.1] - 2020-12-14

Rollback:

- Back to `styled-components` because bug in className.

## [2.104.0] - 2020-12-08

Feature:

- Add `variant` prop to `Progress`, defaults to `andromeda`.

Fixes:

- `PasswordInput` styles.
- `CheckList` styles.

## [2.103.0] - 2020-12-07

Features :

- Add `huge` props on `TagButton`.
- Add CSS utilities:
  - `k-u-flex`
  - `k-u-inlineFlex`
  - `k-u-flex-alignItems-*`
  - `k-u-flex-direction-*`
  - `k-u-flex-justifyContent-*`
  - `k-u-block`
  - `k-u-inlineBlock`
    and docs.

## [2.102.1] - 2020-12-07

Fix:

- Fix a synchronization bug between number and type values (`CreditCardForm`).

## [2.102.0] - 2020-12-07

Feature:

- Add type to `CreditCardForm` values.

Fixes:

- Fix ref errors on `LazyObserver` and `Dropdown`.
- Fix `VerticalStepper` styles.
- Update `error` props on `VerticalStepper` with `variant`.

## [2.101.0] - 2020-11-30

Features:

- Add `disableInput` prop to `PillNumberInput`, defaults to `false`.
- Add `k-u-margin-vertical-*` and `k-u-margin-horizontal-*` helper classes.
- Add `k-u-margin-*-auto` helper classes.
- Add `margin()` JS helper to help generate `k-u-margin-*` utility classes.

Fix:

- `DropdownPhoneSelect` when phone number is empty.

## [2.100.1] - 2020-11-26

Fix:

- Fix `RadioButton` styles.

## [2.100.0] - 2020-11-26

Features:

- Add `deactivateDropdown` prop to `DropdownSelectWithInput`.
- Add `useDebounce(value, delay)` hook.

Fixes:

- Fix `DropdownSelectWithInput` and `DropdownSelect` menu dropdown Z index.
- Fix `onInputChange` handling.
- Fix `RadioButton` styles.
- Fix `Accordeon` height update frequency.

## [2.99.0] - 2020-11-24

Features:

- Add `GlobeIcon` icon.
- Add `FlagIcon` icon.
- Add `DropdownPhoneSelect` component.
- Add `DropdownSelect` component, has `combobox` boolean prop.
- Add `DropdownSelectWithInput` component.
- Add `variant` prop to `Accordeon`, defaults to `andromeda`.
- Add `closeOnClick` prop to `Accordeon`, defaults to false.
- Add `label` prop to `Checkbox` and `CheckboxSet` components and
  display custom text if `children` are passed in addition to `label`.
- Add `design` prop to `RadioButton`, defaults to `disc`.
- Add `variant` prop to `RadioButton`, defaults to `andromeda`.
- Better accessibility on `RadioButtonSet`.
- Add `variant` prop to `Button`, defaults to `andromeda`.
- Add `variant` prop to `TextInput`, defaults to `andromeda`.
- Add `.k-u-a11y-visuallyHidden` CSS helper.

Fix:

- Refactor `Checkbox` and `CheckboxSet` components.

## [2.98.0] - 2020-11-23

Features:

- Add `variant` prop to `VerticalStepper`, with default value `andromeda`.
- Add `DotIcon` component.

Fix:

- `ImageCropper` `onChange` firing on uploaded images.

## [2.97.0] - 2020-11-16

Feature:

- Add `CreditCardForm` component.

## [2.96.0] - 2020-11-12

Feature:

- Update `RewardCard` component.

## [2.95.3] - 2020-11-05

Fix:

- Content reference on `<Dropdown />`

## [2.95.2] - 2020-10-22

Fix:

- File reference on `<ImageCropper />`.

## [2.95.1] - 2020-10-22

Fix:

- Delay `PillNumberInput` component call to `window` after `canUseDom()`.

## [2.95.0] - 2020-10-21

Features:

- Add `PillNumberInput` component.
- Add `micro` size for `<Button icon>`.
- Add original `file <File>` on `onChange` callback for `<ImageCropper />`

## [2.94.0] - 2020-10-13

Feature:

- Add `isSliding` prop to `SingleEntryTable`.

Fix:

- Fix `ArrowIcon` display bug in Safari.

## [2.93.0] - 2020-09-30

Features:

- Add EcmaScript Modules files. You can import components with
  `import { MyComponent, MyOtherComponent } from '@kisskissbankbank/kitten'`.
- Add `color` and `bgColor` props and deprecate old color props on:
  - `CheckedCircleIcon`
  - `ClockCircleIcon`
  - `ClockIcon`
  - `CrossCircleIcon`
  - `FlashCircleIcon`
  - `RocketCircleIcon`
  - `WarningCircleIcon`
- Add `color` props to:
  - `Cart`
  - `FacebookIcon`
  - `FacebookIconWithBackground`
  - `GarbageIcon`
  - `GrabberIcon`
  - `InstagramIcon`
  - `InstrumentTagIcon`
  - `LinkedinIcon`
  - `LocationIcon`
  - `MenuIcon`
  - `MessengerIcon`
  - `PhoneIcon`
  - `PinterestIcon`
  - `QuestionMarkIcon`
  - `StarIcon`
  - `TwitterIcon`
  - `TypologyTagIcon`
  - `WhatsAppIcon`
  - `YoutubeIcon`
- Add `deleteButtonA11yText` prop to `CartRewardCard` (defaults to 'Delete').
- Add `garbageButtonA11yText` prop to `RewardEdition` (defaults to 'Delete').

Fixes:

- Fix `ArrowIcon` props.
- Fix `Alert` display with long texts

## [2.92.1] - 2020-09-22

Fixes:

- Fixhover delay on `Button` svg icon.
- Fix `Chrome` issue with `EventTarget` on `ImageCropper`.

## [2.92.0] - 2020-09-10

Feature:

- Add `DownloadIcon` component.

## [2.91.1] - 2020-09-10

Fix:

- Fix controls issue on `GifVideo`.

## [2.91.0] - 2020-09-07

Feature:

- Use `BasicUploader` for `ImageCropper`, remove `base64` prop (always `true`).

Fix:

- Fix `ClickableCard` image dimensions in Safari.

## [2.90.0] - 2020-09-01

Features:

- Add 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram',
  'social_youtube', 'social_pinterest' modifiers to Button component.
- Add `InstagramButtonIconWords` component.

Fixes:

- Refactor `FacebookButtonIconWords`, `TwitterButtonIconWords`,
  `LinkedinButtonIconWords` components.
- Refactor `FacebookButtonIcon`, `TwitterButtonIcon`, `LinkedinButtonIcon`,
  `InstagramButtonIcon`, `YoutubeButtonIcon`, `PinterestButtonIcon` components.
- Fix Legacy Carousel width.

## [2.89.0] - 2020-08-28

Features:

- Add `GifVideo` component that waits until sources fail then loads `poster`.
- Create `CheckList` component.

## [2.88.2] - 2020-08-27

Fix :

- Fix `exportVisibilityProps` bug on `Carousel`.

## [2.88.1] - 2020-08-27

Fix:

- Fix `parseHtml` returning encoded error when using `replace()` on a
  non `string` component.

## [2.88.0] - 2020-08-27

Features:

- Add global closing event on `Tooltip`.
- Add `itemsPerPage` prop to use instead of `itemMinWidth` on `Carousel`.

Fix:

- Wait until fonts are loaded to trucate titles on `CrowdfundingCard`.

## [2.87.1] - 2020-08-21

Fix:

- Fix deprecated warning on DocLinkBox component.

## [2.87.0] - 2020-08-18

Feature:

- Add `Video` component to display videos on `RewardCard`.

Fixes:

- Add `key` to `CrowdfundingCard` video sources.
- Remove console error from `Header` component `Centered`.

## [2.86.0] - 2020-08-17

Feature:

- Add `videoProps` and `videoSources` to display videos on `CrowdfundingCard`.

Fix:

- Fix mobile display of `Alert` notification.

## [2.85.1] - 2020-08-14

Fix:

- Allowing adding more props on TeamCardImage component.

## [2.85.0] - 2020-08-13

Features:

- You can now import an utilities file with all Kitten utilities:
  `@kisskissbankbank/kitten/src/stylesheets/utilities.css`.
- Add `cssColor` to `TitleWithStroke`.

Fixes:

- Add opacity transition to `ClickableCard`.
- Move `.k-u-reset-button` into `k-utilities-reset-button` mixin.
- Fix `UserMenuButton` min-width from `HeaderNav` in xs screen size.

## [2.84.0] - 2020-08-07

Features:

- Add `huge` and `giant` props to `Button`.
- Add `cssColor` prop to `Text` component.
- Add `cssColor` prop to `Title` component.
- Add `huge`, `giant` and `center` props to `TextInput`.
- Add `huge` and `giant` prop to `SelectWithState`.

Fix:

- Enhance `ListTable` performance.

## [2.83.0] - 2020-07-31

Feature:

- Add new `Paragraph` with new font-size logic.

Fix:

- Fix `Paragraph` modifiers.

## [2.82.0] - 2020-07-30

Features:

- Add `fullSize` and `fullSizeTitle` props to `next/Modal`.
- New `<Stepper />` component imported from `import { Stepper } from '@kisskissbankbank/kitten/next`, (see usage on our Storybook, section named `NEXT`).
- Add new `k-u-link-font1` class utility.
- Add new `ClickableCard` component.
- Add new `k-u-reset-button` utility class.

Fixes:

- Remove console warning from `ProgressRing`.
- Adjust box shadow on Dropdown.
- Replace `for` with `htmlFor` in `BasicUploader` and `DocumentManager`.

## [2.81.2] - 2020-07-21

Fix:

- Fix `HeaderNav.UserMenu` `min-width`.

## [2.81.1] - 2020-07-21

Fix:

- Fix shadow on unscrolled `HeaderNav`.

## [2.81.0] - 2020-07-20

Features:

- New `setting` prop for `Text` component and new `lineHeight` options.
- Add `stickyProps` to `HeaderNav`.
- Add `useDeepCompareEffect` hook.
- Add `useWindowWidth` hook.

Fixes:

- Pass `isMenuExpanded` prop to styled component.
- Fix `Dropdown` position if content is wider than the window.

## [2.80.0] - 2020-07-13

Feature:

- New `usePrevious` helper hook.

Fix:

- Mobile & a11y fixes on `DocumentManager`.

## [2.79.0] - 2020-07-13

Features:

- Add `BasicUploader` component.
- Add `DocumentManager` component.
- Add `UploadIcon` component.
- Add `DocumentIconEmpty`, `DocumentIconPerson` and `DocumentIconHouse`.

Fixes:

- Escape `<3` with `parseHtml`.
- Add color transitions to `svg` elements that are inside buttons.

## [2.78.0] - 2020-07-06

Feature:

- `Carousel` passes props relating to visibility to its children.

## [2.77.0] - 2020-07-02

Feature:

- Add `withoutMargin` prop on `Modal.Paragraph`.

Fix:

- Replace `Title` component by `TitleWithStroke` on `RewardCardTitle`.

## [2.76.0] - 2020-07-01

Feature:

- Add `locked` prop to `ToggleSwitch`.

Fix:

- Remove duplicate `className` in `LinkBox` component.

## [2.75.2] - 2020-06-17

Fix:

- Set `max-width` on `RewardCard` row content.

## [2.75.1] - 2020-06-16

Fix:

- Fix `LinkBox` by using direct props instead of `linkProps`.
  `linkProps` is now deprecated

## [2.75.0] - 2020-06-15

Features:

- Update `LinkBox` component.
- Add `hasArrow` and `active` props to `List.ButtonItem`.
- Add `active` prop to `ButtonGroup.Button`.

Fixes:

- Update mobile image size on `EngagementCardWithImage`.
- Update pseudo-class of the `EmbedPlayer` btn.

## [2.74.0] - 2020-06-04

Features:

- Add `NavBar` component.
- Consolidate both `Carousel` components and handle legacy.
- Add `disabled` global prop to `RewardCard`.

Fixes:

- Fix `overflow: scroll` bug on ScrollableContainer.
- Remove Radium from KissKiss page `PreDeposit`.
- Remove Radium from Lendo Annex `SimpleTemplate`.
- Remove Radium from `RewardCard`.
- Remove Radium from `Hero`.
- Remove Radium from `LegoGrid`.
- Remove Radium from `Timeline`.
- Remove Radium from various Karl components and stories.
- Remove Radium from `CartRewardCard`.
- Remove Radium from `VerticalCardWithAction`.
- Remove Radium from `Triptych`.
- Remove Radium from `TeamCard`.

## [2.73.0] - 2020-05-29

Features:

- Make `CrowdfundingCard` a function instead of a `PureComponent`.
- Add `imageContainerRatio` prop to `CrowdfundingCard` component.

Fix:

- On `CrowdfundingCard`, hide `additionalInfo` when `loading` prop is `true`.

## [2.72.0] - 2020-05-28

Features:

- Add `widgetState` and `additionalInfo` props to `CrowdfundingCard`
  component.
- Update `CheckedCircleIcon`, `CrossCircleIcon`, `CrossIcon`,
  `LockIcon`, `WarningCircleIcon` components by adding title, width, height
  and sometimes color props.
- Create `FlashCircleIcon`.
- Add `orange` to colors config.
- Add `micro` value to `size` `HorizontalStroke` prop.

Fix:

- `CrowdfundingCard` title image margin.

## [2.71.0] - 2020-05-27

Feature:

- Add `hover` on `embed-player` button.

Fixes:

- Bad position for `ProgressRing` on Chrome.
- No SSR for `<Modal />`.

Rollback:

- Back to `styled-components` v4 because of SSR issues.

## [2.70.0] - 2020-05-15

Feature:

- Add `color` prop to `HorizontalStroke`.

Fixes:

- Remove `classNames` bug from `HorizontalStroke`.
- Remove warning in `Pagination`.

## [2.69.0] - 2020-05-12

Features:

- Add `SingleEntryTable` component.
- Add `ExportIconAlternate` icon.
- Add `modifier` prop to `HorizontalStroke`.
- Add `margin` and `align` props to `Pagination`.

## [2.68.0] - 2020-05-06

Feature:

- Add `colorHover` prop to `HeaderNav.Button`.

Fix:

- `HeaderNav.UserMenu` `closeEvents` prop.

## [2.67.0] - 2020-05-04

Fix:

- Remove `calc` on `ProgressRing`.

Feature:

- Add: New `<Modal />` component imported from `import { Modal } from '@kisskissbankbank/kitten/next`, (see usage on our Storybook, section named `NEXT`).

## [2.66.1] - 2020-04-27

Fixes:

- Fix `HeaderNav` layout.
- Update `path` fill on `Button`.

## [2.66.0] - 2020-04-24

Features:

- Add `stretch` prop to `CrowdfundingCard`.
- Update `CheckedIcon` component.
- Add editor icons:
  - `BoldIcon`
  - `BlockquoteIcon`
  - `ListIcon`
  - `VideoIcon`
  - `Title1Icon`
  - `Title2Icon`
  - `Title3Icon`
  - `Title4Icon`
  - `ParagraphIcon`
  - `ItalicIcon`
  - `ImageIcon`
  - `LinkIcon`
  - `ButtonIcon`
  - `AlignLeftIcon`
  - `AlignCenterIcon`
  - `AlignRightIcon`
- Add BEM-style class names to `Carousel` components.

Fix:

- Fit `CrowdfundingCard` image to new 16/10 ratio.

## [2.65.0] - 2020-04-21

Doc:

- Add a doc for style `utilities`.

Features:

- Create `EngagementCardWithImage` component.
- Add `RocketIcon` and `RocketCircleIcon` components.
- Create `ProgressRing` component.
- Update `Title` component and add new doc.
- Add `TitleWithStroke` component.
- Add `titleModifierStyles` common style for titles.
- Add `strokeModifierStyles` common style for horizontal strokes.
- Add `tinyButtons` prop on `Carousel`.
- Add `preferCompletePaginationOnMobile` prop on `Carousel`.
- Add pagination position `bottom-left` and `bottom-right` on `Carousel`.
- Add pagination squares via `showPageSquares` prop on `Carousel`.
- Add loop feature via `loop` prop on `Carousel`.

Fixes:

- Adjust `button` size to follow guidelines on Mobile.
- Modernize `Video` component.
- Use `styled-components` instead of `Radium` for `EmbedPlayer` component.

## [2.64.0] - 2020-04-07

Feature:

- Add a11y options for new `Carousel` buttons.

Fix:

- Fix arrow size on new `Carousel` buttons.

## [2.63.0] - 2020-04-07

Features:

- Add new Dropdown in `dropdowns/v2`.
- Add a11y options for new `Carousel` buttons.

Fixes:

- Revert old Dropdown.
- Fix arrow size on new `Carousel` buttons.

## [2.62.0] - 2020-04-06

Features:

- Create `HeaderNav` components.
- Create `AvatarWithTextAndBadge` components.
- Create `a11y` helper.
- Create `LoginIcon` component.
- Create `HeaderMenu.Badge` component.
- Create `dropdown-config` file to store component constants.
- Create `ratio` file with `computeFromRatio` helper.
- Add `borderSideOnHover`, `largeItem`, `noBorder`, `backgroundColors`
  props to `HeaderMenu` component.
- Add `Button` prop to `HeaderMenu.Item` component.
- Add keyboard key code and event name in `events` file.
- Add `.k-u-avoid-click` utility.
- Add a11y events to `DropdownButton` component.
- Add `tiny` prop in `KissKissBankBankLogo` and `LendopolisLogo`
  components.
- Add `ORDERED_SCREEN_SIZES` constant in `screen-config` file.
- Add `getScreenSizeFrom` helper in `media-queries` file.
- Add new `k-u-link` utility class for basic link styling.

Fix:

- Fix `Dropdown` components events and accessibility.

## [2.61.1] - 2020-04-06

Fixes:

- Fix a memory leak to unmounted `StickyContainer`.
- Fix `Alert` error when `onAfterClose` is not defined.

## [2.61.0] - 2020-04-02

Feature:

- Add `cssPropertyDistributor` utility.

Fix:

- Add API check to `ContinuousIntersectionObserver` utils.

## [2.60.3] - 2020-04-01

Fix:

- Fix warning in `SelectWithState` component.

## [2.60.2] - 2020-03-26

Fix:

- More performant `DoubleEntryTable` Component.

## [2.60.1] - 2020-03-25

Fix:

- Update `CopyIcon`.

## [2.60.0] - 2020-03-19

Features:

- Add `hidePagination` props to `Carousel`.
- Create `CameraIcon` component.

## [2.59.1] - 2020-03-17

Fixes:

- `ArrowIcon` component size.
- Fix warning in `Pagination` component.

## [2.59.0] - 2020-03-13

Feature:

- Expose `goToPage` method in `Carousel`.

Fix:

- Update padding mobile version on EngagementCard.

## [2.58.0] - 2020-03-11

Feature:

- Add `showOtherPages` and `pagesClassName` to `Carousel`.

Fix:

- Remove `isActive` styles to `EngagementCard`.

## [2.57.0] - 2020-03-06

Feature:

- Add `margin` utility classes for new steps and half steps.

Fix:

- Update `EngagementCard` styles.

## [2.56.0] - 2020-03-03

Features:

- Add `SaveIcon` and `DocIcon`
- Bump to `node@12.x`

Fix:

- Remplace `imageSrc` by `icon` props on `EngagementCard`.

## [2.55.0] - 2020-02-18

Features:

- Create `EngagementCard` component.
- Add `.k-u-background-color-background3` utility.

Fixes:

- Fix `CrowdfundingCard` info styles.
- Simplify code for `ContinuousIntersectionObserver`.
- Remove warnings about `fill-rule` in SVG icons.
- IE11 fix for `Button` with `icon` modifier.
- Fix unused `onAfterClose` props for Alert component.

## [2.54.0] - 2020-02-06

Feature:

- add `unit` prop to `CounterBlock` component.

Fix:

- use style-components for `CounterBlock` and fix `title` and `subTitle` props.

## [2.53.0] - 2020-02-03

Feature:

- Add `inputValue` prop to `TextInputWithButton` component.

Fix:

- `value` prop from `TextInputWithButton` is now deprecated. Use
  `buttonValue` instead. Also, allow React component inside this prop.

## [2.52.1] - 2020-01-28

Fix:

- Style fixes for `DoubleEntryTable` cols.

## [2.52.0] - 2020-01-27

Features:

- Add `useContinuousIntersectionObserver` hook.
- Add `ContinuousIntersectionObserver` component with Render Prop.

## [2.51.0] - 2020-01-20

Features:

- Add `DoubleEntryTable` component.
- Add `k-u-link-primary1` and `k-u-link-background1` utilities.
- Add `toggleable` `ListTable` story example.
- Make copy text message disappear after 3sec on `<TextCopy />`.
- Add `id` prop to `<Comment />`.

Fixes:

- Update copy text message size of `<TextCopy />` to `micro`.
- Remove Margin on `Modal__close` button on `Modal`.

## [2.50.0] - 2020-01-06

Features:

- Add `.k-u-line-height-*` utilities.
- Add `hexToRgba` helper, remove `polished` dependency.

Fix:

- Fix `Modal` animation and mobile styles.

## [2.49.0] - 2020-01-03

Features:

- Use `styled-components` instead of `Radium` to `LinkBox` component.
- Use `styled-components` instead of `Radium` to `ButtonImageWithText`.
- Add `HEADER_HEIGHT` export to `Header` component.

## [2.48.1] - 2019-12-20

Fix:

- Update margin on project Informations on `CrowdfundingCard`.

## [2.48.0] - 2019-12-17

Feature:

- Add `buttonText` and `buttonModifier` props on `TextCopy` component.

## [2.47.0] - 2019-12-13

Feature:

- Add `isAnimated` prop to `Modal`, defaults to true.

Fixes:

- Transmit size modifiers to lists in `Markdown`.
- Remove (some) console warnings.

## [2.46.1] - 2019-12-09

Fix:

- Add `badgeColor` prop to `UserMenu` component for
  `ButtonImageWithTextAndBadge`.

## [2.46.0] - 2019-12-09

Features:

- Switch `IconBadge` to Styled Components and add `disabled` prop.
- Switch `StarredBadge` to Styled Components.
- Add `RewardCard.DiamondBadge` component.
- Add open/close animations to `Modal` component.
- Add `badgeColor` prop to `ButtonImageWithTextAndBadge`.
- Add `tnum` Typography CSS helper for Tabular Numerals.

Fix:

- Remove console warnings related to `CrowdfundingCard` propTypes.

## [2.45.0] - 2019-12-09

Feature:

- Add `garbageButton` boolean on `RewardEdition.Header` component.

## [2.44.0] - 2019-12-05

Feature:

- Create `EditIcon` component.

## [2.43.0] - 2019-12-04

Features:

- Update `BulletList` component with `styled-components`.
- Add `warning` prop to `<Alert />`.
- Create `warning` and `warning2` in colors-config.

## [2.42.0] - 2019-11-29

Feature:

- Use delay to disappear `SimplePopover` from DOM.

Fixes:

- Allow `Progress` prop `value` to be a `string`.
- Fix fluidity on `icon` `Buttons`.
- Remove `Button` underline on hover.

## [2.41.2] - 2019-11-26

Fix:

- Fix `StyleRoot` place in `Hero` component.

## [2.41.1] - 2019-11-25

Fixes:

- Cancel emitter on UserMenu unMount.
- Update subtitle's truncate on `CrowdfundindCardWidget` component.

## [2.41.0] - 2019-11-22

Features:

- Add `IntersectionObserverClass` and `useIntersectionObserver` hook.
- Create `GiftIcon` component.

## [2.40.2] - 2019-11-20

Fixes:

- Re-render `Progress` when `value` is updated.
- Fix `value` to `valueMin` when `value` is negative.

## [2.40.1] - 2019-11-20

Fixes:

- Update `Truncate` in mobile on `CrowdfundingCard`.
- Update `font-size` information in mobile and others fixes on `CrowdfundingCard`.

## [2.40.0] - 2019-11-15

Features:

- Update `Progress` with Styled Components.
- Add `copper` modifier to `Button`.
- Add `encodeSvgString` util.
- Add `CheckableButton` component.

Fixes:

- Modifier `checked` on `Button` is now deprecated.
- Delete `margin` on last items of the list on `CrowdfundingCard`.
- Update styles on `CrowdfundingCardWidget` component.
- Add incoming animation to `SimplePopover`.

## [2.39.0] - 2019-11-12

Features:

- Add `CrowdfundingCard` mobile version.
- Delete `stateDay` and update `dayCounter` props on `CrowdfundingCardWidget`.

## [2.38.0] - 2019-11-08

Features:

- Add `SimplePopover` component.
- Add `--important` utility definitions.
- Add `important` argument to `k-typographyFontSize` definition.
- Add `important` argument to `k-typographyFont` definition.

## [2.37.2] - 2019-11-07

Fix:

- Update `dayCounter` propTypes on `CrowdfundingCard`.

## [2.37.1] - 2019-11-04

Fix:

- Browser `:invalid` style handling by `TextInput`.

## [2.37.0] - 2019-11-04

Features:

- Add `activeColor` prop to `ToogleSwitch` component.
- Add `buttonProps` to `TextInputWithButton` component.

Fix:

- Change color for `BackerCard` title.

## [2.36.0] - 2019-10-31

Features:

- Add `color` and `title` props on `CopyIcon` component.
- Create `EmbedIcon` component.

## [2.35.0] - 2019-10-29

Feature:

- Add `.k-u-background-color-primary6` utility.

## [2.34.0] - 2019-10-25

Feature:

- Add `ToggleSwitch` component.

## [2.33.0] - 2019-10-24

Features:

- Create `KissKissBankBankLogo` component.
- Create `CrowdfundingCardWidget` component.

Fixes:

- Update truncated title on `CrowdfundingCardWidget` component.
- Update `Label` styles.

## [2.32.0] - 2019-10-16

Feature:

- Update `CrowdfundingCard` with styled-components.

Fix:

- Update `Field.Label` styles.

## [2.31.0] - 2019-10-01

Feature:

- Add `bulletProps` and change type of `statusMessage` in `StatusWithBullet`.

## [2.30.0] - 2019-10-01

Feature:

- Add `indeterminate` prop and style to `Checkbox`.

## [2.29.1] - 2019-09-27

Fix:

- Update suggestions when items prop changes on `<Autocomplete />`.

## [2.29.0] - 2019-09-27

Features:

- Create `StrokeIcon` component.
- Add `icon`, `iconPosition`, `updateSuggestionsStrategy`, `isLoading`, `noResultMessage` and `shouldShowNoResultMessage` props to `<Autocomplete />`.

Fix:

- Remove default `font-size` on `Field.Label`.

## [2.28.0] - 2019-09-24

Feature:

- New `k-u-cursor-*` CSS utility.

## [2.27.0] - 2019-09-23

Feature:

- Add `onChange`, `from` and `to` props to `StandaloneRangeDatePicker`.

## [2.26.0] - 2019-09-20

Feature:

- Add `onSelect` prop on `Autocomplete` component.

Fixes:

- Passing value through `Autocomplete` callbacks.
- Fix weird `ListTable` bottom margin bug.

## [2.25.0] - 2019-09-12

Features:

- Move `Modal` CSS styles over to React component.
- Add `modalClassNames` and `hasCloseButton` to `Modal`.

Fixes:

- Update title style on `StandaloneRange` component.
- Remove rounding in `pxToRem` and `stepToRem`.

## [2.24.0] - 2019-09-06

Features:

- Add `TextInputWithIcon` component.
- Export `ICON`, `ICON_TINY` and `ICON_BIG` css from `Button`.

Fix:

- Update `active` pseudo-class to `TagButton`.

## [2.23.0] - 2019-08-30

Feature:

- Add `textareaId` prop to `CommentForm`.

Fixes:

- Remove `defaultProps` in `StandaloneRangeDatePicker` component.
- Fix `AdaptableGrid` width.

## [2.22.0] - 2019-08-28

Feature:

- Pass `className` prop to `AdaptableGrid` and `AdaptableGridCol` to
  enable styling with `styled-components`.

## [2.21.0] - 2019-08-27

Features:

- Center scroll horizontally on `HorizontalNav` selected item.
- Update `TagButton` with styled-components.

Fixes:

- Remove console Warning in `Modal` component.
- Update `Text` component styles on `Pagination`.

## [2.20.0] - 2019-08-23

Features:

- Add `disableOutsideScroll` prop to Modal (defaults to `false`
  to prevent Breaking Change).
- Propagate props and add `listProps` to `ListTable.Header`.
  (`listProps` is passing props to the list inside the Header row.)
- Add `listProps` to `ListTable.Row`.
- Add a `as` prop on `AdaptableGrid` and `AdaptableGridCol` to custom
  HTML tags name.
- Update `Pagination` with styled-components.

Fixes:

- Remove styles (`:hover` styles on `ListTable.Row`) not in the Spec.
- Move `ListTable.Row` `...others` props propagation
  on `row` element instead of `list` element.

## [2.19.1] - 2019-08-20

Fix:

- Default `ListTable` column style to Flex.

## [2.19.0] - 2019-08-19

Features:

- Add `StandaloneRangeDatePicker` component.
- Add `ListTable` component.
- Add `DoubleArrowIcon` component.
- Add `shadow`, `borderRadius`, `borderColor`, `borderWidth` props
  to `ArrowContainer` component.
- Add `StatusWithBullet` component.

## [2.18.4] - 2019-08-13

Fix:

- Fix negative container margins in `AdaptableGrid`.

## [2.18.3] - 2019-08-13

Fix:

- Fix warning error about key conflict in `InfoLines` component.

## [2.18.2] - 2019-08-08

Fix:

- Refactor styles for `isAnimated=false` prop on `Accordeon`.

## [2.18.1] - 2019-08-07

Fix:

- Add old ref prop to `TextInputWithUnit`.

## [2.18.0] - 2019-08-02

Features:

- Update `InfoLines` with styled-components.
- Add `withoutBorder` prop to `RewardCard`.
- Clicking on `TextCopy` input just select the text (no copy in clipboard).

Fix:

- Take back input refs on `TextInput`.

## [2.17.0] - 2019-07-24

Features:

- Create `ExportIcon` component.
- Update `EmailIcon` component.
- Add `forceOneLine` prop to `TextCopy` component.

## [2.16.2] - 2019-07-19

Fix:

- Fix `TextInputWithLimit` value.

## [2.16.1] - 2019-07-17

Fix:

- Add like button event styles only when an event is attached (`Comment`).

## [2.16.0] - 2019-07-17

Features:

- Create `likeButtonProps` props for `Comment` component.
- Add `avatarBadge` prop on `CommentAvatar`, `Comment` and `CommentForm`.
- Add `title` prop on `CheckedCircleIcon`.
- Add `title` and `color` props on `HeartIcon`.
- Update `PasswordInput` with styled-components.

## [2.15.0] - 2019-07-16

Feature:

- Dispatch props to `Field.Error` subcomponent.

## [2.14.1] - 2019-07-15

Fix:

- Remove HTML warning from `Comment`.

## [2.14.0] - 2019-07-11

Feature:

- Create `BubbleIcon` component.

Fixes:

- Fix props propagation in
  `TextInputWithButton`,
  `TextInputWithUnit`,
  `TextInputWithLimit`.
- Fix `width` error styles `TextInputWithUnit`.

## [2.13.1] - 2019-07-08

Fix:

- Use `domElementHelper` to check if DOM is present, in `Details`.

## [2.13.0] - 2019-07-08

Features:

- Add `MessengerIcon` and `WhatsAppIcon`.
- Add `containerProps`, `listProps` to `IconList` component.
- Add `TextCopy` component.
- Add `Autocomplete` component.
- Add `Field.Autocomplete` component.
- Add `IconContainer` component.

Fixes:

- Remove `isRequired` of the `ownerName` props on `Comment` component.
- Update
  `Comment`,
  `CommentForm`,
  `CommentAvatar` with `styled-components`.
- Update `DonationCard` with `styled-components`.
- Update
  `TextInput`,
  `TextInputWithButton`,
  `TextInputWithUnit`,
  `TextInputWithUnitForm`,
  `TextInputWithLimit` with `styled-components`.
- Use fraction for `imageContainerRatio` in `SimpleCard`.

## [2.12.0] - 2019-06-26

Feature:

- Add `textAlign` and `withTitleStroke` props to VerticalCard
  component.

## [2.11.0] - 2019-06-20

Features:

- Add `imageContainerBackground` and `imageContainerRatio` props to
  `SimpleCard`.
- Add Lazy class `LazyObserver`, hook `useLazyObserver` and HOC `withLazy`.

Fixes:

- `SimpleCarousel` accessibility fixes.
- Remove warnings in `Carousel` component tests.

## [2.10.0] - 2019-06-07

Feature:

- Add `modalProps` prop to `Modal` component.

## [2.9.2] - 2019-06-04

Fixes:

- Remove warning error from unknown `Button` props.
- Add `others` props to `SimpleCarousel` component.

## [2.9.1] - 2019-06-04

Fix:

- Fix `checked` icon `Button` size.

## [2.9.0] - 2019-06-04

Feature:

- Add `checked` `modifier` to `Button` component.

## [2.8.0] - 2019-06-03

Feature:

- Expose `setSticky`/`setUnsticky` methods in StickyContainer.

## [2.7.0] - 2019-05-24

Features:

- Create `RewardEdition` component.
- Update `RewardEdition` stories.
- Add `VisuallyHidden` component for accessibility.

Fix:

- IE11 Button height compatibility fix.

## [2.6.0] - 2019-05-15

Feature:

- Add `descriptionTag` prop to `CartRewardCard`.

## [2.5.0] - 2019-05-13

Feature:

- Add `stepToRem` helper.

## [2.4.5] - 2019-05-09

Fix:

- Remove a HTML warning on `List.ButtonItem`.

## [2.4.4] - 2019-05-06

Fix:

- Add link styles when `VerticalStepper.Step` has `onClick` attribute.

## [2.4.3] - 2019-05-06

Fix:

- Fix `open` prop propagation to `Details` component.

## [2.4.2] - 2019-05-02

Fix:

- `ScrollableContainer` style fixes.

## [2.4.1] - 2019-04-30

Fixes:

- Rework `ScrollableContainer` shadow display.
- Fix `cursor` for `poster` Video attribute.

## [2.4.0] - 2019-04-25

Features:

- Create `ButtonGroup` component.
- `ScrollableContainer` new props `shadowColor`, `backgroundColor`.

Fixes:

- Fix `cover` with used `controls` on Video.
- `StickyContainer` fix for `isSticky='always'`.

## [2.3.0] - 2019-04-19

Feature:

- Add `ArrowContainer` component.

## [2.2.0] - 2019-04-18

Features:

- Add `borderRadius` props on Button component.
- Add player button on `Video` component.
- Add `Details` component.
- Add `Icon` and `color` props to `Badge` component.
- Add `Cart` icon.

Fixes:

- Use `styled-components` instead of `Radium` for `List` component.
- Add `VerticalStepper.Link` styles when is an `a`.
- Fix `WarningIcon` warning.
- Fix buggy settings on `StickyContainer`.

## [2.1.0] - 2019-04-11

Features:

- New `StickyContainer` component.
- Add a new component `AdaptableGrid` to handle grids.
  From now, you can use this component instead of `Grid`.

## [2.0.1] - 2019-04-11

Fix:

- Remove `getScssPaths` from `@kisskissbankbank/kitten`.
  Prefer use `@kisskissbankbank/kitten/src/config/paths`.

## [2.0.0] - 2019-04-10

Breaking changes:

- Upgrade React/ReactDOM dependencies (`>= 16.8.x`).
- `getImagesPaths` has been removed and `getScssPaths` moved.
  If you use Kitten paths, you will be update require by:
  `import { getScssPaths } from '@kisskissbankbank/kitten'.

Feature:

- You can now import components from `@kisskissbankbank/kitten`.
  Example: `import { Button, Text, Marger } from '@kisskissbankbank/kitten'.

## [1.26.0] - 2019-04-02

Feature:

- Add `others` props to `Switch` component

Fix:

- Set `vertical-align` property for `BulletList` component

## [1.25.0] - 2019-03-21

Feature:

- Add `lightRed` (`#ffebe0`) to `COLORS` set.
- Add `unit` prop to `Field.Input`.

## [1.24.0] - 2019-03-21

Features:

- Add `link` props to `Field.Label`
- Add `Field.Password` component

## [1.23.0] - 2019-03-20

Features:

- Add `Field.Checkbox`.
- Export `FLUID`, `DEFAULT`, `TINY` and `BIG` css from `Button`.

Fix:

- Update selected option style to `Select` component.

## [1.22.0] - 2019-03-18

Features:

- Add `customSize` props to `HorizontalStroke`.
- Add `HorizontalStroke` size CSS: `TINY`, `DEFAULT`, `BIG` and `HUGE`.
- Add `IconList`.
- Add empty `Prev` and `Next` container to `NavTabCarousel` when
  `NavTabCarousel.Prev` or `NavTabCarousel.Next` are empty.

## [1.21.0] - 2019-03-11

Features:

- Add `Video` component.
- Add `getReactElementsWithoutType` helper.

Fix:

- Add missing `href` props to `SimpleCard`.

## [1.20.0] - 2019-03-08

Feature:

- Add `withPlayerButtonOnImage` props and update style on
  `SimpleCard` component.

## [1.19.0] - 2019-03-05

Feature:

- Add `position: fixed` and update horizontal padding on `Modal`
  component.

## [1.18.1] - 2019-02-28

Fix:

- Update `paragraphModifier` props to `MarkdownPage` component.

## [1.18.0] - 2019-02-27

Features:

- Add `MarkdownPage` component.
- Create `DatePicker` component.
- Add new carousel which better work inside grid.
  The pagination buttons from `Carousel` can now be place everywhere
  around the component by using this props `paginationPosition` with object keys
  from `fromXxs` to `fromXl` and `default` and object values in
  `'top'`, `'right'`, `'bottom'`, `'left'`.

Fixes:

- `SelectWithState` fix warnings about `htmlFor` and `autoComplete` props
- Fix `VerticalStepper.Step` warning.
- Change positioning (from absolute to flex) on button in `TextInputWithButton` component.

## [1.17.0] - 2019-02-21

Feature:

- Add `links` props to `NavTabCarousel` component.

Fix:

- Update `disabled` status colors to `VerticalStepper`.

## [1.16.0] - 2019-02-19

Features:

- Add `disabled` status to `VerticalStepper`.
- Update `LockIcon` to accept `color` and `title` props.

## [1.15.0] - 2019-02-13

Features:

- Add `VerticalStepper`.
- Add `WarningIcon` and `WaitingIcon`.
- Update `CheckedIcon` to accept `color` and `title` props.

## [1.14.0] - 2019-02-12

Features:

- Add `limit` prop to `Field.Input` to handle length limitation.
- Recover templates for TPE/PME pages from LENDO.

Fix:

- Move Sass styles to styled components styles for `Container` component.
  You don't need to include the `k-Container` mixin in your Sass stylesheet
  anymore.

## [1.13.0] - 2019-02-08

Feature:

- Add a new `Button` component.

## [1.12.0] - 2019-02-01

Features:

- Add `k-u-background-color-primary5` class.
- On `SimpleCarousel`, add `id` prop to component
  (in case of multiple Carousels on one webpage).

Fixes:

- Switch `SimpleCarousel` from Radium to Styled Components in order to fix bug for IE.
- Replace FacebookIconWithBackground inside `FacebookButtonIconWords` by FacebookIcon.
- `Marger` accepts zero value.
- IE Flexbox bug on `Header` component CSS.
- `SearchInput`, remove "clear" cross from IE10+ input.

## [1.11.1] - 2019-02-01

Fix:

- Fix `NavTabCarousel` layout for small devices.

## [1.11.0] - 2019-01-29

Feature:

- Display `ownerLocation` only if the prop is provided.

## [1.10.1] - 2019-01-29

Fixes:

- Move `NavTabCarousel` component path. Imported component from
  `kitten/components/carousel/tab-bar-carousel` is now deprecated.
  Use `kitten/components/carousel/nav-tab-carousel` instead.
- Fix `NavTabCarousel` style issue on grid layout.

## [1.10.0] - 2019-01-25

Feature:

- Add `onAnimationEnd` to `HighlightHalo` that accepts a function to
  execute when animation is over.

## [1.9.0] - 2019-01-23

Features:

- Add `containerStyle`, `paginationStyle` and `bulletStyle`
  props on `SimpleCarousel`.
- New `HighlightHalo` component in `Tour` group. Accepts:
  `itemSize` (width/height size in pixel number)
  `itemColor` (CSS color value as string)
  `animationCycles` (number of middle animation cycles as number)
  `animationCycleDuration` (duration of an animation cycle in seconds as number)
  `animationDelay` (delay in seconds as number)

Fix:

- Add the ability to edit and add styles on `BulletList`.

## [1.8.0] - 2019-01-23

Feature:

- Create `NavTabCarousel` component.

Fixes:

- Fix some styles on `SimpleCard`.
- Remove `SearchInput` results cross.

## [1.7.1] - 2019-01-22

Fixes:

- Fix trigger `onChange` handler on `Field.Select` when autoFill is triggered.

## [1.7.0] - 2019-01-22

Features:

- Add `autoFill` prop to `Field.Select` component.
- Add `activePaginationColor`, `paginationColor` and `paginationAlign`
  props on `SimpleCarousel`.

Fixes:

- Fix `Field.Select` label by using `for=` instead of `id=`.
- Adds the ability to edit and add styles on `BulletList`.

## [1.6.0] - 2019-01-17

Features:

- New `SearchInput` component.
- Update `SearchIcon` to accept `color`, `iconTitle`,
  `circleProps` and `pathProps` props.
- New `Overlay` component with `zIndex` (number) and `isActive` (bool) props.

Fix:

- Update size of the bullets on `BulletList`.

## [1.5.0] - 2019-01-16

Feature:

- Animation on `Accordeon` component.

Fixes:

- Remove margin when `title` prop is empty in `CounterBlock` component.
- Force `type="button"` on `buttonQuestionMarkIcon` component.

## [1.4.1] - 2019-01-10

Fix:

- `BurgerMenu` changed `hover` behaviour.

## [1.4.0] - 2019-01-10

Features:

- Add `HeaderMenu`.
- Add `BurgerIcon`.

## [1.3.0] - 2018-12-27

Features:

- Add prop `id` on `Accordeon.Item`. This id would be given by the callback `onChange` on `Accordon` if setted.

## [1.2.0] - 2018-12-27

Features:

- Add `Accordeon` component.
- Add `getReactElementsByType` helper.
- Uses `style` prop on `RadioButton`.

## [1.1.3] - 2018-12-20

Fix:

- Update `TeamCard` import links.

## [1.1.2] - 2018-12-12

Fix:

- Fix `Marger` context/state.

## [1.1.1] - 2018-12-12

Fix:

- Add `color` prop for `TeamCardButtonWithTooltip` component.

## [1.1.0] - 2018-12-11

Features:

- `CartRewardCard` introduce new sub-component `CartRewardCard.Description`
  as prop `textDescription` is deprecated.
- Add `Field` component and sub-components:
  - `Field.Label`
  - `Field.Input`
  - `Field.RadioButtonSet`
  - `Field.Select`
  - `Field.ErrorMessage`
- Add some icons:
  - `BancontactIcon`
  - `GiropayIcon`
  - `IdealIcon`
  - `MaestroIcon`
  - `PayPalIcon`
  - `SofortIcon`
- Add `k-TextInput--sixDigits` class.

Fixes:

- Update `k-inputSet` vertical spacing.
- Update `k-RadioButtonSet` line-height.

## [1.0.0] - 2018-12-11

- First release!
