Kitten::Engine.routes.draw do
  if Rails.env.development?
    get 'sassdoc', to: redirect('/sassdoc/index.html')

    namespace :atoms do
      get 'typography/:atom_name' => 'typography#show'
      get 'buttons/:atom_name'    => 'buttons#show'
    end
  end
end
