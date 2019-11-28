# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

- Fix: Allow `Progress` prop `value` to be a `string`.
- Fix: Fix fluidity on `icon` `Buttons`.

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
