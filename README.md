# Kitten

Kitten is a components library based on Sass and React. It provides mixins to
create flexible components based on your own brand elements (colors, fonts,
typographic scale, etc.).

You can check out Kitten's components on
[KissKissBankBank's styleguide](https://styleguide.kisskissbankbank.com/).

It is an npm module coupled with a Rails engine that provides an integrated
styleguide. It should eventually be separated into two different repositories.

![Kittens](http://i.imgur.com/EbGhfDH.gif)


## Dependencies

- Ruby 2.2.4
- Bundler (`gem install bundler`)
- Node ~> 6.0

## Table of content
- [Installation](#installation)
  - [Npm](#npm)
  - [Rails engine](#rails-engine)
- [Usage](#usage)
  - [CSS components](#css-components)
  - [React components](#react-components)
  - [Style Guide](#style-guide)
- [Development](#development)
- [Contributing](#contributing)
- [Release](#release)

## Installation

You can choose to use the npm module only or with the Rails engine.

### Npm

```sh
npm install kitten-components --save-dev
```

### Rails engine

Add this line to your application's Gemfile:

```ruby
# Style guide
gem 'kitten'
```

And these routes to your `routes.rb`:

```ruby
mount Kitten::Engine, at: '/kitten' if Rails.env.development?
```

You can then run `bundle` and restart your server.

`kitten` is designed to serve assets with [Webpack](webpack.github.io)
through [React on Rails](https://github.com/shakacode/react_on_rails).

**For more detailed instructions**, see [Rails webpack
configuration](docs/installation/rails-webpack-configuration.md).

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
const yourLoanSimulatorProps = {}

ReactDOM.render(
  React.createElement(LoanSimulator, yourLoanSimulatorProps),
  document.getElementById('loan-simulator')
)
```

Or, use [React on
Rails](https://github.com/shakacode/react_on_rails#including-your-react-component-in-your-rails-views)
view helper in your `.erb` file:

```erb
<%= react_component('LoanSimulator', props: your_loan_simulator_props) %>
```

### Style guide

Kitten provides a styleguide interface through a Rails engine.
You can run see it in your browser by downloading kitten and launching
the dummy app or by installing the style guide in your Rails app.

The engine provides some configuration options that can be defined in
`config/initializers/kitten.rb`:

- **webpack_output_bundle**: This option is used to pass an output bundle name
  for hot reloading. By default, it is set to `application-bundle`.

Example configuration:

```rb
Kitten.configure do |config|
  config.webpack_output_bundle = 'your-custom-bundle'
end
```

## Development

### Components

Check out the [guidelines](../../wiki/Contribution-guidelines) to start
creating new components!

### Install

```sh
$ bin/kitten install
```

### Dummy style guide

To launch the style guide on the dummy app with hot-reloading:

```sh
$ foreman start
```

Then visit http://localhost:3003

To launch the style guide on the dummy app without hot-reloading:

```sh
$ bin/kitten start
```

Then visit http://localhost:3000


To stop the style guide on the dummy app:

```sh
$ bin/kitten stop
```


To check wether the dummy app is running or not:

```sh
$ bin/kitten status
```


To tail the dummy app logs in real time:

```sh
$ bin/kitten log
```

Hit `Ctrl+C` to stop the tail.

To share the dummy app with production settings (to share via ngrok for
example), you can compile the assets and serve a production server:

```sh
$ bin/rake staging:assets:precompile
$ REACT_ON_RAILS_ENV= rails s -b 0.0.0.0
```

### Cleanup

To cleanup installed modules:

```sh
bin/kitten cleanup
```

### Style checker

```sh
$ yarn stylelint
```

### Ruby specs

```sh
$ bundle exec rake
```

### SassDoc

We use [SassDoc](http://sassdoc.com/) to generate documentation from our
components comments.

Generate the documentation:

```sh
$ bundle exec rake sassdoc
# OR
$ yarn sassdoc
```

The documentation is accessible on development environment: `/kitten/sassdoc`.

### Component testing

To launch the JS tests:

```sh
$ bin/kitten test

# OR

$ bin/test {PATH}/{FILE}.test.js
```

Check out the [guidelines](../../wiki/Component-testing) to know how to test kitten.

## Contributing

To contribute code:

- Create a pull request on GitHub with a clear title in English.
- [Tag it](https://github.com/KissKissBankBank/kitten/wiki/Contribution-guidelines#labels-on-pull-request)
  with the right labels: `Needs reviews`, `Needs testing` or `Work in progress`.
- Don't forget to update the `CHANGELOG.md` under the `[unreleased]` section
  with the following syntax:

  ```
  - Breaking change: a breaking change.
  - Feature: a new feature.
  - Fix: a fix.
  ```
- Update the `KARL_CHANGELOG.md` under the [unreleased] section if you added some
  updates to the styleguide.

To merge code into master:

- Make sure the code has been reviewed by someone.
- Make sure it has been tested.
- Merge using `Squash and merge` on GitHub.
- Delete the branch.

## Static Dump

To build an on disk static file mirror:

```sh
$ bin/kitten buildstatic
```
- files are located in build/


## Release

**Only for [KissKissBankBank](https://github.com/KissKissBankBank)
collaborators**

### Login

If this is your first release, start by saving your npm credentials in
your `~/.npmrc` by calling:

```sh
$ yarn login
```

### Prepare the release pull request

- Pull `master`.
- Update the `CHANGELOG.md` file:
  * Update the version following the [Semantic Versioning](http://semver.org/).
  * Add a new `[unreleased]` section.
  * Check that [each merged
    PR](https://github.com/KissKissBankBank/kitten/commits/master)
    from the last release has an entry.
- Update the `KARL_CHANGELOG.md` file:
  * Update the version with the version of the library.
  * Add a new `[unreleased]` section.
- Update the version in `lib/kitten/version.rb`.
- Update the version in `package.json`.
- Run this command:

```sh
$ bundle exec rake kitten_prepare_release
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
$ bundle exec rake kitten_release
```

- Update
  [our private project kanban](https://github.com/orgs/KissKissBankBank/projects/5):
  move cards that are released from `done` column to `released` column.
