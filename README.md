# Kitten

Kitten is a components library based on Sass and React. It provides mixins to
create flexible components based on your own brand elements (colors, fonts,
typographic scale, etc.).

You can check out Kitten's components on
[KissKissBankBank's styleguide](https://styleguide.kisskissbankbank.com/)
and on [Storybook](https://kisskissbankbank.github.io/kitten/).

![Kittens](http://i.imgur.com/EbGhfDH.gif)

## Dependencies

- react >= 16.8.x
- react-dom >= 16.8.x
- @babel/polyfill if you support IE10 and previous versions

## Table of content

- [Installation](#installation)
- [Usage](#usage)
  - [CSS components](#css-components)
  - [React components](#react-components)
- [Development](#development)
- [Contributing](#contributing)
- [Release](#release)

## Installation

```sh
$ npm install @kisskissbankbank/kitten
```

## Usage

### CSS components

Import `kitten` and the components your want to use in your application:

```scss
@import 'kitten';

@include k-Button;
```

You can define your own font families, typography settings and colors by overriding the
the `$k-fonts`, `$k-typography` and `$k-colors` options. Check out the
[default config](https://github.com/KissKissBankBank/kitten/blob/master/assets/stylesheets/kitten/_default-config.scss)
for an example.

### React components

You can render React components directly in your js bundle:

```js
import { SimpleCard } from '@kisskissbankbank/kitten/src/components/cards/simple-card'

ReactDOM.render(
  <SimpleCard ...props/>,
  document.getElementById('main')
)
```

## Development

### Components

Check out the [guidelines](../../wiki/Contribution-guidelines) to start
creating new components!

### Install

```sh
$ bin/install
```

### Cleanup

To cleanup installed modules:

```sh
bin/cleanup
```

### Storybook

To launch storybook locally:

```sh
npm run storybook
```

Then visit http://localhost:6006

To release `Storybook` simply run this command:

```sh
npm run deploy-storybook
```

### Styleguide

To launch the styleguide using webpack:

```sh
$ npm run styleguide:start
```

Then visit http://localhost:3000

#### Production settings

To share the styleguide with production settings (to share via ngrok for
example), you can compile the assets:

```sh
$ npm run styleguide:build
```

It will create a `build` folder with static files. You can serve it as you wish


### Component testing

To launch the JS tests:

```sh
$ npm test
```

Check out the [guidelines](../../wiki/Component-testing) to know how to test kitten.

## Contributing

To contribute code:

- Create a pull request on GitHub with a clear title in English.
- [Tag it](https://github.com/KissKissBankBank/kitten/wiki/Contribution-guidelines#labels-on-pull-request)
  with the right labels: `Needs reviews`, `Needs testing` or `Work in progress`.
- Don't forget to update the `CHANGELOG.md` under the `[unreleased]` section
  with the following syntax:

  ```md
  - Breaking change: a breaking change.
  - Feature: a new feature.
  - Fix: a fix.
  ```

To merge code into master:

- Make sure the code has been reviewed by someone.
- Make sure it has been tested.
- Merge using `Squash and merge` on GitHub.
- Delete the branch.

## Release

**Only for [KissKissBankBank](https://github.com/KissKissBankBank)
collaborators**

### Login

If this is your first release, start by saving your npm credentials in
your `~/.npmrc` by calling:

```sh
$ npm login
```

### Prepare the release pull request

- Pull `master`.
- Update the `CHANGELOG.md` file:
  * Update the version following the [Semantic Versioning](http://semver.org/).
  * Add a new `[unreleased]` section.
  * Check that [each merged
    PR](https://github.com/KissKissBankBank/kitten/commits/master)
    from the last release has an entry.
- Update the `package.json` file:
  * Update the version with the version of the library.
- Update the `package-lock.json` file:
  * Update the version with the version of the library.
- Run this command:

```sh
bin/release NEW_VERSION
```

- Follow the link to create the pull request on Github.
- Announce the release on KissKissBankBank's #kit-ui Slack channel with the
  related CHANGELOG.

### Release!

Once the pull request is accepted:

- Merge the pull request into master.
- Delete the release branch.
- Run this command:

```sh
bin/publish
```

- Update
  [our private project kanban](https://github.com/orgs/KissKissBankBank/projects/5):
  move cards that are released from `done` column to `released` column.
