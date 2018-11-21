import React from 'react'
import { KarlMenu } from 'kitten/karl/menus/karl-menu'

export default () => {
  return (
    <KarlMenu
      brandingCategories={[
        {
          id: 'brand-colors',
          label: 'Brand colors',
          components: [{ path: 'branding/colors', name: '' }],
        },
      ]}
      componentCategories={[
        {
          id: 'grid-system',
          label: 'Grid system',
          components: [
            { path: 'components/grid-system/grid', name: 'Grid' },
            {
              path: 'components/grid-system/vertical-grid',
              name: 'Vertical grid',
            },
            {
              path: 'components/grid-system/side-grid',
              name: 'Slide grid',
            },
            { path: 'components/grid-system/row', name: 'Row' },
            {
              path: 'components/grid-system/single-column',
              name: 'Single column',
            },
            {
              path: 'components/grid-system/lego-grid',
              name: 'Lego grid',
            },
          ],
        },
        {
          id: 'typography',
          label: 'Typography',
          components: [
            {
              path: 'components/typography/title',
              name: 'Title',
            },
            {
              path: 'components/typography/paragraph',
              name: 'Paragraph',
            },
            { path: 'components/typography/text', name: 'Text' },
          ],
        },
        {
          id: 'buttons',
          label: 'Buttons',
          components: [
            { path: 'components/buttons/button', name: 'Button' },
            {
              path: 'components/buttons/icon-button',
              name: 'Icon button',
            },
            {
              path: 'components/buttons/icon-button-with-words',
              name: 'Icon button with words',
            },
            {
              path: 'components/buttons/social-icon-button-with-words',
              name: 'Social icon button with words',
            },
            {
              path: 'components/buttons/image-button',
              name: 'Image button',
            },
            {
              path: 'components/buttons/image-button-with-text',
              name: 'Image button with text',
            },
            {
              path: 'components/buttons/tag-button',
              name: 'Tag button',
            },
            {
              path: 'components/buttons/button-with-badge',
              name: 'Button with badge',
            },
            {
              path: 'components/icons/filter-icon',
              name: 'Filter',
            },
            {
              path: 'components/buttons/garbage-button',
              name: 'Garbage button',
            },
            {
              path: 'components/buttons/star-button',
              name: 'Star button',
            },
          ],
        },
        {
          id: 'icons',
          label: 'Icons',
          components: [{ path: 'components/icons/icons', name: 'Icons' }],
        },
        {
          id: 'form-elements',
          label: 'Form elements',
          components: [
            {
              path: 'components/form-elements/checkbox',
              name: 'Checkbox',
            },
            {
              path: 'components/form-elements/radio-button',
              name: 'Radio button',
            },
            {
              path: 'components/form-elements/text-input',
              name: 'Text input',
            },
            {
              path: 'components/form-elements/text-input-with-button',
              name: 'Text input with button',
            },
            {
              path: 'components/form-elements/text-input-with-limit',
              name: 'Text input with limit',
            },
            {
              path: 'components/form-elements/text-input-with-unit',
              name: 'Text input with unit',
            },
            {
              path: 'components/form-elements/location-input',
              name: 'Location input',
            },
            {
              path: 'components/form-elements/password-input',
              name: 'Password input',
            },
            { path: 'components/form-elements/select', name: 'Select' },
            { path: 'components/form-elements/switch', name: 'Switch' },
            { path: 'components/form-elements/slider', name: 'Slider' },
            {
              path: 'components/form-elements/search-input',
              name: 'Search input',
            },
            {
              path: 'components/form-elements/form-info',
              name: 'Form info',
            },
            {
              path: 'components/form-elements/form-amount-and-currency',
              name: 'Form amount and currency',
            },
            {
              path: 'components/form-elements/form-phone-number',
              name: 'Form phone number',
            },
            { path: 'components/form-elements/comment', name: 'Comment' },
            {
              path: 'components/images/image-cropper',
              name: 'Image cropper',
            },
            {
              path: 'components/images/image-with-caption',
              name: 'Image with caption',
            },
          ],
        },
        {
          id: 'navigation',
          label: 'Navigation',
          components: [
            {
              path: 'components/navigation/horizontal-nav',
              name: 'Horizontal nav',
            },
            {
              path: 'components/navigation/tab-bar',
              name: 'Tab bar',
            },
            {
              path: 'components/navigation/user-menu',
              name: 'User menu',
            },
            {
              path: 'components/navigation/platform-switch',
              name: 'Plateform switch',
            },
            { path: 'components/navigation/header', name: 'Header' },
            {
              path: 'components/navigation/stepper',
              name: 'Stepper',
            },
            {
              path: 'components/navigation/pagination',
              name: 'Pagination',
            },
          ],
        },
        {
          id: 'notifications',
          label: 'Notification',
          components: [
            {
              path: 'components/notifications/alert',
              name: 'Alert',
            },
            {
              path: 'components/notifications/badge',
              name: 'Badge',
            },
            {
              path: 'components/notifications/icon-badge',
              name: 'Icon badge',
            },
            { path: 'components/notifications/modal', name: 'Modal' },
            {
              path: 'components/notifications/tour',
              name: 'Tour',
              hidden_on_s: true,
            },
          ],
        },
        {
          id: 'crowdfunding',
          label: 'Crowdfunding',
          components: [
            {
              path: 'components/crowdfunding/progress',
              name: 'Progress',
            },
            {
              path: 'components/crowdfunding/counter-block',
              name: 'CounterBlock',
            },
            {
              path: 'components/crowdfunding/loan-simulator',
              name: 'Loan simulator',
            },
            { path: 'components/crowdfunding/teaser', name: 'Teaser' },
            {
              path: 'components/crowdfunding/popover',
              name: 'Popover',
              hidden_on_s: true,
            },
          ],
        },
        {
          id: 'presentation-elements',
          label: 'Presentation elements',
          components: [
            { path: 'components/presentation-elements/card', name: 'Card' },
            {
              path: 'components/presentation-elements/simple-card',
              name: 'Simple card',
            },
            {
              path: 'components/presentation-elements/vertical-card',
              name: 'Vertical card',
            },
            {
              path: 'components/presentation-elements/vertical-card-with-action',
              name: 'Vertical card with action',
            },
            {
              path: 'components/presentation-elements/project-card',
              name: 'Project card',
            },
            {
              path: 'components/presentation-elements/article-card',
              name: 'Article card',
            },
            {
              path: 'components/presentation-elements/backer-card',
              name: 'Backer card',
            },
            {
              path: 'components/presentation-elements/cart-reward-card',
              name: 'Cart reward card',
            },
            {
              path: 'components/presentation-elements/crowdfunding-card',
              name: 'Crowdfunding card',
            },
            {
              path: 'components/presentation-elements/reward-card',
              name: 'Reward card',
            },
            {
              path: 'components/presentation-elements/donation-card',
              name: 'Donation card',
            },
            {
              path: 'components/presentation-elements/project-similar-card',
              name: 'Project similar card',
            },
            {
              path: 'components/presentation-elements/triptych',
              name: 'Triptych',
            },
            { path: 'components/heroes/hero', name: 'Hero' },
            {
              path: 'components/press/press-quotes',
              name: 'Press quotes',
            },
            {
              path: 'components/testimonies/testimony',
              name: 'Testimony',
            },
            {
              path: 'components/testimonies/testimony-list',
              name: 'Testimony list',
            },
            {
              path: 'components/titles/title-with-actions',
              name: 'Title with actions',
            },
            {
              path: 'components/links/link-list',
              name: 'Link list',
            },
            {
              path: 'components/lists/bullet-list',
              name: 'Bullet list',
            },
            {
              path: 'components/lists/tag-list',
              name: 'Tag list',
            },
            {
              path: 'components/lists/timeline',
              name: 'Timeline',
            },
            {
              path: 'components/lines/info-lines',
              name: 'Info lines',
            },
          ],
        },
        {
          id: 'contextual-elements',
          label: 'Contextual elements',
          components: [{ path: 'components/contextual-elements/loader', name: 'Loader' }],
        },
        {
          id: 'contextual-content',
          label: 'Contextual content',
          components: [
            {
              path: 'components/contextual-content/information-box',
              name: 'Information box',
            },
            { path: 'components/contextual-content/link-box', name: 'Link box' },
            {
              path: 'components/contextual-content/link-box-with-icon',
              name: 'Link box with icon',
            },
            {
              path: 'components/contextual-content/static-tooltip',
              name: 'Static tooltip',
            },
            {
              path: 'components/contextual-content/tooltip',
              name: 'Tooltip',
            },
            {
              path: 'components/contextual-content/project-creator-card',
              name: 'Project creator card',
            },
          ],
        },
        {
          id: 'layout',
          label: 'Layout',
          components: [
            { path: 'components/layout/line', name: 'Line' },
            {
              path: 'components/layout/form-actions',
              name: 'Form actions',
            },
            {
              path: 'components/layout/form-row',
              name: 'Form row',
            },
            {
              path: 'components/layout/horizontal-stroke',
              name: 'Horizontal stroke',
            },
            {
              path: 'components/layout/vertical-stroke',
              name: 'Vertical stroke',
            },
            {
              path: 'components/layout/separator',
              name: 'Separator',
            },
          ],
        },
        {
          id: 'carousel',
          label: 'Carousel',
          components: [
            {
              path: 'components/carousel/simple-carousel',
              name: 'Simple carousel',
            },
            {
              path: 'components/carousel/carousel',
              name: 'Carousel with ProjectCard',
            }
          ],
        },
        {
          id: 'player',
          label: 'Media',
          components: [
            {
              path: 'components/player/embed-player',
              name: 'Embed Player',
            },
          ],
        },
      ]}
    />
  )
}
