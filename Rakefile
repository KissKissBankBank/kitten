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

desc 'Playground file'
file 'app/views/layouts/kitten/playground.html.erb' \
  => 'app/views/layouts/kitten/playground.html.erb.example' do |task|
  cp task.prerequisites.first, task.name
end

desc 'Generate kitten SassDoc'
task :sassdoc do
  puts 'Generating kitten SassDoc...'
  `yarn sassdoc`
end

desc "Generate documentation, commit, create tag v#{Kitten::VERSION}, " \
     'build and push (make sure you update version.rb, package.json ' \
     'and CHANGELOG.md beforehand)'
task kitten_release: [:sassdoc, :build] do
  sh 'bundle install'
  sh 'yarn install'

  # Commit a new version
  sh 'git add lib/kitten/version.rb *CHANGELOG.md public/sassdoc/index.html ' \
     'package.json spec/dummy/client/yarn.lock Gemfile.lock'
  sh "git commit -m v#{Kitten::VERSION}"
  sh "git tag -a v#{Kitten::VERSION} 'Version #{Kitten::VERSION}'"
  sh 'git push origin master'
  sh 'git push origin --tags'

  # Publish on npm
  sh 'npm publish'

  # Move the styleguide branch to the latest version
  sh 'git checkout styleguide'
  sh 'git merge --ff-only master'
  sh 'git push origin styleguide'
  sh 'git checkout master'

  puts
  puts "Done! kitten-components #{Kitten::VERSION} is published! 🚀"
end

task default: ['app/views/layouts/kitten/playground.html.erb',
               :spec,
               :sassdoc]
