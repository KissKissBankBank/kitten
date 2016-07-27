Kitten::Engine.routes.draw do
  if Rails.env.development?
    get '/sassdoc', to: redirect('/sassdoc/index.html')

    get ':type/:group/:name' => 'components#show'
  end
end
