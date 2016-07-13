begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

# Specs
require 'rspec/core'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

# Engine
APP_RAKEFILE = File.expand_path('../spec/dummy/Rakefile', __FILE__)
load 'rails/tasks/engine.rake'

# Bundler
Bundler::GemHelper.install_tasks

require 'rake/testtask'

task default: :spec

desc 'Generate kitten SassDoc'
task :sassdoc do
  puts 'Generating kitten SassDoc...'
  `npm run sassdoc`
end

desc "Generate documentation, commit, create tag v#{Kitten::VERSION}, " \
     'build and push (make sure you update version.rb and Changelog.md ' \
     'beforehand)'
task kitten_release: [:sassdoc, :build] do
  sh 'git add lib/kitten/version.rb CHANGELOG.md public/sassdoc/index.html'
  sh "git commit -m v#{Kitten::VERSION}"
  sh "git tag v#{Kitten::VERSION}"
  sh 'git push origin master'
  sh 'git push origin --tags'
  puts
  puts "Done! You can now upload pkg/kitten-#{Kitten::VERSION}.gem to Gemfury"
end

