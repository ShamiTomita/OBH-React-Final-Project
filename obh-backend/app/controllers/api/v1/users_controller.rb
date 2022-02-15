class  Api::V1::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json:{user: UserSerializer.new(@user)}, status: :created
    else
      render json:{error: 'failed to create user'}, status:not_acceptable
    end
  end

  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user)
  end



  private

  def user_params
    params.require(:user).permit(:name, :account_id)
  end
end
