Rails.application.routes.draw do
  root 'application#home'

  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/signout' => 'sessions#destroy', as: 'signout'

  get '/auth/google_oauth2/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/')

  resources :users, only: [:index, :new, :create, :show] do
    resources :funds
  end

  resources :investments, only: [:index, :new, :create, :show]
end
