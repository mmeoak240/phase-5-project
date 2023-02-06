class NoteBook < ApplicationRecord
  # validates :subject, presence: true
  # validates :cover, presence: true

  has_many :notes
  has_many :flashcards
  has_many :users, through: :notes
end
