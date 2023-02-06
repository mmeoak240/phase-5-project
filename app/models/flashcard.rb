class Flashcard < ApplicationRecord

  belongs_to :user
  belongs_to :note_book
end
