module Kitten
  module ApplicationHelper
    def app_stylesheet_tag
      path = Kitten.configuration.app_stylesheet_path
      stylesheet_link_tag *webpack_asset_paths(path, extension: 'css')
    end
  end
end
