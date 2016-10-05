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
    # This option is used to pass an output bundle name different from
    # `application-bundle` for hot reloading.
    attr_accessor :webpack_output_bundle

    def initialize
      self.webpack_output_bundle = 'application-bundle'
    end
  end
end
