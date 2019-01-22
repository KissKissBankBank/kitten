# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

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
