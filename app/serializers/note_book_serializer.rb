class NoteBookSerializer < ActiveModel::Serializer
  attributes :id, :subject, :cover, :notes, :flashcards  #:users
  has_many :notes
  has_many :flashcards
  # has_many :users, through: :notes
end
