class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :major

  has_many :notes
  has_many :flashcards
  has_many :note_books, through: :notes
end