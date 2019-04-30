# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

## [2.4.1] - 2019-04-30

Fixes:
- Rework `ScrollableContainer` shadow display
- Fix `cursor` for `poster` Video attribute.

## [2.4.0] - 2019-04-25

Features:
- Create `ButtonGroup` component.
- `ScrollableContainer` new props `shadowColor`, `backgroundColor`

Fixes:
- Fix `cover` with used `controls` on Video.
- `StickyContainer` fix for `isSticky='always'`


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
