require 'rails'

module Kitten
  # Engine settings.
  class Engine < ::Rails::Engine
    isolate_namespace Kitten

    # Add asset paths to the app.
    initializer :append_kitten_paths do |app|

      # Kitten assets
      app.config.assets.paths += [
        root.join('assets', 'images').to_s,
        root.join('assets', 'javascripts').to_s,
      ]

      Rails.application.config.assets.precompile += %w(
        kitten/jquery-3.1.0.min.js
        kitten/noframework.waypoints.min.js
        kitten/waypoint.js
        kitten/dropdown.js
        kitten/karl.js
      )
    end

    # Merge kitten /public directory to app /public directory at runtime.
    # We use the /public directory to host SassDoc.
    initializer :static_assets do |app|
      if Rails.application.config.serve_static_assets
        app.middleware.insert_before(::ActionDispatch::Static,
                                     ::ActionDispatch::Static,
                                     "#{root}/public")
      end
    end

    config.generators do |g|
      g.test_framework      :rspec,        fixture: false
      g.fixture_replacement :factory_girl, dir:     'spec/factories'
      g.assets false
      g.helper false
    end
  end
end
