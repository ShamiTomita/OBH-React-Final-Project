class  Api::V1::ContentsController < ApplicationController
  def index
    contents = Content.all
    render json: ContentSerializer.new(contents)
  end

  def show
    content = Content.find_by(id: params[:id])
    render json: article

  def create
    content = Content.new(content_params)
    if content.save
      render json: ContentSerializer.new(content), status: :accepted
    else
      render json: {errors: syllabus.errors.full_messages}, status: :unprocessible_entity
    end
  end
end

  private

  def content_params
    params.require(:content).permit(:title, :year, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, :country, :poster, :imdbRating, :content_type)
  end

end
