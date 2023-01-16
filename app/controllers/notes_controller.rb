class NotesController < ApplicationController

  def create
    # byebug
    note = Note.create(note_params)
    if note.valid?
      render json: note, status: :created
      console.log("In NotesController")
      console.log(note)
    else
      render json: {errors: note.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def index
    render json: Note.all, status: :ok
  end

  
  def show
    note = Note.find_by(id:params[:id])
    if note
      render json: note, status: :ok
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

# NEW PARAMS -- DOES NOTE_BOOK NEED TO BE PLURAL?
  def note_params
    params.require(:note).permit(:id, :content, :tab, :note_book_id, :client_id, note_book_attributes: [:subject, :cover])
  end
end
