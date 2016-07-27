require 'kitten/version'
require 'kitten/engine'
require 'sass-rails'
require 'sassy-maps'
require 'rails-assets-modular-scale'

# Engine configuration.
module Kitten
  class << self
    def load
      configure_sass
    end

    def gem_path
      @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'assets'
    end

    def stylesheets_path
      File.join assets_path, 'stylesheets'
    end

    def modular_scale_path
      # As modular-scale is added through rails-assets, the path of the gem
      # has to be added manually to the Sass load paths.
      ::RailsAssetsModularScale.gem_path.join('app/assets/stylesheets/modular-scale')
    end

    private

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path
      ::Sass.load_paths << modular_scale_path
    end
  end
end

Kitten.load
