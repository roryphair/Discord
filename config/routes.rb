Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do 
      resources :direct_messages, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :index, :show, :destroy] do 
      resources :channels, only: [:create, :index]
    end
    resources :channels, only: [:destroy, :show, :update] do 
      resources :channel_messages, only: [:create, :index]
    end
    resources :server_users, only: [:create]
    delete '/server_users', to: 'server_users#destroy'
    post '/direct_messages_first', to: 'direct_messages#create_first'
    resources :direct_messages, only: [ :destroy, :update]
    resources :channel_messages, only: [:destroy, :update]
  end
  mount ActionCable.server => '/cable'
end
