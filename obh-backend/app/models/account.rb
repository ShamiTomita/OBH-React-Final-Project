class Account < ApplicationRecord
  has_secure_password
  has_many :users
  validates :name, :email, presence: true
  validates :name, :email, uniqueness: true
end
