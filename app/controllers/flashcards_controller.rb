class FlashcardsController < ApplicationController
  # skip_before_action :authorize, only: :create 
  # skip_before_action :authorize, only: :index    
  
  def create
    flashcard = Flashcard.create(flashcard_params)
    if flashcard.valid?
      render json: flashcard, status: :created
    else
      render json: {errors: flashcard.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def index
    render json: @current_user.flashcards.all, status: :ok
  end

  def destroy
    flashcard = Flashcard.find_by(id:params[:id])
    if flashcard
      flashcard.destroy
      head :no_content
    else
      render json: {error: "Flashcard not found"}, status: :not_found
    end
  end

  private

  def flashcard_params
    params.permit(:id, :tab, :front, :back, :note_book_id, :user_id)
  end
end



# "tab": "Mammals",
#     "front": "Vertebrate",
#     "back": "an animal of a large group distinguished by the possession of a backbone or spinal column, including mammals, birds, reptiles, amphibians, and fishes.",
#     "note_book_id": "13"