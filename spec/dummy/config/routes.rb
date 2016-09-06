Rails.application.routes.draw do
  mount Kitten::Engine, at: '/kitten'

  get '/', to: redirect('kitten')
end
