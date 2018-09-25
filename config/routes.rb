Rails.application.routes.draw do
  root 'application#home'
  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/signout' => 'sessions#destroy'

  resources :funds, only: [:index, :new, :create, :show]

  resources :users, only: [:index, :new, :create, :show] do
    resources :portfolios
  end

end
