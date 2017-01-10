# kitten

`kitten` is a components library based on Sass and React. It provides mixins to
create flexible components based on your own brand elements (colors, fonts,
typographic scale, etc.).

It is an npm module coupled with a Rails engine that provides an integrated
styleguide. It should eventually be separated into two different repositories.

![Kittens](http://i.imgur.com/EbGhfDH.gif)


## Dependencies

- Ruby 2.2.4
- Bundler (`gem install bundler`)
- Node ~> 6.0
- Npm >= 3.0

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

`kitten` provides a styleguide interface through a Rails engine.
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
$ bin/install
```

### Dummy style guide

To launch the style guide on the dummy app:

```sh
$ cd spec/dummy
$ foreman start
```

Then visit http://localhost:3000

To share the dummy app with production settings (to share via ngrok for
example), you can compile the assets and serve a production server:

```sh
$ bin/rake staging:assets:precompile
$ REACT_ON_RAILS_ENV= rails s -b 0.0.0.0
```

### Cleanup

To cleanup installed modules:

```sh
bin/cleanup
```

### Style checker

```sh
$ npm run --silent stylelint
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
$ npm run sassdoc
```

The documentation is accessible on development environment: `/kitten/sassdoc`.

### Component testing

To launch the JS tests:

```sh
bin/test
```

Check out the [guidelines](../../kitten/wiki/Component-testing) to know how to test kitten.

## Contributing

To contribute code:

- Create a pull request on Github with a clear title in English.
- Tag it with the right labels: `Needs reviews`, `Needs testing` or `Work in progress`.
- Don't forget to update the `CHANGELOG.md` under the `[unreleased]` section.

To merge code into master:

- Make sure the code has been reviewed by someone.
- Make sure it has been tested.
- Use the `Squash and merge` option on Github.

## Release

To release a new version:

- Pull `master`
- Update the version in `lib/kitten/version.rb`.
- Update the version in `package.json`.
- Update the `CHANGELOG.md` file:
  * Update the version.
  * Add a new `[unreleased]` section.
  * Check that [each merged
    PR](https://github.com/KissKissBankBank/kitten/commits/master)
    from the last release has an entry.

- Run this command:

```sh
$ bundle exec rake kitten_release
```

### Npm

Save your credentials in your `.npmrc`:
```
npm adduser
```

Then:

```
npm publish
```

### Github

**Only for [KissKissBankBank](https://github.com/KissKissBankBank)
collaborators**

Update
[our private project kanban](https://github.com/orgs/KissKissBankBank/projects/5):
move cards that are released from `done` column to `released` column.
