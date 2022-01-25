# Kitten

Kitten is a components library based on Sass and React. It provides mixins to
create flexible components based on your own brand elements (colors, fonts,
typographic scale, etc.).

You can check out Kitten's components on
[Storybook](https://kisskissbankbank.github.io/kitten/).

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

### CSS utilities

CSS Utilities are classe that can be used for very basic styling. These utility classes *are used by React Components*. Kitten will not work properly without these utility classes.

```scss
@import '@kisskissbankbank/kitten/src/stylesheets/utilities';
```

[Look at the doc to know if/when to use it.](https://kitten.vercel.app/?path=/story/documentation-usage-using-utilities--page)

### React components

You can render React components directly in your js bundle:

```js
import { SimpleCard } from '@kisskissbankbank/kitten'

ReactDOM.render(
  <SimpleCard {...props} />,
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

The page http://localhost:6006 will be opened automatically.

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
- Run the command `bin/release NEW_VERSION`
  (replace `NEW_VERSION` with your version number)
- Follow the link to create the pull request on Github.

### Release!

Once the pull request is accepted:

- Merge the pull request into master.
- Delete the release branch.
- Run this command: `bin/publish with-storybook`
- Announce the release on KissKissBankBank's #kit-ui Slack channel 
  with the related CHANGELOG when the new release is ready to be used.
