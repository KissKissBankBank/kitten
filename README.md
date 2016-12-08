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
  - [Rails engine](#rails-engine-1)
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
gem 'kitten'
```

Then execute:

    $ bundle

Install routes for the style guide and sassdoc, add to your `routes.rb`:

```ruby
mount Kitten::Engine, at: '/kitten' if Rails.env.development?
```

`kitten`'s' Rails engine is designed to serve assets with
[Webpack](webpack.github.io) through
[React on Rails](https://github.com/shakacode/react_on_rails).

**For more detailed instructions**, see [Rails webpack
configuration](docs/installation/rails-webpack-configuration.md).

## Usage

### CSS components
Import `kitten` in your main Sass file:

```scss
@import 'kitten';
```

Define your font families and typography settings:

```scss
$k-fonts: (
  source-sans: (
    family: ("Source Sans Pro", Helvetica, Arial, sans-serif),
    weight: 400,
  ),
);

$k-typography: k-typography-definition((
  root: 16px,
  font-size: 1rem,
  font-weight: 400,
  line-height: 1.5rem,
  scale-multiplier: $major-second,
));
```

Include the component your want to use in your application:

```scss
@import 'kitten/atoms/buttons/button';
@include k-Button((
  font: 'source-sans',
  …
));
```

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
<%= react_component('LoanSimulator', props: @your_loan_simulator_props) %>
```

### Rails engine

`kitten` provides a styleguide interface through a Rails engine. This feature is
only available if you are using the gem with Ruby on Rails.

#### Configuration

```rb
Kitten.configure do |config|
  config.webpack_output_bundle = 'your-custom-bundle'
end
```

`kitten` provides some configuration options that can be defined in
`config/initializers/kitten.rb`:

- **webpack_output_bundle**: This option is used to pass an output bundle name
  for hot reloading. By default, it is set to `application-bundle`.

## Development

### Components

Check out the [guidelines](../../wiki/Contribution-guidelines) to start
creating new components!

### Installation

Make sure Npm has access to Gemfury (see higher), then:

Then, run:

```sh
$ bundle                 # install gem dependencies
$ npm install --only=dev # install node dependencies
$ bundle exec rake
```

### Dummy style guide

To launch the style guide on the dummy app:

```sh
$ cd spec/dummy
$ bin/install
$ foreman start
```

Then visit http://localhost:3000

To share the dummy app with production settings (to share via ngrok for
example), you can compile the assets and serve a production server:

```sh
$ bin/rake staging:assets:precompile
$ REACT_ON_RAILS_ENV= rails s -b 0.0.0.0
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

## Contributing

- Create a PR with a clear title in English.
- Tag it with the right label (`Work in progress`, `Needs reviews`, etc.).
- Don't forget to update the `CHANGELOG.md` under the `[unreleased]` section

For admin collaborators, before merging the PR:

- Add the PR to the "Next release" milestone.
- Use `Squash and merge` option to merge the PR.

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

[More
information](https://docs.npmjs.com/getting-started/publishing-npm-packages)
on publishing npm packages.

### Gemfury

You can upload the new `pkg/kitten-*.gem` build to our private Gemfury registry.
