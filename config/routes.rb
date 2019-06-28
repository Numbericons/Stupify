Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
  #   resources :benches, only: [:index, :show, :create]
  #   resources :reviews, only: [:create]
  #   resource :favorites, only: [:create, :destroy]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:show]
    resources :playlists, only: [:show, :index, :create, :destroy] do
      resources :songlists, only: [:create, :destroy]
    end
  end
  root "static_pages#root"
end
