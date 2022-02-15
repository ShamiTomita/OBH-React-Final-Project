class FavoritedContentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :content_id
  belongs_to :user
  belongs_to :content
end
