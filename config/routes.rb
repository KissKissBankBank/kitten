Kitten::Engine.routes.draw do
  if Rails.env.development?
    get '/sassdoc', to: redirect('/sassdoc/index.html')
  end
end
