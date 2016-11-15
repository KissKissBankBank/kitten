# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

Features:
- Add `box-sizing` declaration in `k-Tour`.
- Add prop `closureEvents` to close the dropdowns.

## [v0.20.0] - 2016-11-14

Features:
- Add secondary colors.
- Update `k-Tour` buttons and animation delay.

## [v0.19.0] - 2016-11-14

Features:
- Add component `k-PhoneDropdown`.
- Add new helper `getComputedLeft` on `ElementHelper`.
- Add text utilities classes: `k-u-small` and `k-u-strong`.
- Add `k-dropdownArrow` helper.

Breaking changes:
- Rename `SimpleList` to `NavList`.
- Rename `k-Dropdown` props: `contentHorizontalPosition`
and `arrowHorizontalPosition`.

## [v0.18.0] - 2016-11-14

Features:
- Add prop `useStore` to `k-Tour` component for testing.

## [v0.17.1] - 2016-11-14

Fixes:
- Small fixes on `k-Tour` animation and css.

## [v0.17.0] - 2016-11-10

Breaking changes:
- Add "svg-react-loader": "^0.3.7", to your package.json to compile assets with
Webpack

Features:
- Add component `k-HeaderTour` and `k-Tour`

## [v0.16.0] - 2016-11-10

Breaking changes:
- Update `UserMenu`:
  * Add modifier `k-UserMenu--withoutBorderTop` on `k-UserMenu`.
- Remove `k-UserMenu__separation` and
  replace by `k-UserMenu__borderTop`, `k-UserMenu__borderBottom`.

## [v0.15.1] - 2016-10-02

Fixes:
- Small fixes on header:
  * Fix `k-TextInput` and `k-SearchInput` sizes.
  * Update `Search` component examples.

## [v0.15.0] - 2016-10-02

Breaking changes:
- Update `k-SearchInput` molecule:
  * Use a `<button>` tag instead of an `<input type="submit">`.
- Update `Dropdown` component:
  * Add `dropdownContent` prop instead of generating a list inside the
    `Dropdown` component.
  * Remove `dropdownList` and `dropdownListClassName` props.
- Extract `UserMenu` logic from `Dropdown` component:
  * Add new `UserMenu` component.
  * Remove some props in `Dropdown` component:
    - `notifications`
    - `buttonTemplate`
    - `srcImg`
    - `widthImg`
    - `heightImg`
    - `altImg`
    - `text`
    - `title`
    - `textClassName`
  * Add new callback in `Dropdown` component: `onPositionUpdate`.

Features:
- Add new React component `Search`.

## [v0.14.0] - 2016-10-31

Features:
- Add modifier `k-PlatformSwitch--withoutBorderTop` on `k-PlatformSwitch`.
- Add component `k-Popover`.
- Update KissKissBankBank and hellomerci svg logos.
- Update `k-Grid` max-width from `1420px` to `1440px`.
- Remove `k-ButtonIconWords` and use `k-Button--icon` modifier instead.

Fixes:
- Fix `SelectWithState` component onChange callback (remove all underscores in
  component props names).
- Rename `.k-ButtonImageWithText__text--withoutMarginRight` to
         `.k-ButtonImageWithText__text--withoutPaddingRight`

## [v0.13.0] - 2016-10-21

Breaking changes:
- Update animation on `k-Dropdown__button--rotationOnExpanded`:
  * Requires `k-Dropdown__button__svgPath` and `k-Dropdown__button__svgPathRight`
- Add modifier `k-Header__userMenuText--withEllipsis` on `k-Header`.

Features:
- Close `k-Dropdown` when clicking on a link.

Fixes:
- Fix `SelectWithState` component `onChange` callback.

## [v0.12.0] - 2016-10-19

Breaking changes:
- Remove configuration maps for:
  * k-TabBar
  * k-HorizontalNav
- Add modifier `k-ButtonIcon--dropdown` on `k-ButtonIcon`.

Features:
- Update `k-TabBar` molecule:
  * Use flex display.
  * Remove `k-TabBar__item--singleLine` modifier class (it doesn't break the
    layout).
- Enable props propagation on `k-PlatformSwitch` molecule.

Fixes:
- Remove notification badge on `k-UserMenu` when there is no notification.

## [v0.11.0] - 2016-10-19

Breaking changes:
- Remove configuration maps for:
  * k-Button
  * k-ButtonIcon
  * k-ButtonTag
- Apply colors styles in separate modifiers. It required html updates on:
  * k-Button
  * k-ButtonIcon
  * k-ButtonTag

Updates:
- Remove configuration maps for:
  * k-ButtonImage (it was not used)

## [v0.10.0] - 2016-10-18

Breaking changes:
- Update `k-ButtonIcon`
  * requires new colors map
- Update `k-ButtonIconWords`
  * requires new colors map
- Remove configuration maps for:
  * k-Checkbox
  * k-Label
  * k-TextInput
  * k-Badge
  * k-TypographyBodyCopy
  * k-TypographyScale
  * k-ButtonImageWithText
  * k-Card
- Add a secondary item style on `k-UserMenu`
  * requires a new colors map
- Remove class `k-ExternalRichLink__element--pull-end`.
- Update `k-Header` atom:
  * Add more classes: `k-Header__nav__item` ; `k-Header__logo` ;
    `k-Header__item__logo` ; `k-Header__button` ; `k-Header__items--fixedSize`
- Update `k-ButtonImageWithText`:
  * Add `k-ButtonImageWithText__text--withoutMarginRight`
- Update `k-Dropdown` organism:
  * Add animation with `k-Dropdown__button__svgPath` and
    `k-Dropdown__button__svgPathRight`
- Update `k-TabBar` molecule with new class `k-TabBar__item--singleLine`.

New features:
- Add new `k-ButtonTag` atom.
- Add new helper `k-Button__svg`.
- Add new colors map for social networks `k-ButtonIcon`.
- Add new `k-ButtonIconWords` (still in progress).
- Add new helper `k-media-max`.

## [v0.9.0] - 2016-10-11

Breaking changes:
- Rename the `hot_output_bundles` to `kitten_hot_output_bundles`.
- Update `k-TestimonyList__row` molecule's HTML
  * required new `TestimonyList__row` container

New features:
- Add themes color map for the style guide.

Fixes:
- Dropdown component alignment.

## [v0.8.0] - 2016-10-07

Breaking changes:
- Change dummy stylesheets file architecture.
- Remove `k-GridDuo` molecule.
- Use `therubyracer` instead of `mini_racer`.
- Update `k-Header` molecule's HTML
  * required new `__container`
  * replace `__grid` by `__row`
  * remove `k-Header__items--pull-end`
- The `k-LinkList` molecule requires new arguments.

New features:
- Add new `k-Teaser` molecule.
- Add new `k-titleWithActions` molecule.
- Add new `k-PressQuotes` molecule.

## [v0.7.0] - 2016-10-03

Breaking changes:
- Loan Slider requires new props since it does not show fees anymore.
- Use [Webpack](https://webpack.github.io/) to build js and css assets in dummy.
- Use [React on Rails](https://github.com/shakacode/react_on_rails) to manage
  React components (client and server sides) in dummy.
- Migrate all js into es6 classes or modules.

New features:
- Grid overlay on the style guide when pressing ctrl+g.
- Add pages that serve as full-page previews for tests in the style guide.
- Add branding section on styleguide.
- Add grid on styleguide.
- Update menu behaviour on styleguide.
- Add new `Badge` atom.
- Add new `ButtonWithBadge` molecule.
- Add new `ButtonImageWithText` molecule.
- Add new `SliderTooltip` molecule.
- Add new `Grid` molecule.
- Add new `Select` molecule.
- Add new `SelectWithState` JavaScript component.
- Add new `LinkList` molecule.
- Add new `Footer` molecule.
- Add new `TextInputWithButton` molecule.
- Add new `Checkbox` atom.
- Add media-queries helpers.
- Update `Testimonies` molecule positionning and styles.
- Update `TextInput` atom font-size.
- Update `Hero` molecule media-queries.

Fixes:
- Computes position of `UserMenu` in `Header` organism.
- Fixes small bugs on header (responsive, IE11, dropdown opening)
- Simpler "production" setup for the dummy app.
- Small updates on the styleguide.

## [v0.6.2] - 2016-08-23

Fixes:
- Add config, public and vendor folders in gem package.

## [v0.6.1] - 2016-08-23

Fixes:
- Move JavaScript imports for the styleguide to the dummy app.

## [v0.6.0] - 2016-08-23

New features:
- Add new component: `grid-duo` molecule.
- Add new text/align utility.

Fixes:
- Add susy as regular dependency in npm module.
- Add app folder to gem package.
- Remove `publishConfig` attribute in `package.json`.
- Remove `npm link kitten`.

## [v0.5.0] - 2016-08-22

Breaking changes:
- Requires applications to use webpack to compile assets.
- Requires a global `$k-typography: k-typography-definition((…))` instead of
  passing typography styles in mixins.
- Move all styleguide stylesheets into dummy app for testing.
- Remove components from `kitten` import.
- Change some styles for `ButtonImage` and `ButtonIcon`.
- If you are serving the engine in your routes make sure you add
  `if Rails.env.development?` if you don't want to serve it in production.

New features:
- Add gem configuration options.
- Add webpack to manage `kitten` scss assets in dummy app.
- Add new component: `Header` organism
- Add new component: `Testimonies` molecule
- /kitten/playground route in the styleguide to test your styles in development
- Access components directly by removing the `#` in the styleguide in URL
- Add new component: `Tabbar` molecule.
- Add new component: `UserMenu` molecule.
- Add new component: `TextInput` atom.
- Add new component: `SearchInput` molecule.
- Add new component: `PlatformSwitch` molecule.
- Ignore playground changes in git (requires to type `rake` in development)
- Add new component: `Hero` molecule.
- Add new component: `Card` molecule.
- Add Susy library to handle grid sizes.
- Add new component: `Row` molecule.
- Add image assets management in dummy webpack configuration.
- Add webpack asset path helper.

Fix:
- Loan Simulator does not show Infinty durations when pressing enter.

## [v0.4.0] - 2016-08-04

Minor updates:
- Update `@group` property in SassDoc comments.
- Update npm module exposed variables: it now returns an array of `loadPaths`
  instead of a function.

New features:
- Add new component: `HorizontalNav` molecule.
- Add javascript on `LoanSimulator` organism with React.
- Add new css structure on styleguide.

## [v0.3.0] - 2016-08-01

New features:
- Add new component: `LoanSimulator` organism.
- Add new validation system.
- Add styleguide routing, controllers and views.
- Update @import strategy.
- Add npm module configuration.

Fix:
- Remove [Slim](http://slim-lang.com/) templating.

## [v0.2.0] - 2016-07-20

New features:
- Add new component: `Button` atom.
- Add `.scss` samples to make a new component creation easier.

Fix:
- Update release task to match with `master` branch.

## [v0.1.0] - 2016-07-05

New features:

- Add Sass schema (inspired from JSON schema).
- Add typography mixins and helpers.
- Add dummy application to test the library.
- Add SassDoc.
