# kitten

`kitten` is a components library for Sass. It provides mixins to create
flexible components based on your own brand elements
(colors, fonts, typographic scale, etc.).

![Kittens](http://i.imgur.com/EbGhfDH.gif)


## Dependencies

- Ruby 2.2.4
- Bundler (`gem install bundler`)
- Node > 0.12 (for stylelint)
- Webpack


## Installation

### Ruby on Rails

Add this line to your application's Gemfile:

```ruby
gem 'kitten'
```

And then execute:

    $ bundle

To configure the engine you can add an initializer. Check out
`spec/dummy/config/initializers/kitten.rb` for an example.

To install routes for the style guide and sassdoc, add to your `routes.rb`:

```ruby
mount Kitten::Engine, at: '/kitten' if Rails.env.development?
```

Assets are served via Webpack, so you need to use webpack to compile or serve
the CSS.


### Npm

As the `kitten` and `sassy-map` modules are on a
[private registry on Gemfury](https://gemfury.com/help/npm-registry),
you have to setup your npm configuration aka your `.npmrc` to be able to
install all npm dependencies.

Set your default registry in your `.npmrc`:

```sh
npm config set registry https://npm-proxy.fury.io/bob/
```

Set your authentication token in your `.npmrc` by providing your Gemfury
username and password:

```sh
npm login
```

Install the dependency:

```sh
npm install kitten --save-dev
```

`kitten` module exposes an array of load paths that Sass needs to resolve
correcly `@import`:
```js
var kitten = require('kitten');

// => {
//   loadPaths: [
//     …,
//     …
//   ]
// }
```

#### Grunt

Once the module has been installed, if you use
[grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass), you can add
`kitten` and its dependencies to Sass load paths:

```js
var path = require('path');
var kitten = require('kitten');

grunt.initConfig({
  sass: {
    css: {
      files: {
        // your files
      }
    }
  },
  options: {
    loadPath: kitten.loadPaths
  }
}
```

#### Webpack

Once the module has beed installed, you can configure the `sass-loader` in your
`webpack.config.js`:

```js
var kitten = require('kitten');

var config = {
  entry: …,
  output: …,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['css'],
      },
      {
        test: /\.scss$/,
        loaders: ['css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: kitten.loadPaths
  }
}
```

You can find more documentation on [how to use webpack for
stylesheets](http://webpack.github.io/docs/stylesheets.html).

## Usage

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

### Ruby on Rails

`kitten` provides a styleguide interface. This feature is only available if you
are using the gem with Ruby on Rails.

The styleguide css is served by webpack through
[webpack-rails](https://github.com/mipearson/webpack-rails). By default, the
`webpack_asset_paths` helper is called with the entry point `application`.

#### Configuration

`kitten` provides some configuration options that can be defined in
`config/initializers/kitten.rb`:
- `webpack_entry_point`: if defined, it will be passed as webpack entry point to
the `webpack_asset_paths` helper;

- `asset_host`: if defined, it will prepend a custom host to the asset path in
production (eg. if you need to serve your assets through a CDN).

```rb
Kitten.configure do |config|
  config.webpack_entry_point = 'my_custom_entry_point'
  config.asset_host = 'https://my_custom_asset_host'
end
```

Check out the [documentation](../../wiki/Styleguide) to setup the styleguide directly in
your application and with your own brand elements.

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
$ rake
```

### Dummy style guide

To launch the style guide on the dummy app:

```sh
$ cd spec/dummy
$ bundle
$ npm install
$ foreman start
```

Then visit http://localhost:3000

To share the dummy app with production settings (to share via ngrok for
example), you can compile the assets and serve a production server:

```sh
$ bin/rake assets:precompile
$ node_modules/webpack/bin/webpack.js --config config/webpack.config.js
$ RAILS_ENV=production bin/rails s
```

To cleanup the compiled files, run `rm -fr public`.

### Style checker

```sh
$ npm run --silent stylelint
```

### Ruby specs

```sh
$ bundle exec rake
```

### Style Guide

Inside the `spec/dummy` folder, make sure you have Npm access to Gemfury
(see higher), then:

```sh
$ bundle
$ npm install
```

The `kitten` node module can be tested iteratively without having to
continually rebuild. We use `npm-link` to create symlinks from the package
folder to `node_modules/kitten`.
This is automatically executed every time you run `npm install`.


Then to run the server:

```sh
$ foreman start
```

#### Generate SassDoc

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
- Update the version in `CHANGELOG.md` and add a new `[unreleased]` section.

- Run this command:

```sh
$ bundle exec rake kitten_release
```

This last command will:

- generate the gem package;
- generate the SassDoc;
- commit `lib/kitten/version.rb`, `CHANGELOG.md` and
  `public/sassdoc/index.html`;
- tag the version;
- push to Github.

### Gemfury

As the `kitten` module is on a [private registry on
Gemfury](https://gemfury.com/help/npm-registry), you have to make sure you have
publication rights on the Gemfury repository, then:

You can upload the new `pkg/kitten-*.gem` build to Gemfury.

And:

```
npm publish
```

### Github

You can now rename the "Next release" milestone to "Release vX.X.X" and close
it. Finally, make sure you create a new milestone called "Next release".
