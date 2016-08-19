# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]
Breaking changes:
- Requires applications to use webpack to compile assets.
- Requires a global `$k-typography: k-typography-definition((…))` instead of
  passing typography styles in mixins.
- Move all styleguide stylesheets into dummy app for testing.
- Remove components from `kitten` import.
- Change some styles for `k-ButtonImage` and `k-ButtonIcon`.
- If you are serving the engine in your routes make sure you add
  `if Rails.env.development?` if you don't want to serve it in production.

New features:
- Enable configuration on styleguide stylesheet path.
- Add webpack to manage `kitten` scss assets in dummy app.
- Add new component: `header` organism
- Add new component: `testimonies` molecule
- /kitten/playground route in the styleguide to test your styles in development
- Access components directly by removing the `#` in the styleguide in URL
- Add new component: `tabbar` molecule.
- Add new component: `user-menu` molecule.
- Add new component: `text-input` atom.
- Add new component: `search-input` molecule.
- Add new component: `platform-switch` molecule.
- Ignore playground changes in git (requires to type `rake` in development)
- Add new component: `hero` molecule.
- Add new component: `card` molecule.
- Add image assets management in dummy webpack configuration.

Fix:
- Loan Simulator does not show Infinty durations when pressing enter.

## [v0.4.0] - 2016-08-04
Minor updates:
- Update `@group` property in SassDoc comments.
- Update npm module exposed variables: it now returns an array of `loadPaths`
  instead of a function.

New features:
- Add new component: `horizontal-nav` molecule.
- Add javascript on `loan-simulator` organism with React.
- Add new css structure on styleguide.

## [v0.3.0] - 2016-08-01
New features:
- Add new component: `loan-simulator` organism.
- Add new validation system.
- Add styleguide routing, controllers and views.
- Update @import strategy.
- Add npm module configuration.

Fix:
- Remove [Slim](http://slim-lang.com/) templating.

## [v0.2.0] - 2016-07-20

New features:
- Add new component: `button` atom.
- Add `.scss` samples to make a new component creation easier.

Fix:
- Update release task to match with `master` branch.


## [v0.1.0] - 2016-07-05

New features:

- Add Sass schema (inspired from JSON schema).
- Add typography mixins and helpers.
- Add dummy application to test the library.
- Add SassDoc.
