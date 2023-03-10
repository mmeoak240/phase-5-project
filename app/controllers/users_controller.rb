class UsersController < ApplicationController
  wrap_parameters format: []

  skip_before_action :authorize, only: :create
  skip_before_action :authorize, only: :update
  skip_before_action :authorize, only: :destroy

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # def create
  #   user = User.create(user_params)
  #   if user.valid?
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   else
  #     render json: { errors: record.errors.full_messages }, status: :unauthorized
  #   end
  # end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :conflict
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end



  def update
    # @current_user.update(user_params)
    user = User.find_by(id: session[:user_id])
    user.update(user_params)
    # render json: @current_user, status: :ok
    render json: user, status: :ok
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :conflict
  end

  # def update
  #   user = User.find_by(id:session[:user_id])
  #   byebug
  #   if user
  #     user.update(user_params)
  #     render json: user, status: :accepted
  #   else
  #     render json: {error: "user not found"}, status: :not_found
  #   end
  # end

  private

  def user_params
    params.permit(:id, :username,  :password, :password_confirmation, :major)
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

def render_not_found
    render json: { error: 'User not found' }, status: :not_found 
end

end
