Rails.application.routes.draw do

root :to => 'birds#index'
resources :birds
resources :eggs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
