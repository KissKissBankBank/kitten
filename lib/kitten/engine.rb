require 'rails'

module Kitten
  # Engine settings.
  class Engine < ::Rails::Engine
    isolate_namespace Kitten

    # Add kitten stylesheets paths to app assets paths.
    initializer :append_kitten_paths do |app|
      %w(stylesheets).each do |directory|
        app.config.assets.paths << root.join('assets', directory).to_s
      end
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
