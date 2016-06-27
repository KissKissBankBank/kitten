Rails.application.routes.draw do
  mount Kitten::Engine, at: '/kitten'

  namespace :atoms do
    get '/typography/:atom_name' => 'typography#show'
  end
end
