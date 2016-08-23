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
    # This option is used to pass an entry point different from `application` to
    # the `webpack_asset_paths` helper.
    attr_accessor :webpack_entry_point

    # This option is used when you need to provide a custom asset host (eg.
    # CDN url) that will be used in production.
    attr_accessor :asset_host

    def initialize
      self.webpack_entry_point = 'application'
    end
  end
end
