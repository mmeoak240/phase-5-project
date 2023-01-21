class NoteBooksController < ApplicationController

  def create
    notebook = NoteBook.create(notebook_params)
    if notebook.valid?
      render json: notebook, status: :created
    else
      render json: {errors: notebook.errors.full_messages}, status: :unprocessable_entity
  end
end

  def index
    # user = User.find_by(id: session[:user_id])
    render json: NoteBook.all, status: :ok
  end

  
  def show
    notebook = NoteBook.find_by(id:params[:id])
    if notebook
      render json: notebook, status: :ok
    else
      render json: {error: "Notebook not found"}
  end
end

def destroy
  noteBook = NoteBook.find_by(id:params[:id])
  if noteBook
    noteBook.destroy
    head :no_content
  else
    render json: {error: "Notebook not found"}, status: :not_found
  end
end

  private

  def notebook_params
    params.permit(:id, :subject, :cover)
  end

  

end
