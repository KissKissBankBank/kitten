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
    attr_accessor :branding_categories
    attr_accessor :component_categories

    def initialize
      self.webpack_output_bundles = ['application-bundle.js']
    end

    def branding_categories
      [
        {
          id: 'brand-colors',
          label: 'Brand colors',
          components: [
            { path: 'branding/colors/common', name: 'Common' },
            { path: 'branding/colors/kisskissbankbank', name: 'kisskissbankbank' },
            { path: 'branding/colors/hellomerci', name: 'hellomerci' },
            { path: 'branding/colors/lendopolis', name: 'lendopolis' },
          ],
        }
      ]
    end

    def component_categories
      [
        {
          id: 'grid-system',
          label: 'Grid system',
          components: [
            'components/grid/grid',
            'components/grid/vertical-grid',
            'components/grid/side-grid',
            'components/grid/row',
            'components/grid/single-column',
            'components/grid/lego-grid',
          ],
        },
        {
          id: 'typography',
          label: 'Typography',
          components: [
            'components/typography/title',
            'components/typography/paragraph',
          ],
        },
        {
          id: 'buttons',
          label: 'Buttons',
          components: [
            'components/buttons/button',
            'components/buttons/icon-button',
            'components/buttons/icon-button-with-words',
            'components/buttons/image-button',
            'components/buttons/image-button-with-text',
            'components/buttons/tag-button',
            'components/buttons/payment-button',
            'components/buttons/button-with-badge',
          ],
        },
        {
          id: 'form-elements',
          label: 'Form elements',
          components: [
            'components/form/checkbox',
            'components/form/radio-button',
            'components/form/text-input',
            'components/form/text-input-with-button',
            'components/form/text-input-with-limit',
            'components/form/text-input-with-unit',
            'components/form/location-input',
            'components/form/select',
            'components/form/switch',
            'components/form/slider',
            'components/form/search-input',
            'components/form/form-actions',
            'components/form/form-row',
            'components/form/form-info',
            'components/form/form-amount-and-currency',
            'components/form/form-phone-number',
          ],
        },
        {
          id: 'navigation',
          label: 'Navigation',
          components: [
            'components/navigation/horizontal-nav',
            'components/navigation/tab-bar',
            'components/navigation/user-menu',
            'components/navigation/platform-switch',
            'components/headers/header',
            'components/steppers/stepper',
            'components/dropdowns/dropdown',
          ],
        },
        {
          id: 'notifications',
          label: 'Notification',
          components: [
            'components/notifications/alert',
            'components/notifications/badge',
            'components/notifications/icon-badge',
            'components/tours/tour',
          ],
        },
        {
          id: 'crowdfunding',
          label: 'Crowdfunding',
          components: [
            'components/meters/progress',
            'components/simulators/loan-simulator',
            'components/teaser/teaser',
            'components/popovers/popover',
          ],
        },
        {
          id: 'presentation-elements',
          label: 'Presentation elements',
          components: [
            'components/cards/card',
            'components/cards/project-card',
            'components/heroes/hero',
            'components/press/press-quotes',
            'components/testimonies/testimony',
            'components/testimonies/testimony-list',
            'components/titles/title-with-actions',
            'components/links/external-rich-link',
            'components/links/link-list',
            'components/lists/bullet-list',
            'components/lists/tag-list',
          ],
        },
        {
          id: 'contextual-content',
          label: 'Contextual content',
          components: [
            'components/box/information-box',
            'components/box/link-box',
            'components/box/link-box-with-icon',
            'components/tooltips/tooltip',
            'components/tooltips/static-tooltip',
          ],
        },
        {
          id: 'layout',
          label: 'Layout',
          components: [
            'components/layout/line',
            'components/form/form-actions',
            'components/form/form-row',
            'components/layout/separator',
          ],
        }
      ]
    end
  end
end
