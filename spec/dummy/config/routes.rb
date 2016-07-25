Rails.application.routes.draw do
  mount Kitten::Engine, at: '/kitten'

  namespace :atoms do
    get '/typography/:atom_name' => 'typography#show'
    get '/buttons/:atom_name'    => 'buttons#show'
    get '/form/:atom_name'       => 'form#show'
  end

  namespace :molecules do
    get '/inputs/:molecule_name' => 'inputs#show'
    get '/form/:molecule_name' => 'form#show'
    get '/simulators/:molecule_name' => 'simulators#show'
    get '/sliders/:molecule_name' => 'sliders#show'
  end
end
