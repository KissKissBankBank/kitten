# Engine configuration.
module Kitten
  class << self
    attr_writer :configuration

    def configuration
      @configuration ||= Configuration.new
    end

    def configure
      yield(configuration)
    end
  end

  # Configuration variables and defaults.
  class Configuration
    attr_accessor :styleguide_stylesheet_path
    attr_accessor :webpack

    def initialize
      self.styleguide_stylesheet_path = 'kitten/styleguide/defaults/application'
      self.webpack = false
    end
  end
end
