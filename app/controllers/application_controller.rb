class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :set_current_user
  before_action :authorize


  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

def set_current_user
  if session[:user_id]
    Current.user = User.find_by(id: session[:user_id])
  end
end
  # use currentuser.notes etc in controllers
end
