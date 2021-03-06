Rails.application.routes.draw do
  post 'api/v1/login', to: 'api/v1/sessions#create'
  delete 'api/v1/logout', to: 'api/v1/sessions#destroy'
  get '/api/v1/current_user', to: 'api/v1/sessions#is_logged_in?'
  namespace :api do
    namespace :v1 do
      resources :contents
      resources :favorited_contents
      resources :users do
        resources :favorited_contents
      end
      resources :accounts do
        resources :users
      end
    end
  end
end
