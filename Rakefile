begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

require 'rspec/core'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

APP_RAKEFILE = File.expand_path('../spec/dummy/Rakefile', __FILE__)

load 'rails/tasks/engine.rake'

Bundler::GemHelper.install_tasks

require 'rake/testtask'

task default: :spec

desc 'Generate kitten SassDoc'
task :sassdoc do
  puts 'Generating kitten SassDoc...'
  `sassdoc -d public/sassdoc assets/stylesheets`
end
