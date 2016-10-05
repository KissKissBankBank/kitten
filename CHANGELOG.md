# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

Breaking changes:
- Remove `k-GridDuo` molecule.
- Use `therubyracer` instead of `mini_racer`.

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
