class FavoritedContent < ApplicationRecord
  belongs_to :user
  belongs_to :content
  validates :content_id, uniqueness: true
end
