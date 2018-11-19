$LOAD_PATH.push File.expand_path('../lib', __FILE__)

require 'kitten/version'

Gem::Specification.new do |s|
  s.name        = 'kitten'
  s.version     = Kitten::VERSION
  s.authors     = ['KissKissBankBank']
  s.email       = ['dev@kisskissbankbank.com']
  s.homepage    = 'https://github.com/KissKissBankBank/kitten'
  s.summary     = 'Components library for Sass'
  s.description = 'kitten is a components library for Sass. ' \
                   'It provides mixins to create flexible components ' \
                   'based on your own brand elements.'

  s.files         = Dir['{app,assets,config,lib,public,vendor}/**/*', 'Rakefile', 'README.md']
  s.require_paths = ['lib']

  s.metadata['allowed_push_host'] = 'https://gemfury.com'

  # This is a Rails engine.
  # < 5.0.0 because it has not been tested there yet.
  s.add_dependency 'railties', ['> 3.0.0', '< 5.0.0']

  # Render react components easily on client and server side.
  s.add_dependency 'react_on_rails', '11.1.8'

  # Render react components with execjs on server side by react_on_rails.
  s.add_dependency 'therubyracer'

  s.add_development_dependency 'bundler', '~> 1.8'
  s.add_development_dependency 'rake',    '~> 10.0'
  s.add_development_dependency 'gemfury'

  s.add_development_dependency 'better_errors'
  s.add_development_dependency 'binding_of_caller'
  s.add_development_dependency 'pry'

  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'factory_girl_rails'

  s.add_development_dependency 'sqlite3'
end
