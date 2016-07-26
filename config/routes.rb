Kitten::Engine.routes.draw do
  if Rails.env.development?
    get '/sassdoc', to: redirect('/sassdoc/index.html')

    namespace :atoms do
      get '/typography/:name' => 'typography#show'
      get '/buttons/:name' => 'buttons#show'
      get '/form/:name' => 'form#show'
    end

    namespace :molecules do
      get '/form/:name' => 'form#show'
      get '/simulators/:name' => 'simulators#show'
    end

    namespace :organisms do
      get '/simulators/:name' => 'simulators#show'
    end
  end
end
