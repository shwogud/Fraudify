Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    resources :playlists, only: [:index, :create, :show, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :playlist_songs, only: [:show, :create, :destroy]

    get '/whole_song/:id', to: 'songs#whole_song_show'

  end

  root "static_pages#root"
end
