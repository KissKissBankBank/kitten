Dummy::Application.configure do
  config.cache_classes               = true
  config.eager_load                  = true
  config.consider_all_requests_local = false

  config.action_controller.perform_caching = true

  config.active_support.deprecation                = :notify
  config.active_record.dump_schema_after_migration = false

  config.serve_static_files = ENV['RAILS_SERVE_STATIC_FILES'].present?

  config.assets.js_compressor = :uglifier
  config.assets.compile       = false
  config.assets.digest        = true

  config.log_level     = :debug
  config.log_formatter = ::Logger::Formatter.new

  config.i18n.fallbacks = true
end
