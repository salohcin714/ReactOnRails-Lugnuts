Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1 do
      resources :product_lines, param: :id, defaults: {format: :json}
      resources :products, param: :id, defaults: {format: :json}
      resources :reviews, only: [:create, :destroy], defaults: {format: :json}
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
      get :search, to: "products#search"
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
