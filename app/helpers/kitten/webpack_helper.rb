module Kitten
  module WebpackHelper
    def webpack_js_tags(entry_point)
      webpack_assets_tags(entry_point, 'js')
    end

    def webpack_css_tags(entry_point)
      webpack_assets_tags(entry_point, 'css')
    end

    def webpack_assets_tags(entry_point, asset_type)
      paths = webpack_asset_paths(entry_point, extension: asset_type).map do |path|
        "#{webpack_assets_host}#{path}"
      end

      return javascript_include_tag *paths if asset_type == 'js'
      return stylesheet_link_tag *paths    if asset_type == 'css'
    end

    def webpack_assets_host
      # webpack-rails provides a `webpack_asset_paths` helper. This latter only
      # outputs a relative path when we are on production.
      # As we serve assets through Cloudfront CDN, we need to append the CDN URL
      # in the asset paths.
      served_by_asset_host? ? Kitten.configuration.asset_host : ''
    end

    def served_by_asset_host?
      Kitten.configuration.asset_host && Rails.env.production?
    end
  end
end
