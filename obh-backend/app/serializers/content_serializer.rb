class ContentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :year, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, :country, :poster, :imdbRating, :content_type
end
