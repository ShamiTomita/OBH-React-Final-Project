class FavoritedContentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :content_id
end
