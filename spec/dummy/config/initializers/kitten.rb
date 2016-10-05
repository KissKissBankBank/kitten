Kitten.configure do |config|
  config.webpack_output_bundles = [
    "http://localhost:3500/app-kitten.js",
    "http://localhost:3500/app-dummy.js"
  ]
end
