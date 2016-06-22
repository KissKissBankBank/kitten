# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'kitten/version'

Gem::Specification.new do |spec|
  spec.name          = "kitten"
  spec.version       = Kitten::VERSION
  spec.authors       = ["Fanny Cheung"]
  spec.email         = ["fanny@ynote.hk"]

  spec.summary       = %q{TODO: Write a short summary, because Rubygems requires one.}
  spec.description   = %q{TODO: Write a longer description or delete this line.}
  spec.homepage      = "TODO: Put your gem's website or public repo URL here."

  # This is a Rails engine, so, yeah.
  spec.add_dependency 'rails'

  # Dummy app database
  spec.add_dependency 'sqlite3'

  # Sass dependencies
  spec.add_runtime_dependency 'sass', '>= 3.3.0'
  spec.add_runtime_dependency 'sassy-maps', '~>0.3.2'

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com' to prevent pushes to rubygems.org, or delete to allow pushes to any server."
  end

  spec.add_development_dependency "bundler", "~> 1.8"
  spec.add_development_dependency "rake", "~> 10.0"
end
