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
            { path: 'branding/colors/kisskissbankbank', name: 'KissKissBankBank' },
            { path: 'branding/colors/hellomerci', name: 'hellomerci' },
            { path: 'branding/colors/lendopolis', name: 'LENDOPOLIS' },
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
            { path: 'components/grid/grid', name: 'Grid' },
            { path: 'components/grid/vertical-grid', name: 'Vertical grid' },
            { path: 'components/grid/side-grid', name: 'Slide grid' },
            { path: 'components/grid/row', name: 'Row' },
            { path: 'components/grid/single-column', name: 'Single column' },
            { path: 'components/grid/lego-grid', name: 'Lego grid' },
          ],
        },
        {
          id: 'typography',
          label: 'Typography',
          components: [
            { path: 'components/typography/title', name: 'Title' },
            { path: 'components/typography/paragraph', name: 'Paragraph' },
          ],
        },
        {
          id: 'buttons',
          label: 'Buttons',
          components: [
            { path: 'components/buttons/button', name: 'Button' },
            { path: 'components/buttons/icon-button', name: 'Icon button' },
            { path: 'components/buttons/icon-button-with-words', name: 'Icon button with words' },
            { path: 'components/buttons/image-button', name: 'Image button' },
            { path: 'components/buttons/image-button-with-text', name: 'Image button with text' },
            { path: 'components/buttons/tag-button', name: 'Tag button' },
            { path: 'components/buttons/payment-button', name: 'Payment button' },
            { path: 'components/buttons/button-with-badge', name: 'Button with badge' },
          ],
        },
        {
          id: 'form-elements',
          label: 'Form elements',
          components: [
            { path: 'components/form/checkbox', name: 'Checkbox' },
            { path: 'components/form/radio-button', name: 'Radio button' },
            { path: 'components/form/text-input', name: 'Text input' },
            { path: 'components/form/text-input-with-button', name: 'Text input with button' },
            { path: 'components/form/text-input-with-limit', name: 'Text input with limit' },
            { path: 'components/form/text-input-with-unit', name: 'Text input with unit' },
            { path: 'components/form/location-input', name: 'Location input' },
            { path: 'components/form/select', name: 'Select' },
            { path: 'components/form/switch', name: 'Switch' },
            { path: 'components/form/slider', name: 'Slider' },
            { path: 'components/form/search-input', name: 'Search input' },
            { path: 'components/form/form-actions', name: 'Form actions' },
            { path: 'components/form/form-row', name: 'Form row' },
            { path: 'components/form/form-info', name: 'Form info' },
            { path: 'components/form/form-amount-and-currency', name: 'Form amount and currency' },
            { path: 'components/form/form-phone-number', name: 'Form phone number' },
          ],
        },
        {
          id: 'navigation',
          label: 'Navigation',
          components: [
            { path: 'components/navigation/horizontal-nav', name: 'Horizontal nav' },
            { path: 'components/navigation/tab-bar', name: 'Tab bar' },
            { path: 'components/navigation/user-menu', name: 'User menu' },
            { path: 'components/navigation/platform-switch', name: 'Plateform switch' },
            { path: 'components/headers/header', name: 'Header' },
            { path: 'components/steppers/stepper', name: 'Stepper' },
            { path: 'components/dropdowns/dropdown', name: 'Dropdown' },
          ],
        },
        {
          id: 'notifications',
          label: 'Notification',
          components: [
            { path: 'components/notifications/alert', name: 'Alert' },
            { path: 'components/notifications/badge', name: 'Badge' },
            { path: 'components/notifications/icon-badge', name: 'Icon badge' },
            { path: 'components/tours/tour', name: 'Tour' },
          ],
        },
        {
          id: 'crowdfunding',
          label: 'Crowdfunding',
          components: [
            { path: 'components/meters/progress', name: 'Progress' },
            { path: 'components/simulators/loan-simulator', name: 'Loan simulator' },
            { path: 'components/teaser/teaser', name: 'Teaser' },
            { path: 'components/popovers/popover', name: 'Popover' },
          ],
        },
        {
          id: 'presentation-elements',
          label: 'Presentation elements',
          components: [
            { path: 'components/cards/card', name: 'Card' },
            { path: 'components/cards/project-card', name: 'Project card' },
            { path: 'components/heroes/hero', name: 'Hero' },
            { path: 'components/press/press-quotes', name: 'Press quotes' },
            { path: 'components/testimonies/testimony', name: 'Testimony' },
            { path: 'components/testimonies/testimony-list', name: 'Testimony list' },
            { path: 'components/titles/title-with-actions', name: 'Title with actions' },
            { path: 'components/links/external-rich-link', name: 'External rich link' },
            { path: 'components/links/link-list', name: 'Link list' },
            { path: 'components/lists/bullet-list', name: 'Bullet list' },
            { path: 'components/lists/tag-list', name: 'Tag list' },
          ],
        },
        {
          id: 'contextual-content',
          label: 'Contextual content',
          components: [
            { path: 'components/box/information-box', name: 'Information box' },
            { path: 'components/box/link-box', name: 'Link box' },
            { path: 'components/box/link-box-with-icon', name: 'Link box with icon' },
            { path: 'components/tooltips/tooltip', name: 'Tooltip' },
            { path: 'components/tooltips/static-tooltip', name: 'Static tooltip' },
          ],
        },
        {
          id: 'layout',
          label: 'Layout',
          components: [
            { path: 'components/layout/line', name: 'Line' },
            { path: 'components/form/form-actions', name: 'Form actions' },
            { path: 'components/form/form-row', name: 'Form row' },
            { path: 'components/layout/separator', name: 'Separator' },
          ],
        }
      ]
    end
  end
end
