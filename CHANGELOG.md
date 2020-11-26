# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

- Feature: Add `deactivateDropdown` prop to `DropdownSelectWithInput`.
- Fix: Fix `DropdownSelectWithInput` menu dropdown Z index.
- Fix: Fix `onInputChange` handling.
- Fix: `RadioButton` styles.
- Feature: Add `useDebounce(value, delay)` hook.
- Fix: Accordeon height update frequency.

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
  - `StyledRocketCircle`
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
