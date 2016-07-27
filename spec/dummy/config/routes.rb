Rails.application.routes.draw do
  mount Kitten::Engine, at: '/kitten'
end
