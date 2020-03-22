Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :product_lines, param: :id
      resources :products, param: :id
      resources :reviews, only: [:create, :destroy]
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
