class Api::V1::SessionsController < ApplicationController
skip_before_action :verify_authenticity_token
     def create
        @account = Account.find_by(username: params[:session][:username])
        if @account.email === params[:session][:email]
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
        else
          render json: {
            status: 401,
            error: "Could not authenticate your account"
          }
        end
      end

    def is_logged_in?
      if logged_in?
       render json: AccountSerializer.new(current_account)
      else
       render json: {
         error: "No one logged in"
       }
     end
   end

      def destroy
        session.delete :account_id
        render json: {
          status: 200,
          is_LoggedIn: false
        }
      end

end
