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
    attr_accessor :app_stylesheet_path

    def initialize
      self.app_stylesheet_path = 'application'
    end
  end
end
