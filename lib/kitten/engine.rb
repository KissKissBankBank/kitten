require 'rails'

module Kitten
  # Engine settings.
  class Engine < ::Rails::Engine
    isolate_namespace Kitten

    initializer :append_kitten_paths do |app|
      %w(stylesheets).each do |directory|
        app.config.assets.paths << root.join('assets', directory).to_s
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
