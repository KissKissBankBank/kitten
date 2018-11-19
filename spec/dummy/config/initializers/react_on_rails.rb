ReactOnRails.configure do |config|
  # Generated assets
  config.webpack_generated_files = %w[app-kitten.js]
  config.server_bundle_js_file = 'app-kitten.js'
  config.symlink_non_digested_assets_regex = nil

  config.node_modules_location = 'client' # Pre 9.0.0 always used "client"
  config.build_production_command = nil # webpack assets are handled by the CI
  config.build_test_command = nil
  config.generated_assets_dir = 'app/assets/webpack'

  # Client rendering config
  config.prerender = ENV['REACT_ON_RAILS_PRERENDER'] != 'false'
  config.trace = Rails.env.development?

  # Server rendering config
  config.development_mode = Rails.env.development?
  config.replay_console = false
  config.logging_on_server = true
  config.raise_on_prerender_error = false
end
