class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :set_current_user
  before_action :authorize


  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless User.find_by(id: session[:user_id])
  end

def set_current_user
  if session[:user_id]
    @current_user = User.find_by(id: session[:user_id])
    # Current.user = User.find_by(id: session[:user_id])
  end
end
  # use currentuser.notes etc in controllers
end
