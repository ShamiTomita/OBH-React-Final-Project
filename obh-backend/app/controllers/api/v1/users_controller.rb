class  Api::V1::UsersController < ApplicationController
skip_before_action :verify_authenticity_token
  def create
    @user = User.create(user_params)
    if @user.valid?
      render json:{user: UserSerializer.new(@user)}, status: :created
    else
      render json:{error: 'failed to create user'}, status: :not_acceptable
    end
  end

  def index
    if !!params[:account_id]
      accountid = params[:account_id].to_i
      users = []
      User.all.each do |user|
        if user.account_id === accountid
          users << user
        end
      end
      render json: UserSerializer.new(users)
    else
      users = User.all
      render json: UserSerializer.new(users)
    end
  end

  def show
    user = User.find_by(id: params[:id])
    options = {include: [:favorited_contents, :contents]}
    render json: UserSerializer.new(user, options)
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json:  { data: "User successfully destroyed" }, status: :ok
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :account_id)
  end
end
