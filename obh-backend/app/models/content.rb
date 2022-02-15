class Content < ApplicationRecord
  has_many :favorited_contents
  has_many :users, :through => :favorited_contents
end
