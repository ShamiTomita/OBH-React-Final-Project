class User < ApplicationRecord
  belongs_to :account
  has_many :favorited_contents
  has_many :contents, :through => :favorited_contents
  validates: :name, presence:true
end
