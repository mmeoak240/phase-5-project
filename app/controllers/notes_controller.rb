class NotesController < ApplicationController

  # skip_before_action :authorize, only: :index   
  
  def create
    note = Note.create(note_params)
    if note.valid?
      render json: note, status: :created
    else
      render json: {errors: note.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def index
    render json: Note.all, status: :ok
  end

  
  def show
    note = Note.find_by()
    if note
      render json: note, status: :ok
    else
        render json: {error: "Note not found"}
    end
  end

  def update
    note = @current_user.notes.find_by(id:params[:id])
    if note
      note.update(note_params)
    render json: note, status: :ok
    debugger
    else
      render json: {error: "Note not found"}
    end
  end

  def destroy
    note = Note.find_by(id:params[:id])
    if note
      note.destroy
      head :no_content
    else
      render json: {error: "Note not found"}, status: :not_found
    end
  end

  private

  def note_params
    params.require(:note).permit(:id, :content, :tab, :note_book_id, :user_id, note_book_attributes: [:subject, :cover])
  end
end
