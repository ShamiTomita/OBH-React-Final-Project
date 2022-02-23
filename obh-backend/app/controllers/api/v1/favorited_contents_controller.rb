class  Api::V1::FavoritedContentsController < ApplicationController
skip_before_action :verify_authenticity_token
  def create

    favorited_content = FavoritedContent.create(favorited_content_params)
    if favorited_content.save
      render json:favorited_content, status: :accepted
    else
      render json: {erros: favorited_content.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def index
    if !!params[:user_id]
      userid = params[:user_id].to_i
      faves = []
      FavoritedContent.all.each do |fave|
        if fave.user_id === userid
          faves << fave
        end
      end
      render json: FavoritedContentSerializer.new(faves)
    else
      faves = FavoritedContent.all
      render json: UserSerializer.new(faves)
    end
  end

  def show
    user = User.find(user_id: params[:user_id])
    favorite = FavoritedContent.find_by(id: params[:id])
    render json: FavoritedContentSerializer.new(favorite)
  end

  def destroy
    @fave = FavoritedContent.find(params[:id])
    @fave.destroy
  end 

  private
  def set_user
    @user = User.find(params[:user_id])
  end
  def favorited_content_params
    params.permit(:user_id, :content_id)
  end
end
