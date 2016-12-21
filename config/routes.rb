Kitten::Engine.routes.draw do
  get '/sassdoc', to: redirect('/sassdoc/index.html')

  get '/', to: redirect('branding')
  get 'branding' => 'branding#index'
  get 'components' => 'components#index'
  get 'utilities' => 'utilities#index'
  get 'components/:type/:group/:name' => 'components#show'
  get 'pages/:name' => 'pages#show'
  get 'playground' => 'playgrounds#show'
end
