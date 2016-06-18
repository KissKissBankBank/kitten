# kitten

`kitten` is a components library for Sass. It provides mixins to create flexible components based on your own brand elements (colors, fonts, typographic scale, etc.).

![Kittens](http://i.imgur.com/EbGhfDH.gif)

## Installation

### For Ruby on Rails

Add this line to your application's Gemfile:

```ruby
gem 'kitten'
```
And then execute:

    $ bundle

## Usage

Import `kitten` in your main Sass file:

```sass
@import 'kitten';
```

Include the component your want to use on your application:
```sass
@include k-MyComponent;
```

## Development

Check out the [style guide documentation](../../wiki/Style-guide) to start creating a new component!

