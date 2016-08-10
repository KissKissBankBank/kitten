Kitten::Engine.routes.draw do
  if Rails.env.development?
    get '/sassdoc', to: redirect('/sassdoc/index.html')

    get 'components' => 'components#index'
    get 'components/:type/:group/:name' => 'components#show'
    get 'playground' => 'playgrounds#show'
  end
end
