class Account < ApplicationRecord
  has_secure_password
  has_many :users
  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
end
