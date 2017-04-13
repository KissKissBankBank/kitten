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
        },
        {
          id: 'typography',
          label: 'Typography',
          components: [
            {
              path: 'components/typography/title',
              examples_display: :vertical
            },
            {
              path: 'components/typography/paragraph',
              examples_display: :vertical
            },
          ]
        },
        {
          id: 'buttons',
          label: 'Buttons',
          components: [
            {
              path: 'components/buttons/button'
            },
            {
              path: 'components/buttons/button-icon'
            },
            {
              path: 'components/buttons/button-with-icon-words'
            },
            {
              path: 'components/buttons/button-image'
            },
            {
              path: 'components/buttons/button-image-with-text'
            },
            {
              path: 'components/buttons/tag-button'
            },
            {
              path: 'components/buttons/payment-button'
            },
            {
              path: 'components/buttons/button-with-badge'
            },
          ]
        },
        {
          id: 'form-elements',
          label: 'Form elements',
          components: [
            {
              path: 'components/form/checkbox',
              examples_display: :vertical
            },
            {
              path: 'components/form/radio-button',
              examples_display: :vertical
            },
            {
              path: 'components/form/text-input',
              examples_display: :vertical
            },
            {
              path: 'components/form/text-input-with-button',
              examples_display: :vertical
            },
            {
              path: 'components/form/text-input-with-limit',
              examples_display: :vertical
            },
            {
              path: 'components/form/text-input-with-unit',
              examples_display: :vertical
            },
            {
              path: 'components/form/location-input',
              examples_display: :vertical
            },
            {
              path: 'components/form/select',
              examples_display: :vertical
            },
            {
              path: 'components/form/switch'
            },
            {
              path: 'components/form/slider',
              examples_display: :vertical
            },
            {
              path: 'components/form/search-input'
            },
            {
              path: 'components/form/form-actions',
              examples_display: :vertical
            },
            {
              path: 'components/form/form-row',
              examples_display: :vertical
            },
            {
              path: 'components/form/form-info',
              examples_display: :vertical
            },
            {
              path: 'components/form/form-amount-and-currency',
              examples_display: :vertical
            },
            {
              path: 'components/form/form-phone-number',
              examples_display: :vertical
            },
          ]
        },
        {
          id: 'navigation',
          label: 'Navigation',
          components: [
            {
              path: 'components/navigation/horizontal-nav'
            },
            {
              path: 'components/navigation/tab-bar',
              examples_display: :vertical
            },
            {
              path: 'components/navigation/user-menu',
              examples_display: :vertical
            },
            {
              path: 'components/navigation/platform-switch',
              examples_display: :vertical
            },
            {
              path: 'components/headers/header',
              examples_display: :vertical
            },
            {
              path: 'components/steppers/stepper',
              examples_display: :vertical
            },
            {
              path: 'components/dropdowns/dropdown'
            },
          ]
        },
        {
          id: 'notifications',
          label: 'Notification',
          components: [
            {
              path: 'components/notifications/alert',
              examples_display: :vertical
            },
            {
              path: 'components/notifications/badge'
            },
            {
              path: 'components/notifications/icon-badge'
            },
            {
              path: 'components/tours/tour'
            },
          ]
        },
        {
          id: 'crowdfunding',
          label: 'Crowdfunding',
          components: [
            {
              path: 'components/meters/progress',
              examples_display: :vertical
            },
            {
              path: 'components/simulators/loan-simulator',
              examples_display: :vertical
            },
            {
              path: 'components/simulators/simulator-result'
            },
            {
              path: 'components/teaser/teaser',
              examples_display: :vertical
            },
            {
              path: 'components/popovers/popover',
              examples_display: :vertical
            },
          ]
        },
        {
          id: 'presentation-elements',
          label: 'Presentation elements',
          components: [
            {
              path: 'components/cards/card',
              examples_display: :vertical
            },
            {
              path: 'components/heroes/hero',
              examples_display: :vertical
            },
            {
              path: 'components/press/press-quotes'
            },
            {
              path: 'components/testimonies/testimony'
            },
            {
              path: 'components/testimonies/testimony-list',
              examples_display: :vertical
            },
            {
              path: 'components/titles/title-with-actions',
              examples_display: :vertical
            },
            {
              path: 'components/lists/bullet-list',
              examples_display: :vertical
            },
            {
              path: 'components/links/external-rich-link'
            },
            {
              path: 'components/links/link-list'
            },
            {
              path: 'components/lists/bullet-list'
            },
            {
              path: 'components/lists/tag-list'
            },
          ]
        },
        {
          id: 'contextual-content',
          label: 'Contextual content',
          components: [
            {
              path: 'components/box/information-box'
            },
            {
              path: 'components/box/link-box'
            },
            {
              path: 'components/box/link-box-with-icon'
            },
            {
              path: 'components/tooltips/tooltip'
            },
            {
              path: 'components/tooltips/static-tooltip',
              examples_display: :vertical
            },
          ]
        },
        {
          id: 'layout',
          label: 'Layout',
          components: [
            {
              path: 'components/layout/line'
            },
            {
              path: 'components/form/form-actions',
              examples_display: :vertical
            },
            {
              path: 'components/form/form-row',
              examples_display: :vertical
            },
            {
              path: 'components/layout/separator',
              examples_display: :vertical
            },
          ]
        }
      ]
    end
  end
end
