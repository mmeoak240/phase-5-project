class ApplicationController < ActionController::API
  include ActionController::Cookies

  # def current_user
  #   @user = User.find_by(id: session[:user_id])
  #   render json: user
  # end

  # use currentuser.notes etc in controllers
end
