class NoteBooksController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: :index 

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def create
    notebook = @current_user.noteBooks.create(notebook_params)
    if notebook.valid?
      render json: notebook, status: :created
    else
      render json: {errors: notebook.errors.full_messages}, status: :unprocessable_entity
    end
end

  def index
    # user = User.find_by(id: session[:user_id])
    render json:  @current_user.note_books, status: :ok
  end

def destroy
  noteBook = NoteBook.find_by(id:params[:id])
  if noteBook
    noteBook.destroy
    head :no_content
  else
    render json: {error: "notebook not found"}, status: :not_found
  end
end

  private

  def notebook_params
    params.permit(:id, :subject, :cover)
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

def render_not_found
    render json: { error: 'Notebook not found' }, status: :not_found 
end

  

end
