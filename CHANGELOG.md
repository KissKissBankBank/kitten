# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

- Fix: Update color `Checkbox` disabled.
- Fix: Update color `RadioButton` disabled.
- Feature: Add new `Title` React component.
- Feature: Add new `Paragraph` React component.
- Feature: Add new `HeartIcon` React component.
- Feature: Add new `Button` React component.
- Feature: Add new `HeaderLogo` React component.
- Fix: Change default port in development from 3000 to 3003. You should now
  see the style guide on http://localhost:3003 instead.

## [5.4.0] - 2017-01-17

Features:
- Add new `RadioButton` React component.
- Add new `Header` React component.
- Add new `SideGrid`, `SideGridContent` and `SideGridAside` components.
- Add new `upcaseFirst()` string helper.
- Add new `initialTouched` and `requiredDurationError` props to `LoanSimulator`.

## [5.3.0] - 2017-01-16

Features:
- Add new `Checkbox` React component.
- Add new `FormActions` React component.
- Add new `Grid` and `GridCol` React components.

Fixes:
- At xxs, use thinner gutters.
- Override bootstrap on blockquotes in `k-Testimony__text`
  and `k-PressQuotes__quote__text`.

## [5.2.0] - 2017-01-12

Features:
- Add `primary-6` color.
- Introduce `k-Teaser__col--start@l` to fix ordering of columns on `k-Teaser`.

Fixes:
- Add default margins to `.k-PressQuotes__title` and
  `.k-titleWithActions__title`.
- Testimony row is larger on xxs.
- Vertical align on `k-LinkBox__paragraph`.
- Add default colors to `k-Row`.

## [5.1.0] - 2017-01-11

Features:
- Add `k-Select__label` to `k-Select`.
- Add `labelText` option to `SelectWithMultiLevel`.
- Add new `k-SideGrid` component.

Fixes:
- Change font size in `k-LoanSimulator__commission`.
- Change `k-SingleColumn` width according to the media.

## [v5.0.0] - 2017-01-09

Breaking changes:
- Remove the fixed size on the LinkBox.

Features:
- Add new `k-Tooltip` React component.
- Add new `k-TooltipIcon` component.
- Handle multi-level options in the Select.
- Select can now be clearable, searchable, and multi.
- Add new `k-VerticalGrid` component.
- Add new `k-FormActions` component.
- Add new `k-Switch` React component.
- Add new `Stepper` component.
- Add new `ArrowIcon` and `CheckedIcon` components.

Fixes:
- Disable React on Rails console traces in dev style guide.
- Make radio button and checkbox accessible by keyboard.
- Fix Warning on default commissionRules prop type for LoanSimulator.
- Disable React on Rails console traces in dev style guide.
- Use new files architecture for stylesheets:
  * Remove `atoms`, `molecules` and `organisms` directories.
  * Use `components` directory instead to match javascripts files architecture.

## [v4.4.0] - 2016-12-27

Features:
- Add `commissionRules` prop to `LoanSimulator`.

Fixes:
- Fix Loan simulator initial installment tooltip placement.

## [v4.3.0] - 2016-12-26

Features:
- Add `isExternal` option to `LinkBox`.

Fixes:
- Change some styles on `k-LinkBox`.
- Fix text-decoration in `k-Paragraph__link` and `k-BulletList__link`.

## [v4.2.0] - 2016-12-23

Features:
- Add links item in `k-BulletList` et `k-Paragraph`.

## [v4.1.0] - 2016-12-21

Features:
- Add `k-u-margin` for margins.
- Add modifier `k-buttonIcon--micro` on `k-ButtonIcon`.
- Add `initialInstallment` option to `LoanSimulator`.
- Add modifier `k-Row--lightTopBorder` on `k-Row`.

Fixes:
- Move `babel-preset-airbnb` module from `devDependencies` to `dependencies`.
- Fix image width on `.k-Footer__logo__img > img`.

## [v4.0.0] - 2016-12-20

Breaking changes:
- Remove `k-TypographyScale`.

Features:
- Add test setup.
- Add small radio buttons label.
- Add small paragraph for radio buttons containers.
- Add large bullet list.
- Add `k-Title` to style titles.
- Add `k-Paragraph` to style paragraphs.
- Add new `LinkBox` React component.
- Add new `DocLinkBox` React component.
- Add `k-FormComposer` component.
- Add new `FormAmountAndCurrency` React component.
- Add new `FormPhoneNumber` React component.
- Add new `k-Button--carbon` and `k-ButtonIcon--carbon`.
- Add hidden input to fetch `duration` data in `k-LoanSimulator` component.
- New `DevGrid` React component and new CSS components `k-DevGrid` and
  `k-DevBreakpoint`.
- Add `k-SingleColumn` molecule.
- Add `build:dev`, `build`, and `hot-assets` scripts to the root `npm run`.

Fixes:
- Change font color for disabled elements on checkboxes and radio buttons.
- Change font color for pressed elements on checkboxes and radio buttons.
- Change font type for radio buttons.
- Change font and font size of small checkboxes.
- Remove hover on radio buttons and checkboxes.
- Change large paragraph font size for radio buttons containers.
- Remove loan simulator left margins.
- Fix unit size on `k-TextInputWithUnit`.

## [v3.1.0] - 2016-12-08

Features:
- Add commission displaying to class `LoanSimulator`.
- Add text inactive style `k-u--inactive`.
- Add text active style `k-u--active`.
- Add commission style `k-LoanSimulator__commission`.
- Add `bin/install` and `bin/cleanup`.

Fixes:
- Fix dependencies paths.
- Remove unused sassy-maps option in package.

## [v3.0.0] - 2016-12-08

Breaking changes:
- Rename module from `kitten` to `kitten-components` to publish the module to
  the npm public registry. You have to update your `package.json` and reinstall
  all your node modules with `bin/install`.
- Rename class `k-Button--default` to `k-Button--hydrogen`.
- Rename class `k-Button--primary` to `k-Button--helium`.
- Rename class `k-Button--secondary` to `k-Button--lithium`.
- Rename class `k-Button--secondaryOnWhite` to `k-Button--beryllium`.
- Rename class `k-Button--zinc` to `k-Button--boron`.
- Delete `k-LabelWithInfo` component.

Features:
- Add `k-LinkBox` component.
- Add modifier `k-LinkBox--withIcon` on `k-LinkBox`.
- Add `k-RadioButton` component.
- Add `k-BulletList` component.

## [v2.0.0] - 2016-11-29

Breaking changes:
- Remove support for npm 2. You need to upgrade to npm 3 and reinstall all your
  node modules.

Features:
- Add `kitten-launcher` module in dummy app `package.json` to manage client
  front stack dependencies (Webpack, plugins and loaders).
- Add `spec/dmmy/bin/install` to install dependencies in dummy app.

Fixes:
- Move `kitten` dependencies from client app to main `package.json`.
- Update `npm-link` command from `preinstall` script to `postinstall` script in
  dummy app.

## [v1.2.2] - 2016-11-23

Fixes:
- Fix `this.dispatchEvent` in component `Tour`.

## [v1.2.1] - 2016-11-22

Breaking changes:
- Remove height declaration on `k-Header__logo`.
- To add autoprefixer in your Webpack config, you must:
  * Use `npm install postcss-loader --save` in your client folder
  * Update your Webpack config with:

```js
…
const autoprefixer = require('autoprefixer')
…
module: {
loaders: [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
  },
]
},
postcss: [ autoprefixer({ browsers: ['> 5%', 'ie >= 10', 'ios_saf >= 9'] }) ],
…
```

Fixes:
- Add autoprefixer in Webpack to fix styles on old browsers.
- Fix `k-ButtonWithBadge` for IE 10.
- Change `images/brand/lendopolis.svg` to fix height.
- Change syntax of dispatch event to fix on old IE.

## [v1.1.1] - 2016-11-18

Fixes:
- Fix buttonIcon size on Safari 9 (min-width: auto support).
- Better computation for phone dropdown position.
- Add class k-ButtonIcon--verticalArrow on k-ExternalRichLink.

## [v1.1.0] - 2016-11-16

Features:
- Add `onToggle` to Dropdowns.
- Update `k-Tour` popover positioning.

Fixes:
- Change class k-ButtonIcon--dropdown to k-ButtonIcon--horizontalArrow.
- Add class k-ButtonIcon--verticalArrow.

## [v1.0.1] - 2016-11-16

Fixes:
- Popover bottom navigation fixed.
- Fix on Header.

## [v1.0.0] - 2016-11-16

Features:
- Add prop `closeEvents` to close the dropdowns.
- Add new class `k-HorizontalNav__element` (to handle displaying issue on IE).
- Add new class `k-HorizontalNav__element--fixedSize` (to handle displaying
  issue on IE).
- Add new class `k-Header__item--fixedSize` (to handle displaying issue on IE).
- Add listeners to `k-PhoneDropdown` to handle positioning.
- Update `k-UserMenu` to handle positioning when receiving new props.
- Remove styles on `k-PhoneDropdown`.

Fixes:
- Fix button icons alignment (for Firefox).
- Fix `k-Popover` display on IE.

## [v0.21.1] - 2016-11-15

Fixes:
- Do not iterate on NodeLists (for Safari).
- Fix `k-UserMenu` state when dropdown is closed.
- Fix SearchInput SVG alignment (for Safari).
- Fix `k-PhoneDropdown` state when dropdown is closed.
- Force font-family on `k-Tour__popover`.
- Fix box-sizing on `k-Button__icon`.

## [v0.21.0] - 2016-11-15

Features:
- Add `box-sizing` declaration in `k-Tour`.
- Add `font-family` declaration in `k-Select`.
- Hide `k-UserMenu` arrow on xxs media query.

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
