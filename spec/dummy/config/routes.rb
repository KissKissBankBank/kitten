Rails.application.routes.draw do
  namespace :atoms do
    get '/typography/:atom_name' => 'typography#show'
  end
end
