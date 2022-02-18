class Api::V1::AccountsController < ApplicationController

  def create
    @account = Account.new(account_params)
    @account.password = params[:password]
    if @account.save
      session[:account_id] = @account.id
      render json: {account: AccountSerializer.new(@account)}, status: :created
    else
      render json: {error: @account.errors.full_messages}, status: :not_acceptable
    end
  end

  def index
    
    @accounts = Account.all
    render json: AccountSerializer.new(@accounts)
  end

  def show
    account = Account.find_by(id: params[:id])
    render json: AccountSerializer.new(account)
  end


  private
  def set_account
    @account = Account.find(params[:id])
  end
  def account_params
    params.require(:account).permit(:username, :email, :password)
  end



end
