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
    # This option is used to pass an array of output bundles different from
    # `application-bundle` for hot reloading.
    attr_accessor :webpack_output_bundles
    attr_accessor :default_categories

    def initialize
      self.webpack_output_bundles = ['application-bundle.js']
    end

    def default_categories
      [
        {
          id: 'grid-system',
          label: 'Grid system',
          components: [
            {
              path: 'components/grid/grid',
              examples_display: :vertical
            },
            {
              path: 'components/grid/vertical-grid',
              examples_display: :vertical
            },
            {
              path: 'components/grid/side-grid',
              examples_display: :vertical
            },
            {
              path: 'components/grid/row',
              examples_display: :vertical
            },
            {
              path: 'components/grid/single-column',
              examples_display: :vertical
            },
            {
              path: 'components/grid/lego-grid',
              examples_display: :vertical
            },
          ]
        }
      ]
    end
  end
end
