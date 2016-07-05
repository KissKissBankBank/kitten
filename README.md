# kitten

`kitten` is a components library for Sass. It provides mixins to create flexible components based on your own brand elements (colors, fonts, typographic scale, etc.).

![Kittens](http://i.imgur.com/EbGhfDH.gif)


## Dependencies

- Ruby 2.2.1
- Node > 0.12 (for stylelint)

## Installation

### For Ruby on Rails

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

## Usage

Import `kitten` in your main Sass file:

```sass
@import 'kitten';
```

Include the component your want to use in your application:

```sass
@include k-MyComponent;
```

## Development

#### Style guide

Check out the [style guide documentation](../../wiki/Style-guide) to start creating new components!

#### Installation

```sh
$ bundle      # install gem dependencies
$ npm install # install node dependencies
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

We use [SassDoc](http://sassdoc.com/) to generate documentation from our components comments.

Generate the documentation:

```sh
$ bundle exec rake sassdoc
```

The documentation is accessible on development environment: `/kitten/sassdoc`.
