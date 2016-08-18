source 'https://rubygems.org'

gemspec

# To silence the bundler warning about having multiple sources, we need to use
# a block and repeat assets used in the gemspec.
# Issue: https://github.com/bundler/bundler/issues/3576
source 'https://rails-assets.org' do
  gem 'rails-assets-modular-scale'
end

# Ruby code-style checker
gem 'rubocop', require: false


# Gems for the dummy app
# ======================

# Front assets management
gem 'webpack-rails', '~> 0.9.8'

# Webpack-dev-server and rails server management
# through a Procfile
gem 'foreman'

# JavaScript minification
gem 'uglifier'
