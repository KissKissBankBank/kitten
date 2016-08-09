module Kitten
  module ApplicationHelper
    def app_stylesheet_tag
      path = Kitten.configuration.app_stylesheet_path

      return if path.nil?

      if Kitten.configuration.webpack
        return stylesheet_link_tag *webpack_asset_paths(path, extension: 'css')
      end

      stylesheet_link_tag(path)
    end
  end
end
