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
            },
            {
              path: 'components/grid/vertical-grid',
            },
            {
              path: 'components/grid/side-grid',
            },
            {
              path: 'components/grid/row',
            },
            {
              path: 'components/grid/single-column',
            },
            {
              path: 'components/grid/lego-grid',
            },
          ],
        },
        {
          id: 'typography',
          label: 'Typography',
          components: [
            {
              path: 'components/typography/title',
            },
            {
              path: 'components/typography/paragraph',
            },
          ],
        },
        {
          id: 'buttons',
          label: 'Buttons',
          components: [
            {
              path: 'components/buttons/button',
            },
            {
              path: 'components/buttons/button-icon',
            },
            {
              path: 'components/buttons/button-with-icon-words',
            },
            {
              path: 'components/buttons/button-image',
            },
            {
              path: 'components/buttons/button-image-with-text',
            },
            {
              path: 'components/buttons/tag-button',
            },
            {
              path: 'components/buttons/payment-button',
            },
            {
              path: 'components/buttons/button-with-badge',
            },
          ],
        },
        {
          id: 'form-elements',
          label: 'Form elements',
          components: [
            {
              path: 'components/form/checkbox',
            },
            {
              path: 'components/form/radio-button',
            },
            {
              path: 'components/form/text-input',
            },
            {
              path: 'components/form/text-input-with-button',
            },
            {
              path: 'components/form/text-input-with-limit',
            },
            {
              path: 'components/form/text-input-with-unit',
            },
            {
              path: 'components/form/location-input',
            },
            {
              path: 'components/form/select',
            },
            {
              path: 'components/form/switch',
            },
            {
              path: 'components/form/slider',
            },
            {
              path: 'components/form/search-input',
            },
            {
              path: 'components/form/form-actions',
            },
            {
              path: 'components/form/form-row',
            },
            {
              path: 'components/form/form-info',
            },
            {
              path: 'components/form/form-amount-and-currency',
            },
            {
              path: 'components/form/form-phone-number',
            },
          ],
        },
        {
          id: 'navigation',
          label: 'Navigation',
          components: [
            {
              path: 'components/navigation/horizontal-nav',
            },
            {
              path: 'components/navigation/tab-bar',
            },
            {
              path: 'components/navigation/user-menu',
            },
            {
              path: 'components/navigation/platform-switch',
            },
            {
              path: 'components/headers/header',
            },
            {
              path: 'components/steppers/stepper',
            },
            {
              path: 'components/dropdowns/dropdown',
            },
          ],
        },
        {
          id: 'notifications',
          label: 'Notification',
          components: [
            {
              path: 'components/notifications/alert',
            },
            {
              path: 'components/notifications/badge',
            },
            {
              path: 'components/notifications/icon-badge',
            },
            {
              path: 'components/tours/tour',
            },
          ],
        },
        {
          id: 'crowdfunding',
          label: 'Crowdfunding',
          components: [
            {
              path: 'components/meters/progress',
            },
            {
              path: 'components/simulators/loan-simulator',
            },
            {
              path: 'components/simulators/simulator-result',
            },
            {
              path: 'components/teaser/teaser',
            },
            {
              path: 'components/popovers/popover',
            },
          ],
        },
        {
          id: 'presentation-elements',
          label: 'Presentation elements',
          components: [
            {
              path: 'components/cards/card',
            },
            {
              path: 'components/heroes/hero',
            },
            {
              path: 'components/press/press-quotes',
            },
            {
              path: 'components/testimonies/testimony',
            },
            {
              path: 'components/testimonies/testimony-list',
            },
            {
              path: 'components/titles/title-with-actions',
            },
            {
              path: 'components/links/external-rich-link',
            },
            {
              path: 'components/links/link-list',
            },
            {
              path: 'components/lists/bullet-list',
            },
            {
              path: 'components/lists/tag-list',
            },
          ],
        },
        {
          id: 'contextual-content',
          label: 'Contextual content',
          components: [
            {
              path: 'components/box/information-box',
            },
            {
              path: 'components/box/link-box',
            },
            {
              path: 'components/box/link-box-with-icon',
            },
            {
              path: 'components/tooltips/tooltip',
            },
            {
              path: 'components/tooltips/static-tooltip',
            },
          ],
        },
        {
          id: 'layout',
          label: 'Layout',
          components: [
            {
              path: 'components/layout/line',
            },
            {
              path: 'components/form/form-actions',
            },
            {
              path: 'components/form/form-row',
            },
            {
              path: 'components/layout/separator',
            },
          ],
        }
      ]
    end
  end
end
