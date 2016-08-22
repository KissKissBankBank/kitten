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
    attr_accessor :webpack_entry_point
    attr_accessor :asset_host

    def initialize
      self.webpack_entry_point = 'application'
    end
  end
end
