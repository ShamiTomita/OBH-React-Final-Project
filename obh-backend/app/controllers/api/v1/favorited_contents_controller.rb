class  Api::V1::FavoritedContentsController < ApplicationController

  def create
    favorited_content = FavoritedContent.create(favorited_content_params)
    if favorited_content.save
      render json:favorited_content, status: :accepted
    else
      render json: {erros: favorited_content.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def index
    favorites = FavoritedContent.all
    render json: FavoritedContentSerializer.new(favorites)
  end

  def show
    favorite = FavoritedContent.find_by(id: params[:id])
    render json: FavoritedContentSerializer.new(favorite)
  end

  private
  def favorited_content_params
    params.permit(:user_id, :content_id)
  end
end
