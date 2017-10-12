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

desc "Generate documentation and commit v#{Kitten::VERSION} " \
     '(make sure you update version.rb, package.json, ' \
     'CHANGELOG.md and KARL_CHANGELOG.md beforehand)'
task :kitten_prepare_release do
  sh "git checkout -b release/v#{Kitten::VERSION}"
  sh 'bin/install'
  sh 'bundle exec rake sassdoc build'

  # Commit a new version
  sh 'git add ' \
     'lib/kitten/version.rb ' \
     '*CHANGELOG.md ' \
     'public/sassdoc/index.html ' \
     'package.json ' \
     'spec/dummy/client/yarn.lock ' \
     'Gemfile.lock'
  sh "git commit -m v#{Kitten::VERSION}"
  sh 'git push origin release/v#{Kitten::VERSION}'

  puts
  puts 'Done! You can now create a release PR:'
  puts 'https://github.com/KissKissBankBank/kitten/compare/' \
       'release/v#{version}?expand=1 😸'
end

desc "Create tag v#{Kitten::VERSION}, build and push"
task kitten_release: [:sassdoc, :build] do
  sh 'git fetch origin'
  sh 'git checkout master'
  sh 'git pull origin master'

  # Create tag
  sh "git tag -a v#{Kitten::VERSION} -m 'Version #{Kitten::VERSION}'"
  sh 'git push origin --tags'

  # Publish
  sh 'bin/install'
  sh 'npm publish'

  # Move the styleguide branch to the latest version
  sh 'git checkout styleguide'
  sh 'git merge --ff-only master'
  sh 'git push origin styleguide'
  sh 'git checkout master'

  puts
  puts "Done! kitten-components v#{Kitten::VERSION} is published! 🚀"
end

task default: ['app/views/layouts/kitten/playground.html.erb',
               :spec,
               :sassdoc]
