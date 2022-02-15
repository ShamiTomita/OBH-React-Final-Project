class Api::V1::AccountsController < ApplicationController

  def create
    @account = Account.create(account_params)
    if @account.valid?
      render json: {account: AccountSerializer.new(@account)}, status: :created
    else
      render json: {error: 'failed to create account'}, status: :not_accepted
    end
  end

  def index
    accounts = Account.all
    render json: AccountSerializer.new(accounts)
  end

  def show
    account = Account.find_by(id: params[:id])
    render json: AccountSerializer.new(account)
  end 


  private

  def account_params
    params.require(:account).permit(:username, :email, :password)
  end



end
