class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :set_current_user

def set_current_user
  if session[:user_id]
    Current.user = User.find_by(id: session[:user_id])
  end
end
  # use currentuser.notes etc in controllers
end
