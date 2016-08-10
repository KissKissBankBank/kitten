source 'https://rubygems.org'

gemspec

# To silence the bundler warning about having multiple sources, we need to use
# a block and repeat assets used in the gemspec.
# Issue: https://github.com/bundler/bundler/issues/3576
source 'https://rails-assets.org' do
  gem 'rails-assets-modular-scale'
end

gem 'rubocop', require: false

# Front assets management for dummy app
gem 'webpack-rails', '~> 0.9.8'

# Webpack-dev-server and rails server management
# through a Procfile
gem 'foreman'
