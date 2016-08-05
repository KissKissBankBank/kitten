# kitten

`kitten` is a components library for Sass. It provides mixins to create
flexible components based on your own brand elements
(colors, fonts, typographic scale, etc.).

![Kittens](http://i.imgur.com/EbGhfDH.gif)


## Dependencies

- Ruby 2.2.4
- Bundler (`gem install bundler`)
- Node > 0.12 (for stylelint)


## Installation

### Ruby on Rails

Add this line to your application's Gemfile:

```ruby
gem 'kitten'

# SASS extensions for kitten
source 'https://rails-assets.org' do
  gem 'rails-assets-modular-scale'
end
```

And then execute:

    $ bundle

### Npm

Install the dependency:
```
npm install kitten --save-dev
```

`kitten` module exposes load paths that Sass needs to resolve correcly
`@import`:
```js
var kitten = require('kitten');

// => {
//   loadPath: …,
//   dependenciesPaths: {
//     sassyMaps: …,
//     modularscale: …
//   }
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
    loadPath: [
      kitten.loadPath,
      kitten.dependenciesPaths.sassyMaps,
      kitten.dependenciesPaths.modularscale
    ]
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
    includePaths: [
      kitten.loadPath,
      kitten.dependenciesPaths.sassyMaps,
      kitten.dependenciesPaths.modularscale
    ]
  }
}
```

You can find more documentation on [how to use webpack for
stylesheets](http://webpack.github.io/docs/stylesheets.html).

## Usage

Import `kitten` in your main Sass file:

```sass
@import 'kitten';
```

Define your font families:

```sass
$k-fonts: (
  source-sans: (
    family: ("Source Sans Pro", Helvetica, Arial, sans-serif),
    weight: 400
  ),
  source-sans-semi-bold: (
    family: ("Source Sans Pro", Helvetica, Arial, sans-serif),
    weight: 600
  )
);
```

Include the component your want to use in your application:

```sass
@include k-MyComponent;
```


## Development

#### Style guide

Check out the [style guide documentation](../../wiki/Style-guide)
to start creating new components!

#### Installation

```sh
$ bundle                 # install gem dependencies
$ npm install --only=dev # install node dependencies
```

#### Style checker

```sh
$ npm run stylelint
```

#### Ruby specs

```sh
$ bundle exec rake
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

- Create a PR with a clear title.
- Tag it with the right label (`Work in progress`, `Needs reviews`, etc.).

For admin collaborators, before merging the PR:
- Add the PR to the related milestone.
- Update the CHANGELOG.md under the section `[unreleased]`.
- Use `Squash and merge` option to merge the PR.

## Release

To release a new version:
- Update the version in `lib/kitten/version.rb` and `package.json`.
- Update the `CHANGELOG.md` with your new features and fixes.

- Run this command:
```
bundle exec rake kitten_release
```

This last command will:
- generate the gem package;
- generate the SassDoc;
- commit `lib/kitten/version.rb`, `CHANGELOG.md` and
  `public/sassdoc/index.html`;
- tag the version;
- push to Github.

### Gem
Then, you can upload the new `pkg/kitten-*.gem` build to Gemfury.

### Node module
Configure your `.npmrc` to [set our private registry on
Gemfury](https://gemfury.com/help/npm-registry) to be able to
push a new version of `kitten` node module:

```
npm config set registry https://npm.fury.io/bob/
```

This command will set your default registry in your `.npmrc`.

```
npm login
```

This command will set your authentication token in your `.npmrc`.

Then, you can publish the new module:
```
npm publish
```
