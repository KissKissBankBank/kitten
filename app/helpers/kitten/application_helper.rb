module Kitten
  module ApplicationHelper
    def styleguide_stylesheet_tag
      path = Kitten.configuration.styleguide_stylesheet_path

      if Kitten.configuration.webpack
        return stylesheet_link_tag *webpack_asset_paths(path, extension: 'css')
      end

      stylesheet_link_tag(path)
    end
  end
end
