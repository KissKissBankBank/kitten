module Kitten
  module WebpackHelper
    def webpack_stylesheet_tags(entry_point)
      # webpack-rails provides a `webpack_asset_paths` helper. This latter only
      # outputs a relative path when we are on production.
      # As we serve assets through Cloudfront CDN, we need to append the CDN URL
      # in the stylesheet asset paths.
      host = served_by_asset_host? ? "#{Kitten.configuration.asset_host}" : ''

      paths = webpack_asset_paths(entry_point, extension: 'css').map do |path|
        "#{host}#{path}"
      end

      stylesheet_link_tag *paths
    end

    def served_by_asset_host?
      Kitten.configuration.asset_host && Rails.env.production?
    end
  end
end
