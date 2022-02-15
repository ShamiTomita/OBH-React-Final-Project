Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :contents
      resources :users do
        :favorited_contents
      end
      resources :accounts do
        resources :users
      end
    end
  end
end
