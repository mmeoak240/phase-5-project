class Flashcard < ApplicationRecord
  validates :tab, presence: true
  validates :front, presence: true
  validates :back, presence: true

  belongs_to :user
  belongs_to :note_book
end
