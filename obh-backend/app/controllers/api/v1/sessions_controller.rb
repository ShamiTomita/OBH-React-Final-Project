class Api::V1::SessionsController < ApplicationController

     def create
      
        @account = Account.find_by(username: params[:session][:username])
        if @account && @account.authenticate(params[:session][:password])
          session[:account_id] = @account.id
          render json: {
            user: AccountSerializer.new(@account)
          }
        else
          render json: {
            status: 401,
            error: "Could not authenticate your account"
          }
        end
      end

        def is_logged_in?
        @current_account = Account.find(session[:account_id]) if session[:account_id]
        if @current_account
          render json: {
            logged_in: true,
            user: AccountSerializer.new(@current_account)
          }
        else
          render json: {
            logged_in: false
          }
        end
      end
      def destroy
        session.delete :account_id
        render json: {
          status: 200,
          logged_out: true
        }
      end

end
