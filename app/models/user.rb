class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password_confirmation, presence: true

  has_many :notes
  has_many :flashcards
  has_many :note_books, -> { distinct }, through: :notes
end
