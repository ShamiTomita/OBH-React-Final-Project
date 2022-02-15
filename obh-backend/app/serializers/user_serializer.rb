class UserSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :account
  has_many :favorited_contents
  has_many :contents, :through => :favorited_contents
  attributes :name, :account_id
end
