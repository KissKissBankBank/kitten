module Kitten
  class Engine < ::Rails::Engine
    initializer :append_kitten_paths do |app|
      %w(stylesheets).each do |directory|
        app.config.assets.paths << root.join('assets', directory).to_s
      end
    end
  end
end
