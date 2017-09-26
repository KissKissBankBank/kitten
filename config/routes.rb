Kitten::Engine.routes.draw do
  get '/sassdoc', to: redirect('/sassdoc/index.html')

  get '/', to: redirect('components')
  get 'components' => 'components#index'
  get 'components/:group/:name' => 'components#show'
  get 'pages/:name' => 'pages#show'
  get 'playground' => 'playgrounds#show'
  get 'about' => 'about#index'
end
