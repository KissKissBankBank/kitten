$LOAD_PATH.push File.expand_path('../lib', __FILE__)

require 'kitten/version'

Gem::Specification.new do |s|
  s.name        = 'kitten'
  s.version     = Kitten::VERSION
  s.authors     = ['KissKissBankBank']
  s.email       = ['dev@kisskissbankbank.com']
  s.homepage    = 'https://github.com/KissKissBankBank/kitten'
  s.summary     = "Components library for Sass"
  s.description = "kitten is a components library for Sass.
                   It provides mixins to create flexible components
                   based on your own brand elements."

  s.files         = Dir['{lib,assets}/**/*', 'Rakefile', 'README.md']
  s.require_paths = ['lib']

  s.metadata['allowed_push_host'] = 'https://gemfury.com'

  # This is a Rails engine, so, yeah.
  # < 5.0.0 because it has not been tested there yet.
  s.add_dependency 'rails', ['> 3.0.0', '< 5.0.0']

  # Sass dependencies.

  # >= 3.3.0 for Sass maps support
  s.add_runtime_dependency 'sass', '>= 3.3.0'

  s.add_runtime_dependency 'sass-rails'
  s.add_runtime_dependency 'sassy-maps', '~> 0.4.0'

  # Sass assets. Be sure to add them in the Gemfile and README.
  s.add_runtime_dependency 'rails-assets-modular-scale', '~> 2.1.0'

  s.add_development_dependency 'bundler', '~> 1.8'
  s.add_development_dependency 'rake',    '~> 10.0'
  s.add_development_dependency 'gemfury'

  s.add_development_dependency 'better_errors'
  s.add_development_dependency 'binding_of_caller'
  s.add_development_dependency 'pry'

  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'rspec-collection_matchers'
  s.add_development_dependency 'factory_girl_rails'

  s.add_development_dependency 'slim'

  s.add_development_dependency 'sqlite3'
end
