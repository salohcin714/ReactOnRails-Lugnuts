Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get '/products', to: 'products#index'
      get 'products/show/:id', to: 'products#show'
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
