# Changelog

This project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]

## [22.1.1] - 2018-08-21

Fix:
- Dependencies strategy.

## [22.1.0] - 2018-08-21 

Feature:
- Add `onLabelClick` prop action on `Checkbox` component.

Fix: 
- Fix garbage button styles on `CartRewardCard`.

## [22.0.0] - 2018-08-08

Breaking changes:
- Remove `sassy-maps` dependency.
- `mediaQueries` HOC don't expose all methods.
  You have to use `exposedMethods` prop to list the methods you want to expose
  on the mediaQueries HOC.

```js
mediaQueries(Component, {
  viewportIsMobile: true,
  exposedMethods: ['close'],
})
```

- Rename `onClose` prop to `onAfterClose` in `CartRewardCard` component.
- Rename `onClose` prop to `onAfterClose` in `Alert`
  component:
  ```js
  <Alert onAfterClose={ () -> {} }>
  ```

Features:
- Add `map-get-deep` utility.
- Update style on `ContributionCard` component.

## [21.4.0] - 2018-08-06

Feature:
- Update `ReactModal` version.

## [21.3.2] - 2018-08-02

Fix:
- Update `Comment` component bottom notes padding.

## [21.3.1] - 2018-08-02

Fix:
- Don't cancel click on current page of `Carousel`.

## [21.3.0] - 2018-08-01

Feature:
- Create `FacebookIconWithBackground` component.

## [21.2.0] - 2018-07-31

Features:
- Clone wrapped component methods on `mediaQueries` HOC.
- Add `onCloseClick` prop to `CartRewardCard`.
- Add `hidePaginationOnMobile` prop to `Carousel`.

Fixes:
- Update margin on `CartRewardCard` component.
- Remove `hover` state on `Select-control` class.
- Update size on `ButtonQuestionMarkIcon` component.
- Update `locationIcon` svg.
- Use `StyleRoot` properly in `Comment` component in order to use.

## [21.1.0] - 2018-07-19

Features:
- Add `bottomNotes` prop on `Comment` component.
- In `Carousel`, we can now change page by clicking prev/next page.

Fixes:
- Fix `title` `min-height` on `CrowdfundingCard` component.
- Fix re-render `ButtonIcon` state on `Carousel`.
- Update [Sprockets Rails](https://github.com/rails/sprockets-rails)
  version.

## [21.0.1] - 2018-07-02

Fix:
- Add `others` props on `LinkList` component.

## [21.0.0] - 2018-06-27

Breaking change:
- Add `huge` size and replace `big` by `huge` size on `BulletList`.

Features:
- Create `CartRewardCard` component.
- Add `big` and `huge` props on `IconBadge` component.
- Add `PinterestButtonIcon` and `PinterestIcon` components.
- Create `StarIcon` component.

Fixes:
- Update `renderImage` margin on `ContributionCard` component.
- Update svg `ArrowIcon` component.
- Update `ArrowIcon`on `Pagination` component.
- Update margin on `ContributionCard` component.
- Update `Instagram ButtonIcon` gradient.

## [20.17.0] - 2018-06-14

Features:
- Create composable `withMediaQueries` hoc to `media-queries`.
- Add custom `media-query` to `mediaQueries` hoc:
  `mediaQueries(Component, { myCustomViewport: '(min-width: 1440px)'})`.

Fixes:
- Disable textarea resize in `CommentForm`.
- Fix `Comment` propType warning.

## [20.16.0] - 2018-06-06

Feature:
- Update `Comment`, `CommentForm` and `CommentAvatar` components and its stories.

Fixes:
- Fix `ButtonImage` A11Y.
- Add a key on `CarouselBase`.
- Fix `parseHtml` helper when no value is passed as parameter.

## [20.15.0] - 2018-06-05

Features:
- Create `Comment`, `CommentForm` and `CommentAvatar` components.
- Add `YoutubeButtonIcon` and `YoutubeIcon` components.
- Add `ButtonImageWithText` component and story.

Fixes:
- Update all social `buttonIcon` sizes.
- Merge styles with `style` prop in `BackerCard`.
- `BackerCard` text layout when text is too long.

## [20.14.0] - 2018-05-29

Features:
- Add `BackerCard` component.
- Add `huge` size to `ButtonImage`.

## [20.13.0] - 2018-05-28

Features:
- Update `RewardCard` component.
- Add `none` decoration option to `Text`.
- Add `k-u-decoration-none` class.
- Add `ContributionCard` and `DonationCard` components.
- Add `renderDonation` on `RewardCard` component.
- Add `k-Label--micro` class.

## [20.12.3] - 2018-05-22

- Fix: Remove useless props on `RewardCard` component which ones
  are: `imageSrcSmall`, `imageSrc` and fix image height to keep original ratio.

## [20.12.2] - 2018-05-18

Fix:
- Fix font & missing prop in `RewardCard` component.

## [20.12.1] - 2018-05-17

Fix:
- Fix `RewardCard` custom style.

## [20.12.0] - 2018-05-17

Feature:
- Add `buttonOnMouseEnter`, `buttonOnMouseLeave`, `buttonOnClick` and custom
  props on `RewardCard` component.

## [20.11.0] - 2018-05-16

Feature:
- Add `paragraph` props on `ProjectCard` component.

Fix:
- Add `title` and `myContribution` early return and fix bug with the grid.

## [20.10.0] - 2018-05-04

Feature:
- Create `RewardCard` component and its stories.

Fix:
- Fix `RemoveListener` on media-query `viewportIsSOrLess`.

## [20.9.0] - 2018-05-02

Features:
- Add `cropperData` values on the return of `onChange` handler of
`ImageCropper` component.
- Add 'isCropEnabled' prop on `ImageCropper` component. If false, the
cropper feature is turned off (true by default).
- Add `base64` option to `Uploader` to return base64 image if true.
(false by default)

## [20.8.0] - 2018-04-27

Features:
- Add `markdown` prop to ignore `Markdown` transformation.
- Add `Italic` props on `Title` component.
- Update svg size and color on `IconBadge` component.
- Add `viewportIsSOrLess` on `mediaQueries` HOC.
- Show `LegoGrid` only when DOM is loaded.
- Add `Badge` prop on `HorizontalNav` component.
- Add `k-HorizontalNav__badge` and `k-HorizontalNav__item__badge` classes.
- Update A11Y on `Modal` component.

Fixes:
- Add `name` value on `TextInput` textarea version.
- Fix `HorizontalNav` vertical alignment.
- Fix size on `IconBadge` component.
- Update `ArrowIcon` size on `Pagination` component.
- Remove `hover` state when `ButtonIcon` is `active` state on `Pagination`.

## [20.7.1] - 2018-04-11

Fix:
- Fix bad truncated `subTitle` in `CrowdfundingCard` component
  and remove unexpected `subTitleTruncate` prop warning.

## [20.7.0] - 2018-04-11

Feature:
- Add `k-FormInfo__error__link` class with all link states.

## [20.6.0] - 2018-04-06

Features:
- Add `subTitleTruncate` prop for `CrowdfundingCard`.
- Add `horizontalStroke` prop for `SimpleCard`.

Fixes:
- Update `:hover` and `:focus` state on `azote` button.
- Fix `CrowdfundingCard` spacing.

## [20.5.0] - 2018-04-03

Feature:
- Add the `onClose` props to allow new actions when closing a `modal` component.

## [20.4.1] - 2018-04-03

Fix:
- Add `backgroundColor` and `color` props on `CrowdfundingCard` component.

## [20.4.0] - 2018-03-26

Feature:
- Add `items-sizeScreen-up` props to `LegoGrid` component.

Fix:
- Remove `textProps` props from `inputProps` Checkbox component.

## [20.3.0] - 2018-03-22

Features:
- Add `PasswordIcon` and `PasswordInput` components.
- Add `oxygen` modifier on all `Button` components.

Fixes:
- Update `k-Badge` padding.
- Update `CrowdfundingCard` image transition.

## [20.2.0] - 2018-03-15

Feature:
- Add `textProps` to `Checkbox`.

Fix:
- Fix `Progress` value that should not exceed the maximum limit.

## [20.1.0] - 2018-03-14

Features:
- Add `ScrollableContainer`.
- Add progress percentage in `CrowdfundingCard`.
- Add `azote` modifier on `Button` and `ButtonIcon` components.
- Add new `FilterIcon` component.
- Update all buttons colors.

Fixes:
- Fix `TagButton` colors.
- Update `k-Checkbox__label` with flex.
- Fix `CrowdfundingCard` when the progress value is zero.
- Update primary colors.

## [20.0.2] - 2018-03-05

Fix:
- Fix truncated title styles on `CrowdfundingCard`.

## [20.0.1] - 2018-03-05

Fixes:
- Add missing `event` parameter to `Pagination`'s onClick.
- Update `font-size` big on `TagButton` component.
- Update Radium.

## [20.0.0] - 2018-03-01

Breaking changes:
- Rename `style` prop to `fontStyle` in `Text` component.
- You must now add a `<StyleRoot>` around `<Hero>` components.

Features:
- Add `Pagination` component.
- Update styles for `disabled` prop on `ArrowIcon` component.
- Add `rampProps` prop to `Progress` component.
- Add `CrowdfundingCard` component.
- Add `mediaQueries` HOC.
- Add `modifier` prop on `TagButton` component.

Fix:
- Update `primary-light` color.

## [19.5.0] - 2018-02-13

Feature:
- Add `lineHeight` and `itemMargin` props on `LinkList` component.

## [19.4.1] - 2018-02-07

Fix:
- Enable button type attribute override on `TextInputWithButton`.

## [19.4.0] - 2018-02-02

Features:
- Add `Twitter`, `Facebook` and `Linkedin` social button icon words.
- Add `k-u-color-background1` utility for `Text` component.

Fix:
- Fix `margin-bottom` on `LinkList` with `margin` prop.

## [19.3.1] - 2018-01-31

Fix:
- Fix viewport states update on `Container` component.

## [19.3.0] - 2018-01-31

Feature:
- Add `focus()` to `TextInput`.

Fix:
- Fix viewport states update on `Carousel` and `Modal` components.

## [19.2.1] - 2018-01-26

Fix:
- Update Radium version (v0.21.2).

## [19.2.0] - 2018-01-22

Feature:
- Update styles `disabled` prop on `Button` and `ButtonIcon`.

Fixes:
- Update colors to `TextInputWithButton` component.
- Add `assets/javascripts/kitten/config` folder to published package.

## [19.1.0] - 2018-01-22

Features:
- Add `ConfiguredRadium` HOC to use Radium with custom configuration.
- Add `k-ButtonIcon--cross--tiny` class.

Fixes:
- Update Radium version and add a custom plugin to fix `prefixer` data.
- Fix `Carousel` prerender.
- Update styles on `Tour`, `Popover` and `Modal` components.

## [19.0.0] - 2018-01-16

Breaking changes:
- Replace `k-Popover__title` and `k-Tour__popover__title`
  by `Title` component.
- Replace `k-Tour__popover__numbering` by `Text` component.
- Update React/React-Dom to v16.x version which
  needs `babel-polyfill` to work properly with `Map` and `Set`.
  You need to [install babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
  and add it to your webpack config to make it work.

Features:
- Add [Jest](https://facebook.github.io/jest/) as our new
  testing framework instead of [Mocha](https://mochajs.org/) and
  [Chai](http://chaijs.com/).
- Update `Modal` component with styleguide V2.
- Update `Popover` and `CallToActionPopover` components with new design
  styleguide V2.
- Update `Tour` component with new design styleguide V2.
- Add `size` prop to `CloseButton` component.
- Add `k-ButtonIcon__rounded` class.
- Change `font-size: 1rem` on `k-Button--big`.

Fixes:
- Fix `captionProps` prop warning to `ImageWithCaption`.
- Fix `titleProps` prop warning to `ArticleCard`.

## [18.1.0] - 2018-01-09

Features:
- Add 16:9 format to the `ProjectCard` image.
- Add 16:9 format to the `ArticleCard` image.

Fixes:
- Add `tiny` size on `k-ButtonIcon--signup` and `k-ButtonIcon--phone`.
- Fix `overflow` style to `ProjectSimilarCard` component.

## [18.0.0] - 2018-01-08

Breaking changes:
- Remove `modifier` prop on `TagButton`.
- Replace `size="micro"` modifier `size="nano"` in `ButtonIcon` component.
- Replace `.k-ButtonIcon--checked--micro` by `.k-ButtonIcon--checked--nano`.
- Replace `.k-ButtonIcon--empty--micro` by `.k-ButtonIcon--empty--nano`.

Features:
- Add `titleProps` prop to `ArticleCard` and `SimpleCard` components.
- Remove subtitle part if `articleSubTitle` prop is empty.
  By default, the value is empty.
- Text centered on `k-TextInput--twoDigits` class.
- Update `TagButton` component with new design styleguide V2.
- Update `ProjectCard` with the new design.
- Update all `TextInput` to manage input radius.
- Add `rounded` prop in `ButtonIcon` component.
- Update `QuestionMarkIcon` component with styleguide V2.
- Update `SearchInput` component with new design styleguide V2.

Fix:
- Cleaning the use of Radium.

## [17.1.0] - 2018-01-03

Feature:
- Update `Header` style with the new border size of `HorizontalNav`.

Fix:
- Add `href` prop on link items in `HorizontalNav` component.

## [17.0.0] - 2018-01-02

Breaking changes:
- Remove `k-Hero` mixin.
- Update grid configuration.
- Update `LinkList` component with styleguide V2.
  Replace `@include k-LinkList(( colors: ( ))` by `@include k-LinkList;`.
- Update all `Button` components with new design styleguide V2.

Features:
- Add `ArticleCard` component.
- Add `Hero` component.
- Add `Carousel` components and its helpers.
- Add screen and grid JavaScript configuration files.
- Add feature detection utility.
- Add media-query utility.
- Add range utility.
- Add `SimpleCard` component.
- Add `withoutBoxShadowOnHover` prop to `card` HOC.
- Add new `:hover` styles to `k-Card`.
- Add `font2` prop in `Text` component.
- Add `instagram` modifier in `ButtonIcon` component, `InstagramButtonIcon`
  and `InstagramIcon` components.
- Add `disabled` prop on `TextInputWithButton`.
- Add `k-buttonPadding` helper to manage button paddings.
- Add new `error` and `valid` colors.
- Add `ImageWithCaption` component.
- Add `HorizontalStroke` component.
- Add `HorizontalNav` React component with styleguide V2 brand config.
- Add `VerticalStroke` component.
- Update grid 'Container' component with screen sizing handlers.
- Update `Tooltip`, `TooltipNew` and `StaticTooltip` components
  with styleguide V2.
- Update `LinkBox` and `InformationBox` components with styleguide V2
  new design.
- Update all `Select` components with styleguide V2 new design.
- Update `Alert` component with new design styleguide V2.
- Update `:focus` `border-color` on `TextInput` component.
- Update `Checkbox` and `RadioButton` components with new design styleguide V2.
- Update all `Input` components with new design styleguide V2.
- Update `k-buttonRounded` helper to manage button radius.
- Update colors.
- Remove `boron` buttons colors.

Fixes:
- Fix `:focus` `border-color` on `TextInputWithUnit`, `Select` and
  `LocationInput` component.
- Fix `LinkList` test.
- Update ruby version.

## [16.3.1] - 2017-11-28

Fix:
- Fix `null` value in `SelectWithState` component.

## [16.3.0] - 2017-11-27

Features:
- Change `quinary` to `senary` modifier of `Title` on `ProjectCard` and
  `ProjectSimilarCard`.
- Add `senary` modifier of `Title` component.
- Add `k-u-anti-aliasing` helper mixin.
- Update `focusId` on `Label` component.

Fixes:
- Update margin on `ImageCropper` component.
- Update margin on `FormComposer` component.
- Push empty object when selection is removed in `SelectWithState`.
- Add `line-height` on `searchable` of `Select` component.

## [16.2.0] - 2017-11-22

Features:
- Replace `k-ProjectCard__status--tertiaryBackground` by
  `k-ProjectCard__status--validBackground`.
- Update `ProjectCard` component with styleguide V2.
- Update `react-places-autocomplete` module to add `autocomplete="off"`
  on `LocationInput` component.

## [16.1.0] - 2017-11-20

Feature:
- Add `k-buttonColors` helper to manage button colors by modifier.

## [16.0.1] - 2017-11-17

Fix:
- Fix `k-SideGrid__asideContent` size to make children get the
  proper width.

## [16.0.0] - 2017-11-17

Breaking changes:
- Replace `valid-2` by `valid`.
- The fonts folder has been removed. Use external CSS to load fonts.
  You can revert the previously breaking change (`Add new Maax fonts.`).

Features:
- Update `InformationBox` component with `Title` component.
- Update `line-height` on `Title` component.

## [15.0.0] - 2017-11-15

Breaking changes:
- Update `UserMenu` component with styleguide V2.
  Replace `@include k-UserMenu(( font: 'bold', … ))` by `@include k-UserMenu;`.
- `TextInputWithButton` and `TextInputWithUnit` mixins don't use options params.
  Replace `@include k-TextInputWithButton(( font: 'bold', … ))`
  by `@include k-TextInputWithButton;`.
  Replace `@include k-TextInputWithUnit(( inputFont: 'regular', … ))`
  by `@include k-TextInputWithUnit;`
- Change button width in `k-TextInputWithButton__button`.
- Remove `boron` modifier in `Button`, `ButtonIcon` components and
  replace `boron` by `helium`.
- Add new `Maax` fonts.

  If you use hot-dev-server, update the headers in your configuration file:

```js
// For example, with Webpack:
const devServer = new WebpackDevServer(compiler, {
  …
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  }
});
```

  `kitten-components` exposes now its fonts paths:

```js
import kittenComponents from 'kitten-components'

const resolvingPaths = kittenComponents.jsPaths
                       .concat(appJsPath)
                       .concat(nodeModulesPath)
                       .concat(kittenComponents.imagesPaths)
                       .concat(kittenComponents.fontsPaths)
```

  Include the fonts path in your loaders:

```js
// Update module loaders.
module: {
  loaders: [
    {
      test: /\.(svg|png|jpe?g)$/,
      loader: 'file?name=images/[name].[ext]',
      include: /icons/, // Add images folders.
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file?name=fonts/[name].[ext]',
      include: /maax/, // Add fonts folders.
    },
    …
  ]
}
```

- Default colors have changed. To keep the original default colors:

```css
$k-colors: map-merge($k-colors, (
  'font-1': #333,

  'primary-1': #4a84ff,
  'primary-2': #3b75f0,
  'primary-3': #2c66e1,
  'primary-4': #cadbfd,
  'primary-5': #ecf2ff,
  'primary-6': #f6f9ff,

  'tertiary-1': #68ffa0,

  'valid': #70c050,
  'error': #ff4146,
  'error-2': #ffecec,
));
```

Features:
- Update `modifier` on `ButtonQuestionMarkIcon` component with styleguide V2.
- Update `font` on `Stepper` component with styleguide V2.
- Update `HorizontalNav` component with styleguide V2.
- Add `tiny` props in `TagButton` component.
- Update `TagButton` and `PaymentButton` components with styleguide V2.
- Update `Select` component with styleguide V2.
- Update `Label` and `FormInfo` components.
- Update `TabBar` component with styleguide V2.
- Update `ProjectCard`, `ProjectSimilarCard` and `ProjectCreatorCard`
  components with styleguide V2.
- Update `Tooltip` and `StaticTooltip` components with styleguide V2.
- Update `Alert` component with styleguide V2.
- Update all `TextInput` component with styleguide V2.
- Update `ButtonImageWithText` component with styleguide V2.
- Update colors buttons.
- Update `Title` and `Paragraph` with styleguide V2.
- Add `regular` font on `radioButton` and `Checkbox` components.
- Update `TagList` component with styleguide V2.
- Add new "MDC" colors.
- Introduce new `valid-2` and `error-2` colors.
- Add `k-u-margin-none` utility.

Fixes:
- Update styles on `LocationInput`.
- Add missing input checked disabled background-image for `RadioButton`
  component.
- Use `k-u-weight-regular` instead of `k-u-strong` in `ProjectCard` component.

## [14.6.0] - 2017-11-15

Features:
- Add `onClose` prop to `Alert` component.
- Update placeholder `font-weight` on `LocationInput` component.
- Update `font-weight` on `LinkBox` component.
- Update error `line-height` on `FormInfo` component.

Fix:
- Use `k-u-weight-regular` instead of `k-u-strong` in `ProjectCard` component.

## [14.5.0] - 2017-11-10

Features:
- Handle `onChange` prop in reset event in `ImageCropper` component.
- Add `parseHtml` helper to transform HTML to React.

## [14.4.0] - 2017-11-08

Features:
- Update `Stepper` component with Kitten V2.
- Update styles on `imageCropper` on small screens.
- Add `deletable` prop to display delete button in `SimpleUploader`.

Fix:
- Add default type `button` to the `CloseButton` component

## [14.3.0] - 2017-10-26

Features:
- Add named export for all components. Default export for these components
  is now deprecated.
- Add `k-u-color-valid` utility.
- Add `valid` color in `Text` component.
- Add `without-line-height` option to `k-typographyFontSize` method.

Fixes:
- Update styles on `LocationInput`.
- Remove `line-height` from size utilities.
- Fix `TextInput` length for Firefox.
- Update alignment on `InfoLines`.

## [14.2.1] - 2017-10-12

- Fix `LinkBox` paragraph container size.

## [14.2.0] - 2017-10-04

Feature:
- Handle breakpoints on the `k-u-blockAlign` utility class.

Fixes:
- Update flexbox on `ProjectCreatorCard`.
- Add `className` prop on the link `LinkBox`.

## [14.1.4] - 2017-09-22

Fixes:
- Change `Tooltip` font-size.
- Add `flex-shrink` property on `RadioButton` and `Checkbox`.
- Error deprecated weight classes.

## [14.1.3] - 2017-09-20

Features:
- Add option `withDarkBorder` in `hoc/card`.
- Add `withDarkBorder` prop when prop `href` is true on
  `ProjectCreatorCard` component.
- Add `direction` on all `ArrowIcon` component.
- Add default icon sizes.

Fixes:
- Fix console warnings from `ProjectCard`, `LinkList` and `Tour` rendering.
- Change `RadioButton` and `CheckBox` label click.
- IconSearch prop in Search component.

## [14.0.3] - 2017-09-13

Fix:
- Fix `TextInputWithUnit` missing unit prop and update width for
  iOS devices.

## [14.0.2] - 2017-09-11

Fixes:
- Scroll problem on opened modal.
- Repair `PhoneIllustration` background.

## [14.0.1] - 2017-09-08

- Fix: Remove undefined variable.

## [14.0.0] - 2017-09-07

Breaking changes:
- Remove `TagIcon` component.
- Rename `ButtonInfoIcon` to `ButtonQuestionMarkIcon`.
- Rename `ButtonTooltipIcon` to `InfoIcon`.
- Rename `TooltipIcon` to `QuestionMarkIcon`.
- Remove deprecated `content` prop from `RadioButton`.
  Prefer the `children` prop.
- Add generic keys for fonts.
  For CSS mixins with configuration maps, replace `font` with the new key.
  Replace your previous fonts definition by:
  `$k-fonts: k-merge($k-fonts, ( …your-own-font-definitions-here… );`.
- Replace the deprecated `commissionRate` prop by a list of
  `commissionRules`. To upgrade you should replace for example:

      function commissionRate(duration) {
        if (duration >= 20) return 0.2
        if (duration >= 12) return 0.3
        return 0.1
      }
      <LoanSimulator commissionRate={ commissionRate } />

  By:

      const commissionRules = [
        { durationMax: 12, rate: 0.3 },
        { durationMax: 20, rate: 0.2 },
        { rate: 0.1 }
      ]
      <LoanSimulator commissionRules={ commissionRules } />
- Add `LinkBoxIllustration` and used to `DocLinkBox`.
- Remove deprecated `text` prop on `Checkbox`.
  Use the `children` prop instead.

Features:
- Show list `icons` component.
- Add `ArrowIcon` component in `LinkBox` component.
- Delete `InformationIcon` component.
- Replace `RightArrowIcon` to `ArrowIcon`.
- Delete `RefreshIcon` component.
- Add `withoutTopBottomBorder`, `borderColor` and other props
- Add new `MixIllustration` and `LinkBoxIllustration` component.

Fixes:
- Fix unworking loader animation.
- Delete `icon-tour-1.svg` and `icon-tour-2.svg`.
- Replace `MixIllustration` and `LoudspeakerIllustration` component in `Tour`.

## [13.11.0] - 2017-09-05

Features:
- Handle breakpoints with `k-utilities-align`.
- Add `k-u-align` helper mixin.
- Add new `blockAlign` utility to align blocks.
- Add icon prop to 'TagList' component.
- Add multiple `Taglist` management to `ProjectCard` component.
- Add multiple `Taglist` management to `SimilarProjectCard` component.
- Add `k-separatorBase` helper.
- Add `k-VerticalSeparator`.
- Add `InstrumentTagIcon`.
- Add `TypologyTagIcon`.

## [13.10.0] - 2017-08-25

Features:
- Add reverse prop to `ProjectCard` component.

## [13.9.1] - 2017-08-17

- Fix: Add `pointer-events: none` to `.k-ButtonIcon__svg` for analytics purpose.

## [13.9.0] - 2017-08-11

Features:
- Add `spreadOutAt` prop to `FormActions` component.
- Add `FormActions.Item` component.

## [13.8.0] - 2017-08-10

Features:
- Add `withBorderRadius` and `withLeftRightBorder` props
  to `InfoLines` component.
- Add `k-u-background-color-background1` utility.
- Add `Text` component.
- Add `align`, `color`, `decoration`, `line-height`, `size`, `style`,
  `transform` and `weight` utilities.

Fix:
- Remove unknown props in `others` prop to `GridCol` component.

## [13.7.0] - 2017-08-07

Features:
- Add `withoutResponsive` prop to `InfoLines` component.
- Add `color` prop to `Progress` component.

Fixes:
- Add link props to `SimilarProjectCard` component.
- Pass `onRefreshClick` prop correctly to `SimilarProjectCard` component in
  `SimilarProjectsCard` component.
- Set current index to 0 when `projects` props is updated in
  `SimilarProjectsCard` component.

## [13.6.1] - 2017-08-03

Fix:
- Add `type` attribute to navigation buttons in `SimilarProjectCard`
  component.

## [13.6.0] - 2017-08-01

Features:
- Add external trigger to `Modal` component.
- Add responsive mixin `k-u-margin(…)`.
- Add `Loader` on `ProjectSimilarCard` component.
- Add `leftArrowDisabled`, `rightArrowDisabled`, `onLeftArrowClick` and
  `onRightArrowClick` props to `ProjectSimilarCard` component.
- Add `SimilarProjectsCard` component.

## [13.5.0] - 2017-07-28

Features:
- Accept other props to `GridCol` component.
- Add `Modal` component.
- Add `withoutTopBottomBorder`, `borderColor` and other props
  to `InfoLines` component.
- `LinkList` responsive.
- Add new modifier `k-LinkList--withoutMargin` in `LinkList`.
- Add `withoutPointerEvents` prop to `Label` component.
- Add `Loader` and `LoaderWithParagraph` components.
- Add `icon` and `iconWithMinWidth` props to `Button` component.
- Add social button icon components (`FacebookButtonIcon`, …).
- Add border utilities (`k-u-border-left-line1`, …).
- Add new `ProjectSimilarCard` component.
- Add new `RefreshIcon` component.

## [13.4.0] - 2017-07-20

Features:
- Add `other` props to `Stepper` component.
- Add new `LinkList` component.
- Add new `TextInputWithButton` component.
- Add `k-u-align-center-block` utility to center blocks.

Fixes:
- Add `withoutHover` and `verticalArrow` options on `ButtonIcon` component.
- Add `ButtonIcon` animation on `ProjectCreatorCard`.

## [13.3.1] - 2017-07-06

Fix:
- Add missing `key` prop in `InfoLines` component & rename attribute in
  defaultProps.

## [13.3.0] - 2017-07-05

Feature:
- Add `disabled` prop to `ImageCropper`, `SimpleUploader` and `Uploader`
components.

## [13.2.1] - 2017-07-04

Features:
- Add `Row` component.
- Add new `TooltipNew` component.
- Add new `InfoWithTooltip` component.
- Add new `ButtonInfoIcon` component.
- Add new `InfoIcon` component.
- Add `italic` prop to `Paragraph` component.

Fix:
- Fix `SimpleUploader` responsive.

## [13.1.1] - 2017-06-30

Fix:
- Fix initial size of `cropper` in `ImageCropper` component.

## [13.1.0] - 2017-06-27

Feature:
- Add `SimpleUploader`, `Uploader` and `ImageCropper` components.

Fixes:
- Handles small version of `InfoLines` component.
- Harmonize font-size label component on `FormInfo`.

## [13.0.0] - 2017-06-15

Breaking change:
- Rename `ResponsiveVideoIframeContainer` component to
  `ResponsiveIframeContainer`.

Features:
- Add `onSelect` prop to `LocationInput` component.
- Add new `InfoLines` component.
- Add `color-error` color text utility.
- For `xs` media-query, `FormActions` component is placed in columns.

Fixes:
- Add `width` attribute on payment button svg tag (fixes firefox bug).
- Add `k-ButtonIcon__svg` class on `IconBadge` component.
- Fix IOS style's button and remove shadow in `TextInput`.

## [12.1.0] - 2017-06-08

Feature:
- Create `ResponsiveVideoIframeContainer` component for responsive video iframe.
  The component is used with embedly generated iframe.

Fixes:
- Remove `color-error` label on `RadioButton` and `Checkbox` components.
- Add `box-shadow: none` property on `TextInput`.
- Fix error with `Object.assign` in `RichTextInput` component to prevent
  error in React on Rails *(`Object function […] has no method 'assign'`)*.

## [12.0.0] - 2017-05-30

Features:
- Add new `ProjectCreatorCard` component.
- Add new `ClockIcon` component.
- Add new `RightArrowIcon` component.
- Add config & toolbar to default props `RichTextInput` component.
- Fix: Fix display element as a block element (`ButtonImageWithText`,
    `ButtonImage`, `ButtonWithBadge`, `IconBadge`).

Fixes:
- Remove `React.PropTypes` and use `PropTypes` from
  [prop-types](https://www.npmjs.com/package/prop-types) library instead.
- Update deprecated
  [react-prop-types](https://github.com/react-bootstrap/react-prop-types)
  library with
  [prop-types-extra](https://github.com/react-bootstrap/prop-types-extra).

## [11.11.0] - 2017-05-22

Fix:
- Change `TagButton` background.

## [11.10.0] - 2017-05-19

Features:
- Add `BulletList` component.
- Add `big` modifier to `.k-BulletList`.

## [11.9.0] - 2017-05-18

Feature:
- Add background color utilities.

Fixes:
- Remove `margin-top: 50px` on `k-Separator`.
- Add missing onChange prop on `RichTextInput` component.

## [11.8.1] - 2017-05-17

Fix:
- Prefer `npm` to `yarn` in the postinstall script.

## [11.8.0] - 2017-05-17

Feature:
- Add `RichTextInput` component.
  Add '<script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>'
  to your pages.

## [11.7.0] - 2017-05-15

Feature:
- Create `CheckboxSet` & `RadioButtonSet` components.

## [11.6.0] - 2017-05-15

Features:
- Add tooltip in `ProjectCard`.
- Add new `MasterCardIcon` and `CbIcon` components.
- Add `.k-TagButton__icon` class to adds icons to tag buttons.

## [11.5.0] - 2017-05-09

Feature:
- Add responsive image utility.

Fix:
- Fix the tiny option on Select.

## [11.4.0] - 2017-05-04

Feature:
- Add status in `ProjectCard`.

Fixes:
- Fix `LegoGrid` grid.
- Fix tag `Title` in `ProjectCardComponent`.
- Fix test launch.

## [11.3.0] - 2017-05-02

Features:
- Add `MenuIcon` and component.
- Add `KissKissBankBankLogoIcon` component.
- Add `InformationIcon` component.

Fix:
- Change overflow default value to manage negative margins on `k-ProjectCard`.

## [11.2.0] - 2017-04-26

Feature:
- Add `withBorder` prop to `ButtonImage` in `ProjectCard`.

## [11.1.0] - 2017-04-26

Feature:
- Add `withBorder` prop to `ButtonImage` component.

## [11.0.0] - 2017-04-24

Breaking changes:
- Delete `SimulatorResult` component.
- The `k-Select` mixin does not accept options anymore.
  Please update `@import k-Select((…));` to `@import k-Select;`.
- Remove `react-on-rails` module as dependency.
  To be retro-compatible, add the dependency on your project's `package.json`:
  ```
  "dependencies": {
    "react-on-rails": "~6.10.1"
  }
  ```

Features:
- Add `rounded="micro"` and `rounded="tiny"` to the `Card` component.
- Add `ProjectCard` component.
- Add `withoutPointerEvents` prop to `ButtonImage` component.
- Add `CheckedCircleIcon`, `ClockCircleIcon`, `CrossCircleIcon`, `LockIcon` and
  `WarningCircleIcon` components.
- Add `tiny` prop to `TagList` component.
- Update grid in `LegoGrid.Item` component.
- Add `Container` component.

Fixes:
- Add `validOnSelect`, `disabled` props to the `TextInputAndSelect` component.
- Add `valid`, `disabled` props to the `SelectWithState` component.
- Add `checked-disabled` and `arrow-bottom-disabled` svgs.
- Update disabled color on `TextInput`, `TextInputAndSelect`, `Button` and
  `Select`.
- Update `react_on_rails` gem dependency to `6.10.1`

## [10.2.0] - 2017-04-11

Feature:
- Add fees exemption to `LoanSimulator` component.

## [10.1.0] - 2017-04-11

Fix:
- Background `Alert` width.

## [10.0.0] - 2017-04-10

Breaking changes:
- Use `k-Card--withVerticalPadding` and `k-Card--rounded` to have the same
render of old `k-Card`.
- Update button `min-width` class on `.k-Button--tiny`.

Features:
- Add modifiers on `k-Card` mixin.
- Add `card` high-order component.
- Add `normalLineHeight` prop to `Paragraph` component.
- Add `margin` prop to `Title` component.
- Add `onSelectChange` and `errorOnSelect` props to `TextInputAndSelect`
component.
- Add `Separator` component.

Fixes:
- Add missing checked disabled style for `RadioButton` component.
- Set `line-height: normal` to `RadioButton/Checkbox/Switch` components.
- Propagate `className` prop to `Grid` and `GridCol` components.

## [9.5.0] - 2017-03-30

Features:
- Add `Marger` component.
- Add `ButtonImage` component.
- Add `margin` prop to `Paragraph` component.

Fixes:
- Display correctly disabled `TextInputWithLimit` component.

## [9.4.0] - 2017-03-28

Feature:
- Add color utilities.

Fix:
- Pass the `onChange` prop correctly in `TextInputWithLimit`.

## [9.3.0] - 2017-03-27

Features:
- Add `TagList` component.
- Add `TagIcon` component.
- Create `SupTitle` component.

## [9.2.0] - 2017-03-23

Fix:
- Remove unneeded padding on `SearchInput` component.

## [9.1.0] - 2017-03-22

Feature:
- Add `SideLayout` component and fix layout error on Safari.

## [9.0.0] - 2017-03-22

Breaking change:
- Change height of `k-Progress` component.

Features:
- Add `k-Button--big@s-up` modifier.
- Add `k-buttonBig` mixin.
- Add `k-u-align-right` class.
- Add `IconBadge` component.
- Add new `Badge` component.
- Add `LegoGrid` component.
- Add `flexible` option to `k-grid-colSize` mixin.
- Add `k-u-align-right` class.

Fixes:
- Prevent newline in mobile view for `SearchInput` component.
- Deprecate `k-u-centered` in favor of `k-u-align-center`.

## [8.6.0] - 2017-03-15

Features:
- Add `k-FormInfo` style.
  `k-TextInputWithInfo` is now deprecated. Use `k-FormInfo` instead.
- Add new `error` props on SelectWithState.

Fixes:
- Change width and margin on `StaticTooltip`.
- Change arrow-zone size on tiny select.

## [8.5.0] - 2017-03-14

Features:
- Add new `StaticTooltip` React component.

Fixes:
- Add bottom padding to `.k-SideGrid__content` element.
- Fix SearchInput content overflow display.

## [8.4.0] - 2017-03-08

Features:
- Accept more props on `ArrowIcon`.
- Add new `LinkedinIcon` React component.
- Add new `TwitterIcon` React component.
- Add new `FacebookIcon` React component.
- Add new `ButtonIcon` React component.
- Add `defaultValue` to `Location`.

Fixes:
- `LocationInput` does not overwrite `onChange`.

## [8.3.0] - 2017-03-08

Features:
- `SelectWithState` now accepts an `onInputChange` function.

Fixes:
- `SelectWithState` does not overwrite previous `inputProps`.

## [8.2.1] - 2017-03-07

Fixes:
- Animation change when `Alert` closes.

## [8.2.0] - 2017-03-06

Features:
- Add new `Alert` component.
- Add new `CloseButton` component.
- Add new `CrossIcon` component.

Fixes:
- `SelectWithState` defaults to `deleteRemoves` to `false`.
- Use `CloseButton` component instead of simple button in `Popover`.

## [8.1.0] - 2017-03-06

Features:
- Add new `error` props on `RadioButton` and `Checkbox`.
- Add new `LocationIcon` React component.
- Add new `LocationInput` React component.

Fixes:
- Fix wrong padding for `InformationBox` component.
- Use `handleChange` handler instead of `handleInput` in `TextInputWithLimit`
  to prevent React warning.

## [8.0.0] - 2017-02-28

Breaking changes:
- The `FormPhoneNumber` has new props.
  To be retro-compatible you should, in your app's components:
  - Rename `name` to `areaName`.
  - Rename `options` to `areaOptions`.
  - Rename `value` to `areaValue`.
  - Add the `tiny` boolean prop.
  - Replace `import FormPhoneNumber` by
    `import { FormPhoneNumber }`.
- Add `@include k-TextAreaWrapper;` in your SCSS if you use `TextInput` with
  `tag='texteara'`.

Features:
- Add gradient to textarea.
- Add `limit` prop to textarea.

Fixes:
- Add blur event to `TextInput` component.
- `TextInput` placeholder on Safari.
- `TextInputWithUnit` does not pass over `digits` to its `TextInput`.
- `TextInput` React component with text area.
- Add keyboard accessibility to `Button`s with `a` tags and no `href`.
- width error on `Checkbox` & `RadioButton` component.

## [7.1.0] - 2017-02-23

Features:
- Add digits prop to resize `TextInput`, `TextInputWithUnit` and
  `FormAmountAndCurrency`.

Fixes:
- Increase line-height on tiny `Label`.

## [7.0.0] - 2017-02-22

Breaking changes:
- The `FormAmountAndCurrency` has new props.
  To be retro-compatible you should, in your app's components:
  - Rename `value` to `currencyValue`.
  - Rename `amount` to `currencyAmount`.
  - Add the `tiny` boolean prop.
  - Replace `import FormAmountAndCurrency` by
    `import { FormAmountAndCurrency }`.
- The `SelectWithState` has a new default size and export.
  To be retro-compatible you should, in your app's components:
  - Add the `tiny` boolean prop if the component does not have `big` set
    to `true`.
  - Remove the `big` boolean prop.

Fixes:
- Change font-size for `TextInputWithUnit` component.
- Remove unknown props from `RadioButton`, `KarlHeader`,
  `KarlHeaderWhenLogged`, `HeaderTitles` and `LoudspeakerIllustration`.

## [6.4.0] - 2017-02-20

Feature:
- Add new `TextInputWithUnit` React component.

Fixes:
- Make unit from text input extensible according to its child.
- Add missing props to `Tooltip` component.

## [6.3.0] - 2017-02-17

Features:
- Add new `Line` React component.
- Add new `Line` component.
- Add new `InformationBox` React component.

Fix:
- Change the font size and the margin bottom in `k-Hero`.

## [6.2.0] - 2017-02-16

Feature:
- Add `big` prop to `k-Select`.

## [6.1.0] - 2017-02-14

Features:
- Add click handler on `CallToActionPopover` buttons.
- Add new `TextInputWithLimit` React component.
- Add new modifier `k-TitleWithAction--withoutMargin` in `k-TitleWithAction`.

Fixes:
- Bring back `@include k-Tooltip;` in `_components.scss`.
- Text sizing in `k-Hero`.
- Images and text placement in `k-Teaser`.
- Set placeholder color in `k-TextInput`.

## [6.0.0] - 2017-02-08

Breaking change:
- Rename `autoTriggerEnhancer` to `triggerEnhancer`.

Feature:
- Add prop to `triggerEnhancer` to enable autorun.

## [5.10.0] - 2017-02-07

Features:
- Add new `Progress` React component.
- Add 'PhoneIllustration' React component.

Fixes:
- Propagate props from `CallToActionPopover` to `Popover` components.
- Add key to buttons rendering in `CallToActionPopover`.

## [5.9.0] - 2017-02-06

Features:
- Add new `TextInput` React component.
- Add `autoTriggerEnhancer` high-order component.

## [5.8.0] - 2017-02-06

Features:
- Add new `LoudspeakerIllustration` React component.
- Add new `Popover` React component.
- Add new `CallToActionPopover` React component.
- Add `rowClassName` prop on `SideGrid` component.
- Add `className`, `titleClassName` and `subtitleClassName` props
  on `HeaderTitles`.
- Add `quintuple` utilities in `k-utilities-margin`.

Fixes:
- Vertically align buttons to the middle of the line.
- Remove pointer-events on `k-Header__item--centered`.

## [5.7.0] - 2017-02-02

Features:

- Add new display utility (`k-u-hidden`).
- Add `centered` option to `HeaderItem` component.
- Add new `FormRow` React component.
- `TabBar` React component with new html structure.
- Add `react-markdown` and `json-loader` to manage HTML props.
- Add `Label` React component.
- Add modifiers `big` and `icon` on `TagButton`.
- Add new `VisaIcon` React component.

Fixes:
- Fix flexbox on `k-SideGrid` and `k-VerticalGrid`.
- Update hover background-color for `LinkBox`.
- Update disabled color for `Select`.

## [5.6.0] - 2017-01-30

Features:
- Add `className` prop on `Checkbox` component.
- Add `inputClassName` prop on `RadioButton` and `Checkbox` components.
- Add new `TagButton` React component.

## [5.5.0] - 2017-01-25

Features:
- Add deprecated function.
- Add `quadruple` utilities in `k-utilities-margin`.
- Add elements in `k-Header`.
- Add container in `k-VerticalGrid`.
- Add styles on `k-Checkbox`.
- Add `children` props to `Checkbox`.
- Add new `HeaderTitles` component.
- Add new `Title` React component.
- Add new `Paragraph` React component.
- Add new `HeartIcon` React component.
- Add new `Button` React component.
- Add new `HeaderLogo` React component.

Fixes:
- `RadioButton` uses children to display content.
- Fix flex in `k-Header`.
- Fix aside `flex-direction` in `k-SideGrid`.
- Remove overflow on `k-Row`.
- Change transition on `k-RadioButton`.
- Change `k-LinkBox` display before `m` version.
- Change `k-SingleColumn` width according to the media.
- Update color for placeholder on disabled `Text-input`.
- Update color `Checkbox` disabled.
- Update color `RadioButton` disabled.
- Change default port in development from 3000 to 3003. You should now

## [5.4.0] - 2017-01-17

Features:
- Add new `RadioButton` React component.
- Add new `Header` React component.
- Add new `SideGrid`, `SideGridContent` and `SideGridAside` components.
- Add new `upcaseFirst()` string helper.
- Add new `initialTouched` and `requiredDurationError` props to `LoanSimulator`.

## [5.3.0] - 2017-01-16

Features:
- Add new `Checkbox` React component.
- Add new `FormActions` React component.
- Add new `Grid` and `GridCol` React components.

Fixes:
- At xxs, use thinner gutters.
- Override bootstrap on blockquotes in `k-Testimony__text`
  and `k-PressQuotes__quote__text`.

## [5.2.0] - 2017-01-12

Features:
- Add `primary-6` color.
- Introduce `k-Teaser__col--start@l` to fix ordering of columns on `k-Teaser`.

Fixes:
- Add default margins to `.k-PressQuotes__title` and
  `.k-titleWithActions__title`.
- Testimony row is larger on xxs.
- Vertical align on `k-LinkBox__paragraph`.
- Add default colors to `k-Row`.

## [5.1.0] - 2017-01-11

Features:
- Add `k-Select__label` to `k-Select`.
- Add `labelText` option to `SelectWithMultiLevel`.
- Add new `k-SideGrid` component.

Fixes:
- Change font size in `k-LoanSimulator__commission`.
- Change `k-SingleColumn` width according to the media.

## [v5.0.0] - 2017-01-09

Breaking changes:
- Remove the fixed size on the LinkBox.

Features:
- Add new `k-Tooltip` React component.
- Add new `k-TooltipIcon` component.
- Handle multi-level options in the Select.
- Select can now be clearable, searchable, and multi.
- Add new `k-VerticalGrid` component.
- Add new `k-FormActions` component.
- Add new `k-Switch` React component.
- Add new `Stepper` component.
- Add new `ArrowIcon` and `CheckedIcon` components.

Fixes:
- Disable React on Rails console traces in dev style guide.
- Make radio button and checkbox accessible by keyboard.
- Fix Warning on default commissionRules prop type for LoanSimulator.
- Disable React on Rails console traces in dev style guide.
- Use new files architecture for stylesheets:
  * Remove `atoms`, `molecules` and `organisms` directories.
  * Use `components` directory instead to match javascripts files architecture.

## [v4.4.0] - 2016-12-27

Features:
- Add `commissionRules` prop to `LoanSimulator`.

Fixes:
- Fix Loan simulator initial installment tooltip placement.

## [v4.3.0] - 2016-12-26

Features:
- Add `isExternal` option to `LinkBox`.

Fixes:
- Change some styles on `k-LinkBox`.
- Fix text-decoration in `k-Paragraph__link` and `k-BulletList__link`.

## [v4.2.0] - 2016-12-23

Features:
- Add links item in `k-BulletList` et `k-Paragraph`.

## [v4.1.0] - 2016-12-21

Features:
- Add `k-u-margin` for margins.
- Add modifier `k-buttonIcon--micro` on `k-ButtonIcon`.
- Add `initialInstallment` option to `LoanSimulator`.
- Add modifier `k-Row--lightTopBorder` on `k-Row`.

Fixes:
- Move `babel-preset-airbnb` module from `devDependencies` to `dependencies`.
- Fix image width on `.k-Footer__logo__img > img`.

## [v4.0.0] - 2016-12-20

Breaking changes:
- Remove `k-TypographyScale`.

Features:
- Add test setup.
- Add small radio buttons label.
- Add small paragraph for radio buttons containers.
- Add large bullet list.
- Add `k-Title` to style titles.
- Add `k-Paragraph` to style paragraphs.
- Add new `LinkBox` React component.
- Add new `DocLinkBox` React component.
- Add `k-FormComposer` component.
- Add new `FormAmountAndCurrency` React component.
- Add new `FormPhoneNumber` React component.
- Add new `k-Button--carbon` and `k-ButtonIcon--carbon`.
- Add hidden input to fetch `duration` data in `k-LoanSimulator` component.
- New `DevGrid` React component and new CSS components `k-DevGrid` and
  `k-DevBreakpoint`.
- Add `k-SingleColumn` molecule.
- Add `build:dev`, `build`, and `hot-assets` scripts to the root `npm run`.

Fixes:
- Change font color for disabled elements on checkboxes and radio buttons.
- Change font color for pressed elements on checkboxes and radio buttons.
- Change font type for radio buttons.
- Change font and font size of small checkboxes.
- Remove hover on radio buttons and checkboxes.
- Change large paragraph font size for radio buttons containers.
- Remove loan simulator left margins.
- Fix unit size on `k-TextInputWithUnit`.

## [v3.1.0] - 2016-12-08

Features:
- Add commission displaying to class `LoanSimulator`.
- Add text inactive style `k-u--inactive`.
- Add text active style `k-u--active`.
- Add commission style `k-LoanSimulator__commission`.
- Add `bin/install` and `bin/cleanup`.

Fixes:
- Fix dependencies paths.
- Remove unused sassy-maps option in package.

## [v3.0.0] - 2016-12-08

Breaking changes:
- Rename module from `kitten` to `kitten-components` to publish the module to
  the npm public registry. You have to update your `package.json` and reinstall
  all your node modules with `bin/install`.
- Rename class `k-Button--default` to `k-Button--hydrogen`.
- Rename class `k-Button--primary` to `k-Button--helium`.
- Rename class `k-Button--secondary` to `k-Button--lithium`.
- Rename class `k-Button--secondaryOnWhite` to `k-Button--beryllium`.
- Rename class `k-Button--zinc` to `k-Button--boron`.
- Delete `k-LabelWithInfo` component.

Features:
- Add `k-LinkBox` component.
- Add modifier `k-LinkBox--withIcon` on `k-LinkBox`.
- Add `k-RadioButton` component.
- Add `k-BulletList` component.

## [v2.0.0] - 2016-11-29

Breaking changes:
- Remove support for npm 2. You need to upgrade to npm 3 and reinstall all your
  node modules.

Features:
- Add `kitten-launcher` module in dummy app `package.json` to manage client
  front stack dependencies (Webpack, plugins and loaders).
- Add `spec/dmmy/bin/install` to install dependencies in dummy app.

Fixes:
- Move `kitten` dependencies from client app to main `package.json`.
- Update `npm-link` command from `preinstall` script to `postinstall` script in
  dummy app.

## [v1.2.2] - 2016-11-23

Fixes:
- Fix `this.dispatchEvent` in component `Tour`.

## [v1.2.1] - 2016-11-22

Breaking changes:
- Remove height declaration on `k-Header__logo`.
- To add autoprefixer in your Webpack config, you must:
  * Use `npm install postcss-loader --save` in your client folder
  * Update your Webpack config with:

```js
…
const autoprefixer = require('autoprefixer')
…
module: {
loaders: [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
  },
]
},
postcss: [ autoprefixer({ browsers: ['> 5%', 'ie >= 10', 'ios_saf >= 9'] }) ],
…
```

Fixes:
- Add autoprefixer in Webpack to fix styles on old browsers.
- Fix `k-ButtonWithBadge` for IE 10.
- Change `images/brand/lendopolis.svg` to fix height.
- Change syntax of dispatch event to fix on old IE.

## [v1.1.1] - 2016-11-18

Fixes:
- Fix buttonIcon size on Safari 9 (min-width: auto support).
- Better computation for phone dropdown position.
- Add class k-ButtonIcon--verticalArrow on k-ExternalRichLink.

## [v1.1.0] - 2016-11-16

Features:
- Add `onToggle` to Dropdowns.
- Update `k-Tour` popover positioning.

Fixes:
- Change class k-ButtonIcon--dropdown to k-ButtonIcon--horizontalArrow.
- Add class k-ButtonIcon--verticalArrow.

## [v1.0.1] - 2016-11-16

Fixes:
- Popover bottom navigation fixed.
- Fix on Header.

## [v1.0.0] - 2016-11-16

Features:
- Add prop `closeEvents` to close the dropdowns.
- Add new class `k-HorizontalNav__element` (to handle displaying issue on IE).
- Add new class `k-HorizontalNav__element--fixedSize` (to handle displaying
  issue on IE).
- Add new class `k-Header__item--fixedSize` (to handle displaying issue on IE).
- Add listeners to `k-PhoneDropdown` to handle positioning.
- Update `k-UserMenu` to handle positioning when receiving new props.
- Remove styles on `k-PhoneDropdown`.

Fixes:
- Fix button icons alignment (for Firefox).
- Fix `k-Popover` display on IE.

## [v0.21.1] - 2016-11-15

Fixes:
- Do not iterate on NodeLists (for Safari).
- Fix `k-UserMenu` state when dropdown is closed.
- Fix SearchInput SVG alignment (for Safari).
- Fix `k-PhoneDropdown` state when dropdown is closed.
- Force font-family on `k-Tour__popover`.
- Fix box-sizing on `k-Button__icon`.

## [v0.21.0] - 2016-11-15

Features:
- Add `box-sizing` declaration in `k-Tour`.
- Add `font-family` declaration in `k-Select`.
- Hide `k-UserMenu` arrow on xxs media query.

## [v0.20.0] - 2016-11-14

Features:
- Add secondary colors.
- Update `k-Tour` buttons and animation delay.

## [v0.19.0] - 2016-11-14

Features:
- Add component `k-PhoneDropdown`.
- Add new helper `getComputedLeft` on `ElementHelper`.
- Add text utilities classes: `k-u-small` and `k-u-strong`.
- Add `k-dropdownArrow` helper.

Breaking changes:
- Rename `SimpleList` to `NavList`.
- Rename `k-Dropdown` props: `contentHorizontalPosition`
and `arrowHorizontalPosition`.

## [v0.18.0] - 2016-11-14

Features:
- Add prop `useStore` to `k-Tour` component for testing.

## [v0.17.1] - 2016-11-14

Fixes:
- Small fixes on `k-Tour` animation and css.

## [v0.17.0] - 2016-11-10

Breaking changes:
- Add "svg-react-loader": "^0.3.7", to your package.json to compile assets with
Webpack

Features:
- Add component `k-HeaderTour` and `k-Tour`

## [v0.16.0] - 2016-11-10

Breaking changes:
- Update `UserMenu`:
  * Add modifier `k-UserMenu--withoutBorderTop` on `k-UserMenu`.
- Remove `k-UserMenu__separation` and
  replace by `k-UserMenu__borderTop`, `k-UserMenu__borderBottom`.

## [v0.15.1] - 2016-10-02

Fixes:
- Small fixes on header:
  * Fix `k-TextInput` and `k-SearchInput` sizes.
  * Update `Search` component examples.

## [v0.15.0] - 2016-10-02

Breaking changes:
- Update `k-SearchInput` molecule:
  * Use a `<button>` tag instead of an `<input type="submit">`.
- Update `Dropdown` component:
  * Add `dropdownContent` prop instead of generating a list inside the
    `Dropdown` component.
  * Remove `dropdownList` and `dropdownListClassName` props.
- Extract `UserMenu` logic from `Dropdown` component:
  * Add new `UserMenu` component.
  * Remove some props in `Dropdown` component:
    - `notifications`
    - `buttonTemplate`
    - `srcImg`
    - `widthImg`
    - `heightImg`
    - `altImg`
    - `text`
    - `title`
    - `textClassName`
  * Add new callback in `Dropdown` component: `onPositionUpdate`.

Features:
- Add new React component `Search`.

## [v0.14.0] - 2016-10-31

Features:
- Add modifier `k-PlatformSwitch--withoutBorderTop` on `k-PlatformSwitch`.
- Add component `k-Popover`.
- Update KissKissBankBank and hellomerci svg logos.
- Update `k-Grid` max-width from `1420px` to `1440px`.
- Remove `k-ButtonIconWords` and use `k-Button--icon` modifier instead.

Fixes:
- Fix `SelectWithState` component onChange callback (remove all underscores in
  component props names).
- Rename `.k-ButtonImageWithText__text--withoutMarginRight` to
         `.k-ButtonImageWithText__text--withoutPaddingRight`

## [v0.13.0] - 2016-10-21

Breaking changes:
- Update animation on `k-Dropdown__button--rotationOnExpanded`:
  * Requires `k-Dropdown__button__svgPath` and `k-Dropdown__button__svgPathRight`
- Add modifier `k-Header__userMenuText--withEllipsis` on `k-Header`.

Features:
- Close `k-Dropdown` when clicking on a link.

Fixes:
- Fix `SelectWithState` component `onChange` callback.

## [v0.12.0] - 2016-10-19

Breaking changes:
- Remove configuration maps for:
  * k-TabBar
  * k-HorizontalNav
- Add modifier `k-ButtonIcon--dropdown` on `k-ButtonIcon`.

Features:
- Update `k-TabBar` molecule:
  * Use flex display.
  * Remove `k-TabBar__item--singleLine` modifier class (it doesn't break the
    layout).
- Enable props propagation on `k-PlatformSwitch` molecule.

Fixes:
- Remove notification badge on `k-UserMenu` when there is no notification.

## [v0.11.0] - 2016-10-19

Breaking changes:
- Remove configuration maps for:
  * k-Button
  * k-ButtonIcon
  * k-ButtonTag
- Apply colors styles in separate modifiers. It required html updates on:
  * k-Button
  * k-ButtonIcon
  * k-ButtonTag

Updates:
- Remove configuration maps for:
  * k-ButtonImage (it was not used)

## [v0.10.0] - 2016-10-18

Breaking changes:
- Update `k-ButtonIcon`
  * requires new colors map
- Update `k-ButtonIconWords`
  * requires new colors map
- Remove configuration maps for:
  * k-Checkbox
  * k-Label
  * k-TextInput
  * k-Badge
  * k-TypographyBodyCopy
  * k-TypographyScale
  * k-ButtonImageWithText
  * k-Card
- Add a secondary item style on `k-UserMenu`
  * requires a new colors map
- Remove class `k-ExternalRichLink__element--pull-end`.
- Update `k-Header` atom:
  * Add more classes: `k-Header__nav__item` ; `k-Header__logo` ;
    `k-Header__item__logo` ; `k-Header__button` ; `k-Header__items--fixedSize`
- Update `k-ButtonImageWithText`:
  * Add `k-ButtonImageWithText__text--withoutMarginRight`
- Update `k-Dropdown` organism:
  * Add animation with `k-Dropdown__button__svgPath` and
    `k-Dropdown__button__svgPathRight`
- Update `k-TabBar` molecule with new class `k-TabBar__item--singleLine`.

New features:
- Add new `k-ButtonTag` atom.
- Add new helper `k-Button__svg`.
- Add new colors map for social networks `k-ButtonIcon`.
- Add new `k-ButtonIconWords` (still in progress).
- Add new helper `k-media-max`.

## [v0.9.0] - 2016-10-11

Breaking changes:
- Rename the `hot_output_bundles` to `kitten_hot_output_bundles`.
- Update `k-TestimonyList__row` molecule's HTML
  * required new `TestimonyList__row` container

New features:
- Add themes color map for the style guide.

Fixes:
- Dropdown component alignment.

## [v0.8.0] - 2016-10-07

Breaking changes:
- Change dummy stylesheets file architecture.
- Remove `k-GridDuo` molecule.
- Use `therubyracer` instead of `mini_racer`.
- Update `k-Header` molecule's HTML
  * required new `__container`
  * replace `__grid` by `__row`
  * remove `k-Header__items--pull-end`
- The `k-LinkList` molecule requires new arguments.

New features:
- Add new `k-Teaser` molecule.
- Add new `k-titleWithActions` molecule.
- Add new `k-PressQuotes` molecule.

## [v0.7.0] - 2016-10-03

Breaking changes:
- Loan Slider requires new props since it does not show fees anymore.
- Use [Webpack](https://webpack.github.io/) to build js and css assets in dummy.
- Use [React on Rails](https://github.com/shakacode/react_on_rails) to manage
  React components (client and server sides) in dummy.
- Migrate all js into es6 classes or modules.

New features:
- Grid overlay on the style guide when pressing ctrl+g.
- Add pages that serve as full-page previews for tests in the style guide.
- Add branding section on styleguide.
- Add grid on styleguide.
- Update menu behaviour on styleguide.
- Add new `Badge` atom.
- Add new `ButtonWithBadge` molecule.
- Add new `ButtonImageWithText` molecule.
- Add new `SliderTooltip` molecule.
- Add new `Grid` molecule.
- Add new `Select` molecule.
- Add new `SelectWithState` JavaScript component.
- Add new `LinkList` molecule.
- Add new `Footer` molecule.
- Add new `TextInputWithButton` molecule.
- Add new `Checkbox` atom.
- Add media-queries helpers.
- Update `Testimonies` molecule positionning and styles.
- Update `TextInput` atom font-size.
- Update `Hero` molecule media-queries.

Fixes:
- Computes position of `UserMenu` in `Header` organism.
- Fixes small bugs on header (responsive, IE11, dropdown opening)
- Simpler "production" setup for the dummy app.
- Small updates on the styleguide.

## [v0.6.2] - 2016-08-23

Fixes:
- Add config, public and vendor folders in gem package.

## [v0.6.1] - 2016-08-23

Fixes:
- Move JavaScript imports for the styleguide to the dummy app.

## [v0.6.0] - 2016-08-23

New features:
- Add new component: `grid-duo` molecule.
- Add new text/align utility.

Fixes:
- Add susy as regular dependency in npm module.
- Add app folder to gem package.
- Remove `publishConfig` attribute in `package.json`.
- Remove `npm link kitten`.

## [v0.5.0] - 2016-08-22

Breaking changes:
- Requires applications to use webpack to compile assets.
- Requires a global `$k-typography: k-typography-definition((…))` instead of
  passing typography styles in mixins.
- Move all styleguide stylesheets into dummy app for testing.
- Remove components from `kitten` import.
- Change some styles for `ButtonImage` and `ButtonIcon`.
- If you are serving the engine in your routes make sure you add
  `if Rails.env.development?` if you don't want to serve it in production.

New features:
- Add gem configuration options.
- Add webpack to manage `kitten` scss assets in dummy app.
- Add new component: `Header` organism
- Add new component: `Testimonies` molecule
- /kitten/playground route in the styleguide to test your styles in development
- Access components directly by removing the `#` in the styleguide in URL
- Add new component: `Tabbar` molecule.
- Add new component: `UserMenu` molecule.
- Add new component: `TextInput` atom.
- Add new component: `SearchInput` molecule.
- Add new component: `PlatformSwitch` molecule.
- Ignore playground changes in git (requires to type `rake` in development)
- Add new component: `Hero` molecule.
- Add new component: `Card` molecule.
- Add Susy library to handle grid sizes.
- Add new component: `Row` molecule.
- Add image assets management in dummy webpack configuration.
- Add webpack asset path helper.

Fix:
- Loan Simulator does not show Infinty durations when pressing enter.

## [v0.4.0] - 2016-08-04

Minor updates:
- Update `@group` property in SassDoc comments.
- Update npm module exposed variables: it now returns an array of `loadPaths`
  instead of a function.

New features:
- Add new component: `HorizontalNav` molecule.
- Add javascript on `LoanSimulator` organism with React.
- Add new css structure on styleguide.

## [v0.3.0] - 2016-08-01

New features:
- Add new component: `LoanSimulator` organism.
- Add new validation system.
- Add styleguide routing, controllers and views.
- Update @import strategy.
- Add npm module configuration.

Fix:
- Remove [Slim](http://slim-lang.com/) templating.

## [v0.2.0] - 2016-07-20

New features:
- Add new component: `Button` atom.
- Add `.scss` samples to make a new component creation easier.

Fix:
- Update release task to match with `master` branch.

## [v0.1.0] - 2016-07-05

New features:

- Add Sass schema (inspired from JSON schema).
- Add typography mixins and helpers.
- Add dummy application to test the library.
- Add SassDoc.
