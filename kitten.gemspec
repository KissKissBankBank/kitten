# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'kitten/version'

Gem::Specification.new do |spec|
  spec.name          = "kitten"
  spec.version       = Kitten::VERSION
  spec.authors       = ["KissKissBankBank"]
  spec.email         = ["dev@kisskissbankbank.com"]
  spec.summary       = "Components library for Sass"
  spec.description   = "kitten is a components library for Sass.
                        It provides mixins to create flexible components based
                        on your own brand elements."
  spec.homepage      = "https://github.com/KissKissBankBank/kitten"

  # kitten needs Sass maps datatype
  spec.add_runtime_dependency 'sass', '>= 3.3.0'

  spec.files         = Dir['{lib,assets}/**/*', 'Rakefile', 'README.md']
  spec.require_paths = ["lib"]

  spec.metadata['allowed_push_host'] = "https://gemfury.com"
end
