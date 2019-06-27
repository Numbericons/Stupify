class Api::UsersController < ApplicationController
  def create
    if params[:user]['confemail'] != params[:user]['email']
      render json: ['Emails do not match'], status: 422
      return false
    end

    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email) #, :confemail
  end
end
