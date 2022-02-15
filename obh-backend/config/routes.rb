Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :favorited_contents
      resources :contents
      resources :users
      resources :accounts
    end
  end
end
