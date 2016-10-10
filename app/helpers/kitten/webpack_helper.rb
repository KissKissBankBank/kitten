module Kitten
  module WebpackHelper
    def kitten_hot_output_bundles
      port = ENV['HOT_RAILS_PORT'] || 3500

      Kitten.configuration.webpack_output_bundles.map do |bundle|
        "http://localhost:#{port}/#{bundle}"
      end
    end
  end
end
